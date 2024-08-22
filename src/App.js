import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/pages/Home/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Blog from "./Components/pages/Blog";
import BlogDetails from "./Components/pages/BlogDetails";
import Service from "./Components/pages/Service/Service";
import ServiceDetails from "./Components/pages/ServiceDetails";
import HappyClient from "./Components/pages/Happyclient/HappyClient";
import ClientTestimonial from "./Components/pages/ClientTestimonial";
import Teamspage from "./Components/pages/Teams/Teamspage";
import Industries from "./Components/pages/Industries";
import Portfolio from "./Components/pages/Portfolio";
import Websitedesign from "./Components/pages/Websitedesign";
import LogoDesign from "./Components/pages/LogoDesign";
import ProductDesign from "./Components/pages/ProductDesign";
import Staticwebsite from "./Components/pages/Staticwebsite";
import CMSDevelopment from "./Components/pages/CMSDevelopment";
import Wordpress from "./Components/pages/Wordpress";
import PHPDevelopment from "./Components/pages/PHPDevelopment";
import CodeIgnitor from "./Components/pages/CodeIgnitor";
import CakePhp from "./Components/pages/CakePhp";
import SocialMedia from "./Components/pages/SocialMedia";
import Laravel from "./Components/pages/Laravel";
import Angular from "./Components/pages/Angular";
import Wocommerce from "./Components/pages/Wocommerce";
import Magento from "./Components/pages/Magento";
import Shopify from "./Components/pages/Shopify";
import Opencart from "./Components/pages/Opencart";
import CustomEcommerce from "./Components/pages/CustomEcommerce";
import Wix from "./Components/pages/Wix";
import Seo from "./Components/pages/Seo";
import SMO from "./Components/pages/SMO";
import SMM from "./Components/pages/SMM";
import GoogleAd from "./Components/pages/GoogleAd";
import Android from "./Components/pages/Android";
import Ios from "./Components/pages/Ios";
import Hybrid from "./Components/pages/Hybrid";
import Native from "./Components/pages/Native";
import GPS from "./Components/pages/GPS";
import Web from "./Components/pages/Web";
import Iot from "./Components/pages/Iot";
import WebDev from "./Components/pages/WebDev";
import EcommerceSolution from "./Components/pages/EcommerceSolution";
import DigitalMarketing from "./Components/pages/DigitalMarketing";
import AppDev from "./Components/pages/AppDev";
import WebAcceseblity from "./Components/pages/WebAcceseblity";
import GraphicDesign from './Components/pages/GraphicDesign'
import PPC from "./Components/pages/PPC";
import CRP from "./Components/pages/CRP";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to='/home'/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog-details" element={<BlogDetails/>}/>
            <Route path="/service" element={<Service />} />
            <Route path="/servicedetails" element={<ServiceDetails />} />
            <Route path="/happyclient" element={<HappyClient />} />
            <Route path="/clienttestimonial" element={<ClientTestimonial />} />
            <Route path="/ourexperts" element={<Teamspage/>} />
            <Route path="/industries" element={<Industries/>} />
            <Route path="/portfolio" element={<Portfolio/>} />

            <Route path="websitedesign" element={<Websitedesign/>}/>
            <Route path="/logodesign" element={<LogoDesign/>}/>
            <Route path="/productdesign" element={<ProductDesign/>}/>
            <Route path="/socialmediacreativedesign" element={<SocialMedia/>}/>

            <Route path="/staticebsitedevelopment" element={<Staticwebsite/>}/>
            <Route path="/cmsdevelopment" element={<CMSDevelopment/>}/>
            <Route path="/wordpressdevelopment" element={<Wordpress/>}/>
            <Route path="/phpdevelopment" element={<PHPDevelopment/>}/>
            <Route path="/codeignitorevelopment" element={<CodeIgnitor/>}/>
            <Route path="/cakephpdevelopment" element={<CakePhp/>}/>
            <Route path="/laraveldevelopment" element={<Laravel/>}/>
            <Route path="/angularjsdevelopment" element={<Angular/>}/>
            <Route path="/wixdevelopment" element={<Wix/>}/>

            <Route path="/wocommercedevelopment" element={<Wocommerce/> }/>
            <Route path="/magentodevelopment" element={<Magento/>}/>
            <Route path="/shopifydevelopment" element={<Shopify/>}/>
            <Route path="/opencartdevelopment" element={<Opencart/>}/>
            <Route path="/customecommercedevelopment" element={<CustomEcommerce/>}/>

            <Route path="/seo" element={<Seo/>}/>
            <Route path="/smo" element={<SMO/> }/>
            <Route path="/ppc" element={<PPC/> }/>
            <Route path="/crp" element={<CRP/> }/>
            <Route path="/smm" element={<SMM/> }/>
            <Route path="/googlead" element={<GoogleAd/>}/>

            <Route path="/androiddevelopment" element={<Android/>}/>
            <Route path="/iosdevelopment" element={<Ios/> }/>
            <Route path="/hybridappdevelopment" element={<Hybrid/> }/>
            <Route path="/nativeappdevelopment" element={<Native/>}/>

            <Route path="/gps" element={<GPS/>}/>
            <Route path="/web" element={<Web/>}/>
            <Route path="/iot" element={<Iot/>}/>

            <Route path="/web-development" element={<WebDev/>}/>
            <Route path="/graphic-design" element={<GraphicDesign />}/>
            <Route path="/ecommerce-solution" element={<EcommerceSolution/>}/>
            <Route path="/digital-marketing" element={<DigitalMarketing/>}/>
            <Route path="/app-development" element={<AppDev/>}/>
            <Route path="/web-accesseblity" element={<WebAcceseblity/>}/>
           



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
