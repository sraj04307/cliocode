import React, {useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import img from '../../../assets/img/logo/img1.png'
import { headerApi } from '../../../api/Api_check'

const Header = () => {

    // const [active1, setActive1] = useState(false);
    // const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [data,setData] = useState();

    useEffect(() => {
      getHeader()
    }, [])
    

    const getHeader = () =>{
        headerApi('https://mastergosen.com/wp-json/header/navigation')
        .then((result)=>(
            setData(result)
        ))
        .catch((error)=>(
            console.log(error)
        ))
    }

    return (
        <header>
            <div id="header-sticky" className="header-3">
                <div className="plane-shape">
                    <img src="assets/img/plane.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link to="/" className="header-logo">
                                        <img src={img} className='logo' alt="logo-img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper d-none d-lg-block">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown active menu-thumb">
                                                    <NavLink to={`/${data?.data[0].slug}`}>
                                                        {data?.data[0].title}
                                                    </NavLink>
                                                </li>

                                                <li>
                                                    <NavLink>
                                                        Our Story
                                                        <i className="fas fa-angle-down"></i>
                                                    </NavLink>
                                                    <ul className="submenu">
                                                        <li><Link to={`/${data?.data[1].slug}`}> {data?.data[1].title}</Link></li>
                                                        <li><Link to={`/${data?.data[5].slug}`}>Blog</Link></li>
                                                        <li><Link to="/happyclient">Our Happy Client</Link></li>
                                                        <li><Link to="/clienttestimonial">Client Testimonial</Link></li>
                                                        <li><Link to="/ourexperts">Our Experts</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="has-dropdown">
                                                    <NavLink to="/service">
                                                        Our Service
                                                        <i className="fas fa-angle-down"></i>
                                                    </NavLink>
                                                    <ul className="submenu">
                                                        <li className="has-dropdown">
                                                            <Link to='/graphic-design'>
                                                                Graphics Designing
                                                                {/* <i className="fas fa-angle-down"></i> */}
                                                            </Link>
                                                            {/* <ul className="submenu">
                                                                <li><Link to="websitedesign">Website Designing</Link></li>
                                                                <li><Link to="logodesign">Logo Designing</Link></li>
                                                                <li><Link to="productdesign">Product Designing</Link></li>
                                                                <li><Link to="socialmediacreativedesign">Social Media Creative Designing</Link></li>

                                                            </ul> */}
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link to='/web-development'>
                                                                Web Development
                                                                {/* <i className="fas fa-angle-down"></i> */}
                                                            </Link>
                                                            {/* <ul className="submenu">
                                                                <li><Link to="staticebsitedevelopment">Static Website Development</Link></li>
                                                                <li><Link to="cmsdevelopment">CMS Development</Link></li>
                                                                <li><Link to="wordpressdevelopment">WordPress Development</Link></li>
                                                                <li><Link to="phpdevelopment">PHP Development</Link></li>
                                                                <li><Link to="codeignitorevelopment">CodeIgniter Development</Link></li>
                                                                <li><Link to="cakephpdevelopment">CakePHP Development</Link></li>
                                                                <li><Link to="laraveldevelopment">Laravel Development</Link></li>
                                                                <li><Link to="angularjsdevelopment">Angular JS Development</Link></li>
                                                                <li><Link to="wixdevelopment">WIX Development</Link></li>
                                                            </ul> */}
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link to='/ecommerce-solution'>
                                                                E-commerce Solution
                                                                {/* <i className="fas fa-angle-down"></i> */}
                                                            </Link>
                                                            {/* <ul className="submenu">
                                                                <li><Link to="wocommercedevelopment">WooCommerce Development</Link></li>
                                                                <li><Link to="magentodevelopment">Magento Development</Link></li>
                                                                <li><Link to="shopifydevelopment">Shopify Development</Link></li>
                                                                <li><Link to="opencartdevelopment">OpenCart Development</Link></li>
                                                                <li><Link to="customecommercedevelopment">Custom E-commerce Development</Link></li>
                                                            </ul> */}
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link to="/digital-marketing">
                                                                Digital Marketing
                                                                {/* <i className="fas fa-angle-down"></i> */}
                                                            </Link>
                                                            {/* <ul className="submenu">
                                                                <li><Link to="seo">Search Engine Optimization (SEO)</Link></li>
                                                                <li><Link to="smo">Social Media Optimization (SMO)</Link></li>
                                                                <li><Link to="smm">Social Media Marketing (SMM)</Link></li>
                                                                <li><Link to="googlead">Google Ad Campaign</Link></li>
                                                            </ul> */}
                                                        </li>
                                                        <li className="has-dropdown">
                                                            <Link to='/app-development'>
                                                                App Development
                                                                {/* <i className="fas fa-angle-down"></i> */}
                                                            </Link>
                                                            {/* <ul className="submenu">
                                                                <li><Link to="androiddevelopment">Android App Development</Link></li>
                                                                <li><Link to="iosdevelopment">iOS App Development</Link></li>
                                                                <li><Link to="hybridappdevelopment">Hybrid App Development</Link></li>
                                                                <li><Link to="nativeappdevelopment">Native App Development</Link></li>
                                                            </ul> */}
                                                        </li>
                                                        {/* <li>
                                                            <Link to="gps">
                                                                GPS Tracking Solution

                                                            </Link>

                                                        </li> */}
                                                        <li>
                                                            <Link to="/web-accesseblity">
                                                                Web Accessibility

                                                            </Link>

                                                        </li>
                                                        {/* <li>
                                                            <Link to="iot">
                                                                IOT Development

                                                            </Link>

                                                        </li> */}

                                                    </ul>
                                                </li>

                                                <li>
                                                    <NavLink>
                                                        Package
                                                        <i className="fas fa-angle-down"></i>
                                                    </NavLink>
                                                    <ul className="submenu">
                                                        <li><Link to="/seo">SEO Package</Link></li>
                                                        <li><Link to="/smo">SMO Package</Link></li>
                                                        <li><Link to="/ppc">PPC Package</Link></li>
                                                        <li><Link to="/crp">Content Writing Package</Link></li>
                                                        
                                                    </ul>
                                                </li>

                                                <li>
                                                    <NavLink to="/industries">
                                                        Industries
                                                    </NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to="/portfolio">Portfolio</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to="/contact">Contact Us</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* <Link to="#0" className="search-trigger search-icon"><i className="fal fa-search"></i></Link> */}
                                <div className="header-button">
                                    <Link to="/" className="theme-btn bg-white">
                                        <span>
                                            get A Quote
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-lg-none my-auto">
                                    <div className="sidebar__toggle">
                                        <i className="fas fa-bars" onClick={() => setActive3(!active3)}></i>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>

            <div className={active3 ? 'sidemenu-container d-block d-lg-none active3' : 'sidemenu-container d-block d-lg-none'}>

                <div className="sidemenu w-75">

                    <div className='d-flex justify-content-between align-items-center p-2 border-bottom'>
                        <div className="logo">
                            <Link to="/" className="header-logo">
                                <img src={img} className='logo2' alt="logo-img" />
                            </Link>
                        </div>
                        <div className='close-btn-container' onClick={() => setActive3(!active3)}>
                            <i className="fa-regular fa-circle-xmark"></i>
                        </div>
                    </div>


                    <nav id="mobile-menu" className="px-2">
                        <ul>
                            <li>
                                <Link to='/' onClick={() => setActive3(false)}>Home</Link>
                            </li>
                            <li>
                                <Link to='/about' onClick={() => setActive3(false)}>About</Link>
                            </li>
                            <li>
                                <Link to='/blog' onClick={() => setActive3(false)}>Blog</Link>
                            </li>
                            <li className='service-menu'>
                                <div>
                                    <Link to='/service' onClick={() => setActive3(false)}>Service</Link>

                                    <i className="fa-solid fa-caret-down" onClick={()=>setActive4(!active4)}></i>
                                </div>

                                <ul className={active4?'active4':''}>
                                    <li><Link to='/graphic-design' onClick={() => setActive3(false)}>Graphic Designing</Link></li>
                                    <li><Link to='/web-development' onClick={() => setActive3(false)}>Web Development</Link></li>
                                    <li><Link to='/ecommerce-solution' onClick={() => setActive3(false)}>Ecommerce Solution</Link></li>
                                    <li><Link to='/digital-marketing' onClick={() => setActive3(false)}>Digital Marketing</Link></li>
                                    <li><Link to='/app-development' onClick={() => setActive3(false)}>App Development</Link></li>
                                    <li><Link to='/web-accesseblity' onClick={() => setActive3(false)}>Web Acceseblity</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/industries' onClick={() => setActive3(false)}>Industries</Link>
                            </li>
                            <li>
                                <Link to='/portfolio' onClick={() => setActive3(false)}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to='/contact' onClick={() => setActive3(false)}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <div className="side-space-left w-25 " onClick={()=>setActive3(!active3)}>
                <i className="fa-regular fa-circle-xmark"></i>
                </div> */}
            </div>

        </header>
    )
}

export default Header
