import React, { useEffect } from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Footer from '../Component/Footer/Footer'

const ServiceDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Empty dependency array to ensure this runs only once when the component mounts

    return (
        <>
            <Banner2 message={"Service Details"} />
            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4 order-2 order-md-1">
                                <div className="main-sidebar">
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>All Services</h3>
                                        </div>
                                        <div className="widget-categories">
                                            <ul>
                                                <li><a href="service-details.html">Database Security</a><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><a href="service-details.html">IT Consultancy</a><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li className="active"><a href="service-details.html">App Development</a><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><a href="service-details.html">UI/UX Design</a><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><a href="service-details.html">Cyber Security</a><i className="fa-solid fa-arrow-right-long"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Opening Hours</h3>
                                        </div>
                                        <div className="opening-category">
                                            <ul>
                                                <li><i className="fa-regular fa-clock"></i>Mon - Sat: 10.00 AM - 4.00 PM</li>
                                                <li><i className="fa-regular fa-clock"></i>Sun: 09.00 AM - 4.00 PM</li>
                                                <li><i className="fa-regular fa-clock"></i>Friday: Closed</li>
                                                <li><i className="fa-regular fa-clock"></i>Emergency: 24 hours</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-image bg-cover" 
                                    // style={{ backgroundImage: "url('assets/img/service/post.jpg')" }}
                                    >
                                        <div className="contact-text">
                                            <div className="icon">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <h4>Need Help? Call Here</h4>
                                            <h5>
                                                <a href="tel:+2085550112">+208-555-0112</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 order-1 order-md-2">
                                <div className="service-details-items">
                                    <div className="details-image">
                                        <img src="assets/img/service/details-1.jpg" alt="img" />
                                    </div>
                                    <div className="details-content">
                                        <h3>IT Consultancy</h3>
                                        <p className="mt-3">
                                            The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
                                        </p>
                                        <p className="mt-3">
                                            lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.
                                        </p>
                                        <div className="details-video-items">
                                            <div className="video-thumb">
                                                <img src="assets/img/service/details-video.jpg" alt="img" />
                                                <div className="video-box">
                                                    <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                                        <i className="fa-solid fa-play"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h4>Benefits With Our Service</h4>
                                                <p> Fusce is eleifend porta arcu In hac <br /> habitasse the platea thelorem</p>
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check"></i>
                                                        Branding and design Identity
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check"></i>
                                                        Web site Marketing Solutions
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check"></i>
                                                        unlimited Download Data
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>
                                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                        </p>
                                        <div className="image-area">
                                            <div className="row g-4">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="thumb">
                                                        <img src="assets/img/service/details-2.jpg" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="thumb">
                                                        <img src="assets/img/service/details-3.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>Most Comment Question?</h3>
                                        <p className="mt-3">
                                            The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada.
                                        </p>
                                    </div>
                                    <div className="faq-content style-3">
                                        <div className="faq-accordion">
                                            <div className="accordion" id="accordion">
                                                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                                                    <h5 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                            Where should I incorporate my business?
                                                        </button>
                                                    </h5>
                                                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                                                    <h5 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                                            How long should a business plan be?
                                                        </button>
                                                    </h5>
                                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                                    <h5 className="accordion-header">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                                            What is included in your services?
                                                        </button>
                                                    </h5>
                                                    <div id="faq3" className="accordion-collapse show" data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                                                    <h5 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                                            What type of company is measured?
                                                        </button>
                                                    </h5>
                                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ServiceDetails
