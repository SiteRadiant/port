const RAW_ZOHO_FLOW_WEBHOOK_URL = process.env.REACT_APP_ZOHO_FLOW_WEBHOOK_URL || '';
const ZOHO_FLOW_WEBHOOK_URL = RAW_ZOHO_FLOW_WEBHOOK_URL.trim().replace(/^['"]|['"]$/g, '');

export async function sendLeadToZohoFlow(payload) {
  if (!ZOHO_FLOW_WEBHOOK_URL) {
    return {
      ok: false,
      skipped: true,
      message: 'Missing REACT_APP_ZOHO_FLOW_WEBHOOK_URL',
    };
  }

  if (!ZOHO_FLOW_WEBHOOK_URL.includes('flow.zoho.in')) {
    return {
      ok: false,
      skipped: true,
      message: 'Invalid Zoho Flow endpoint',
    };
  }

  const body = {
    source: 'siteradiant-web',
    submittedAt: new Date().toISOString(),
    ...payload,
  };

  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    formData.append(key, String(value));
  });

  // Prefer beacon for fire-and-forget webhook submissions.
  const encoded = new URLSearchParams();
  formData.forEach((v, k) => {
    if (typeof v === 'string') encoded.append(k, v);
  });

  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
    const sent = navigator.sendBeacon(ZOHO_FLOW_WEBHOOK_URL, encoded);
    if (sent) {
      return { ok: true, skipped: false, transport: 'beacon' };
    }
  }

  try {
    await fetch(ZOHO_FLOW_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
      keepalive: true,
    });
    return { ok: true, skipped: false, transport: 'fetch-no-cors' };
  } catch (err) {
    throw new Error(`Zoho webhook request failed: ${String(err?.message || err)}`);
  }
}
