const fs = require('fs');

let appJs = fs.readFileSync('src/App.js', 'utf8');

const imports = `
import WebsiteDev from './pages/services/websitedevelopment';
import LandingPageDev from './pages/services/landingpagedevelopment';
import EcommerceDev from './pages/services/ecommercedevelopment';
import LmsDev from './pages/services/lmsdevelopment';
import WebCostArticle from './pages/articles/websitecostindia';
import WebVsLandingArticle from './pages/articles/websitevslandingpage';
`;

const routes = `
            <Route path="/website-development" element={<WebsiteDev />} />
            <Route path="/landing-page-development" element={<LandingPageDev />} />
            <Route path="/ecommerce-development" element={<EcommerceDev />} />
            <Route path="/lms-development" element={<LmsDev />} />
            <Route path="/website-cost-india" element={<WebCostArticle />} />
            <Route path="/website-vs-landing-page" element={<WebVsLandingArticle />} />
`;

appJs = appJs.replace("import { UIProvider } from './context/UIContext';", "import { UIProvider } from './context/UIContext';" + imports);
appJs = appJs.replace("<Route path=\"/contact\" element={<Home />} />", "<Route path=\"/contact\" element={<Home />} />" + routes);

fs.writeFileSync('src/App.js', appJs);

let mockJs = fs.readFileSync('src/mock/mock.js', 'utf8');
mockJs = mockJs.replace("{ label: 'Website Development', slug: 'website' }", "{ label: 'Website Development', href: '/website-development' }");
mockJs = mockJs.replace("{ label: 'Landing Page Development', slug: 'landing_page' }", "{ label: 'Landing Page Development', href: '/landing-page-development' }");
mockJs = mockJs.replace("{ label: 'E-Commerce', slug: 'ecommerce' }", "{ label: 'E-Commerce', href: '/ecommerce-development' }");
mockJs = mockJs.replace("{ label: 'Learning Management System', slug: 'lms' }", "{ label: 'Learning Management System', href: '/lms-development' }");
mockJs = mockJs.replace("{ label: 'Retail & Commerce', slug: 'ecommerce' }", "{ label: 'Retail & Commerce', href: '/ecommerce-development' }");

fs.writeFileSync('src/mock/mock.js', mockJs);
console.log("App.js and mock.js updated!");
