import React from 'react'
import { Link } from 'react-router-dom'
import './Service1.css'

const Service = () => {


  return (
    <section className="service-section-3 pb-0 fix section-padding bg-cover" 
    >
    <div className="container">
        <div className="section-title-area">
            <div className="section-title">
                <span className={'active'}>What We Do</span>
                <h2 className={'active sr-subheading-font-size'}>
                    We Solve IT Problems <br/> With Technology
                </h2>
            </div>
            <Link to="/service" className={"theme-btn active"}>
                See all Services
                <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
        </div>
        <div className="row">
            <div className={"col-xl-3 col-lg-4 col-md-6 my-card1 active"}>
                <div className="service-card-items">
                    <div className="service-image">
                        <img src="assets/img/service/06.jpg" alt="service-img"/>
                    </div>
                    <div className="icon-2">
                        <img src="assets/img/service/icon/s-icon-1.svg" alt="img"/>
                    </div>
                    <div className="service-content">
                        <div className="icon">
                            <img src="assets/img/service/icon/s-icon-1.svg" alt="img"/>
                        </div>
                        <h4>
                            <Link to="service-details.html">Web Development</Link>
                        </h4>
                        <p>
                            accumsan. Pellentesque in magna tincidunt, this is.
                        </p>
                        <Link to="service-details.html" className="theme-btn-2 mt-3">
                            read More
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className={"col-xl-3 col-lg-4 col-md-6 my-card2 active"}>
                <div className="service-card-items">
                    <div className="service-image">
                        <img src="assets/img/service/07.jpg" alt="service-img"/>
                    </div>
                    <div className="icon-2">
                        <img src="assets/img/service/icon/s-icon-2.svg" alt="img"/>
                    </div>
                    <div className="service-content">
                        <div className="icon">
                            <img src="assets/img/service/icon/s-icon-2.svg" alt="img"/>
                        </div>
                        <h4>
                            <Link to="service-details.html">Ecommerce Solution</Link>
                        </h4>
                        <p>
                            accumsan. Pellentesque in magna tincidunt, this is.
                        </p>
                        <Link to="service-details.html" className="theme-btn-2 mt-3">
                            read More
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={"col-xl-3 col-lg-4 col-md-6 my-card3 active"}>
                <div className="service-card-items">
                    <div className="service-image">
                        <img src="assets/img/service/08.jpg" alt="service-img"/>
                    </div>
                    <div className="icon-2">
                        <img src="assets/img/service/icon/s-icon-4.svg" alt="img"/>
                    </div>
                    <div className="service-content">
                        <div className="icon">
                            <img src="assets/img/service/icon/s-icon-5.svg" alt="img"/>
                        </div>
                        <h4>
                            <Link to="service-details.html">App Development</Link>
                        </h4>
                        <p>
                            accumsan. Pellentesque in magna tincidunt, this is.
                        </p>
                        <Link to="service-details.html" className="theme-btn-2 mt-3">
                            read More
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={"col-xl-3 col-lg-4 col-md-6 my-card4 active"}>
                <div className="service-card-items">
                    <div className="service-image">
                        <img src="assets/img/service/09.jpg" alt="service-img"/>
                    </div>
                    <div className="icon-2">
                        <img src="assets/img/service/icon/s-icon-3.svg" alt="img"/>
                    </div>
                    <div className="service-content">
                        <div className="icon">
                            <img src="assets/img/service/icon/s-icon-3.svg" alt="img"/>
                        </div>
                        <h4>
                            <Link to="service-details.html">Digital Marketing</Link>
                        </h4>
                        <p>
                            accumsan. Pellentesque in magna tincidunt, this is.
                        </p>
                        <Link to="service-details.html" className="theme-btn-2 mt-3">
                            read More
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
  )
}

export default Service
