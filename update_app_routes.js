const fs = require('fs');

let appJs = fs.readFileSync('src/App.js', 'utf8');

const imports = `
import CustomWebsiteDev from './pages/services/customwebsitedevelopment';
import WebsiteRedesign from './pages/services/websiteredesign';
import ConversionWebDesign from './pages/services/conversionfocusedwebdesign';
import ShopifyAlternatives from './pages/services/shopifyalternatives';
import CustomCostArticle from './pages/articles/howmuchdoesacustomwebsitecost';
import CustomVsShopifyArticle from './pages/articles/customwebsitevsshopify';
import RedesignArticle from './pages/articles/whentoredesignyourwebsite';
import WhyFailsArticle from './pages/articles/whywebsitesfailtoconvert';
`;

const routes = `
            <Route path="/custom-website-development" element={<CustomWebsiteDev />} />
            <Route path="/website-redesign" element={<WebsiteRedesign />} />
            <Route path="/conversion-focused-web-design" element={<ConversionWebDesign />} />
            <Route path="/shopify-alternatives" element={<ShopifyAlternatives />} />
            
            <Route path="/how-much-does-a-custom-website-cost" element={<CustomCostArticle />} />
            <Route path="/custom-website-vs-shopify" element={<CustomVsShopifyArticle />} />
            <Route path="/when-to-redesign-your-website" element={<RedesignArticle />} />
            <Route path="/why-websites-fail-to-convert" element={<WhyFailsArticle />} />
`;

appJs = appJs.replace("import { UIProvider } from './context/UIContext';", "import { UIProvider } from './context/UIContext';" + imports);
appJs = appJs.replace("<Route path=\"/contact\" element={<Home />} />", "<Route path=\"/contact\" element={<Home />} />" + routes);

fs.writeFileSync('src/App.js', appJs);

console.log("App.js updated!");
