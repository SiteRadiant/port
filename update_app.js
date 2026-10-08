const fs = require('fs');
let code = fs.readFileSync('src/App.js', 'utf8');
code = code.replace(
  "logo: `${window.location.origin}/logo192.png`,\n              sameAs: [],\n            },",
  "logo: `${window.location.origin}/logo192.png`,\n              sameAs: [],\n              contactPoint: {\n                '@type': 'ContactPoint',\n                telephone: '+91-98765-43210',\n                email: 'hello@siteradiant.co.in',\n                contactType: 'customer service'\n              },\n              address: {\n                '@type': 'PostalAddress',\n                streetAddress: '123 Tech Park, Andheri East',\n                addressLocality: 'Mumbai',\n                addressRegion: 'Maharashtra',\n                postalCode: '400069',\n                addressCountry: 'IN'\n              }\n            },"
);
fs.writeFileSync('src/App.js', code);
console.log('App.js schema updated');
