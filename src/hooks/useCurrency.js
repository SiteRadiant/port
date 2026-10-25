import { useRegion } from '../context/RegionContext';

/**
 * useCurrency hook - updated to support dynamic multi-region pricing while
 * maintaining full backwards compatibility for components calling formatPrice.
 */
export function useCurrency() {
  const {
    formatPrice,
    formatAmount,
    formatStartingPrice,
    getStartingPrice,
    currentRegion,
    regionCode,
    selectRegion,
    regions,
    budgets,
    hostingAddon
  } = useRegion();

  return {
    formatPrice,
    formatAmount,
    formatStartingPrice,
    getStartingPrice,
    currentRegion,
    regionCode,
    selectRegion,
    regions,
    budgets,
    hostingAddon
  };
}
