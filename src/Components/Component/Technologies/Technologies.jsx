import React, { useState } from 'react'
import './Technologies.css'
import { Link } from 'react-router-dom';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiCanva, SiGoogleads, SiGoogleanalytics, SiKotlin, SiMongodb, SiSemrush, SiWoo, SiZoho } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoFigma, IoLogoFirebase, IoLogoIonic } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiCodeigniter, DiDotnet, DiJqueryLogo } from "react-icons/di";
import { RiFlutterFill} from "react-icons/ri";
import { FaHubspot, FaInstagramSquare, FaLaravel, FaLinkedin, FaMailchimp, FaSwift, FaYoutube } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { TbSeo } from 'react-icons/tb';



const Technologies = () => {

    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(true)
    const [active6, setActive6] = useState(false)
    const [active7, setActive7] = useState(false)

    function activate1() {
        setActive1(true)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
        setActive6(false)
        setActive7(false)
    }
    function activate2() {
        setActive1(false)
        setActive2(true)
        setActive3(false)
        setActive4(false)
        setActive5(false)
        setActive6(false)
        setActive7(false)
    }
    function activate3() {
        setActive1(false)
        setActive2(false)
        setActive3(true)
        setActive4(false)
        setActive5(false)
        setActive6(false)
        setActive7(false)
    }
    function activate4() {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(true)
        setActive5(false)
        setActive6(false)
        setActive7(false)
    }
    function activate5() {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(true)
        setActive6(false)
        setActive7(false)
    }
    function activate6() {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
        setActive6(true)
        setActive7(false)
    }
    function activate7() {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
        setActive6(false)
        setActive7(true)
    }


    return (
        <section className="tech-section">
            <div className="container">
                <div className="tech-header">
                    <h2 className='sr-subheading-font-size'>Technologies We Work</h2>
                    <p>We work with various technologies to solve for your exact business use case. We are a technology
                        driven company, hence we are always ahead in terms of adapting latest technical trends and
                        implementing them.</p>
                </div>
                <div className="tech-tabs">
                    <ul className="nav nav-pills justify-content-lg-between justify-content-left align-items-center shadow rounded">
                    <li className="nav-item" onClick={activate5}>
                            <Link className={active5 ? "nav-link active" : "nav-link"} ><i className="fas fa-edit"></i> CMS</Link>
                        </li>
                        <li className="nav-item" onClick={activate2}>
                            <Link className={active2 ? "nav-link active" : "nav-link"}><i className="fas fa-desktop"></i> Front
                                End</Link>
                        </li>
                        <li className="nav-item" onClick={activate4}>
                            <Link className={active4 ? "nav-link active" : "nav-link"} ><i className="fas fa-server"></i>
                                Backend</Link>
                        </li>
                        <li className="nav-item" onClick={activate3}>
                            <Link className={active3 ? "nav-link active" : "nav-link"}><i className="fas fa-database"></i>
                                Database</Link>
                        </li>
                        <li className="nav-item " onClick={activate1}>
                            <Link className={active1 ? "nav-link active" : "nav-link"}>
                                <i className="fas fa-mobile-alt"></i> Mobile</Link>
                        </li>
                        
                        
                      
                       
                        <li className="nav-item" onClick={activate6}>
                            <Link className={active6 ? "nav-link active" : "nav-link"} ><i className="fa-solid fa-pen-ruler"></i> UX Design</Link>
                        </li>
                        <li className="nav-item" onClick={activate7}>
                            <Link className={active7 ? "nav-link active" : "nav-link"} >
                            <i className="fa-brands fa-digital-ocean"></i>
                                 Digital </Link>
                        </li>
                        
                    </ul>
                </div>
                <div className={active1 ? "tab-content active" : "tab-content"} id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-mobile" role="tabpanel"
                        aria-labelledby="pills-mobile-tab">
                        <div className="tech-icons">
                            <div className="tech-icon">
                                <i className="fab fa-apple"></i>
                                <p>iOS</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fab fa-android"></i>
                                <p>Android</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fab fa-react"></i>
                                <p>React Native</p>
                            </div>
                            <div className="tech-icon">
                                <RiFlutterFill />

                                <p>Flutter</p>
                            </div>
                            <div className="tech-icon">
                                <IoLogoIonic />
                                <p>Ionic</p>
                            </div>
                            <div className="tech-icon">
                                <FaSwift />

                                <p>Swift</p>
                            </div>
                            <div className="tech-icon">
                                <SiKotlin />
                                <p>Kotlin</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={active2 ? "tab-content active" : "tab-content"} id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-mobile" role="tabpanel"
                        aria-labelledby="pills-mobile-tab">
                        <div className="tech-icons">
                            <div className="tech-icon">
                                <i className="fa-brands fa-angular"></i>
                                <p>Angular</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-vuejs"></i>
                                <p>vue</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fab fa-react"></i>
                                <p>React</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-html5"></i>
                                <p>Html</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-css3-alt"></i>
                                <p>Css</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-js"></i>
                                <p>Javascript</p>
                            </div>
                            <div className="tech-icon">
                                <DiJqueryLogo />
                                <p>jQuery</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-bootstrap"></i>
                                <p>Bootstrap</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={active3 ? "tab-content active" : "tab-content"} id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-mobile" role="tabpanel"
                        aria-labelledby="pills-mobile-tab">
                        <div className="tech-icons">
                            <div className="tech-icon">
                                <SiMongodb />

                                <p>MongoDb</p>
                            </div>
                            <div className="tech-icon">
                                <GrMysql />
                                <p>MySql</p>
                            </div>
                            <div className="tech-icon">
                                <IoLogoFirebase />

                                <p>Firebase</p>
                            </div>
                            <div className="tech-icon">

                                <BiLogoPostgresql />
                                <p>Postgresql</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={active4 ? "tab-content active" : "tab-content"} id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-mobile" role="tabpanel"
                        aria-labelledby="pills-mobile-tab">
                        <div className="tech-icons">
                            <div className="tech-icon">
                                <i className="fa-brands fa-php"></i>
                                <p>PHP</p>
                            </div>
                            
                            <div className="tech-icon">
                                <FaLaravel />
                                <p>Laravel</p>
                            </div>
                            <div className="tech-icon">
                            <DiCodeigniter/>
                                <p>Codeigniter</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-python"></i>
                                <p>Python</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-node"></i>
                                <p>Node js</p>
                            </div>
                            
                            <div className="tech-icon">
                            <DiDotnet/>
                                <p>.Net</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={active5 ? "tab-content active" : "tab-content"} id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-mobile" role="tabpanel"
                        aria-labelledby="pills-mobile-tab">
                        <div className="tech-icons">
                            <div className="tech-icon">
                            <SiWoo/>
                                <p>Woo Commerce</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-wordpress"></i>
                                <p>Wordpress</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-magento"></i>
                                <p>Magento</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-opencart"></i>
                                <p>Open Cart</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-shopify"></i>
                                <p>Shopify</p>
                            </div>
                            <div className="tech-icon">
                                <i className="fa-brands fa-wix"></i>
                                <p>Wix</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={active6 ? "tab-content active" : "tab-content"} id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-mobile" role="tabpanel"
                        aria-labelledby="pills-mobile-tab">
                        <div className="tech-icons">
                            <div className="tech-icon">
                            <SiAdobephotoshop/>
                                <p>Photoshop</p>
                            </div>
                            <div className="tech-icon">
                            <SiAdobeillustrator/>
                                <p>Illustrator</p>
                            </div>
                            <div className="tech-icon">
                            <IoLogoFigma/>
                                <p>Figma</p>
                            </div>
                            <div className="tech-icon">
                            <SiAdobexd/>
                                <p>Adobe Xd</p>
                            </div>
                            <div className="tech-icon">
                            <SiCanva/>
                                <p>Canva</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={active7 ? "tab-content active" : "tab-content"} id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-mobile" role="tabpanel"
                        aria-labelledby="pills-mobile-tab">
                        <div className="tech-icons">
                            <div className="tech-icon">
                            <SiGoogleads/>
                                <p>Google Ad</p>
                            </div>
                            <div className="tech-icon">
                                <FaSquareFacebook/>
                                <p>Facebook</p>
                            </div>
                            <div className="tech-icon">
                            <FaInstagramSquare/>
                                <p>Instagram</p>
                            </div>
                            <div className="tech-icon">
                            <FaYoutube/>
                                <p>Youtube</p>
                            </div>
                            <div className="tech-icon">
                            <FaLinkedin/>
                                <p>LinkedIn</p>
                            </div>
                            <div className="tech-icon">
                            <SiSemrush/>
                                <p>Semrush</p>
                            </div>
                            <div className="tech-icon">
                            <TbSeo/>
                                <p>SEO</p>
                            </div>
                            <div className="tech-icon">
                            <SiZoho/>
                                <p>Zoho</p>
                            </div>
                            <div className="tech-icon">
                            <FaHubspot/>
                                <p>HubSpot</p>
                            </div>
                            <div className="tech-icon">
                            <FaMailchimp/>
                                <p>MailChimp</p>
                            </div>
                            <div className="tech-icon">
                            <SiGoogleanalytics/>
                                <p>Google Analytics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies
