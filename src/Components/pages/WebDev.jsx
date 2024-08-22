import React, { useEffect } from 'react'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import '../../assets/css/WebDev.css'
import { Link } from 'react-router-dom'
import img from '../../assets/img/webdev/webdevsection.png'
import Hiw from '../Component/Others/Hiw/Hiw'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import img1 from '../../assets/img/portfolio/port1.png'
import img2 from '../../assets/img/portfolio/part2.png'
import img3 from '../../assets/img/portfolio/port3.png'
import img4 from '../../assets/img/portfolio/port4.png'
import img5 from '../../assets/img/portfolio/port5.png'
import img6 from '../../assets/img/portfolio/port6.png'

import img7 from '../../assets/img/Banner2/Web Dev.jpg'

const WebDev = () => {

    useEffect(() => {
        document.title = "Web Development"; // Set the document title to "Home"

        const metaDescription = document.querySelector('meta[name="description"]');
        metaDescription.setAttribute("content", "Web Development");

        window.scrollTo(0, 0);

    }, []);

    return (
        <>
            <Banner2 message={"Web Development"} image ={img7}/>
            <section className="webdevelopment-section1 section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 content-box">
                            <h2 className='sr-subheading-font-size'>One-Stop Solution For Web Development</h2>
                            <p>As a leading WordPress Website Development Company, we at MWD are proud to offer the best and most affordable website design services tailored to meet your specific needs. Our expertise in creating one-page websites, optimizing for SEO, ensuring responsiveness, and incorporating user-friendly design elements sets us apart from the competition.</p>
                            <p>Whether you're a small business owner or a startup entrepreneur looking to make a splash in the digital world, our comprehensive services are designed to elevate your brand with ease. Join us as we embark on a journey to revolutionize the way websites are built and maintained!</p>
                            <p>Our expertise in creating one-page websites, optimizing for SEO, ensuring responsiveness.</p>
                            <div className="d-flex align-items-center gap-5 mt-3">
                                <div className="mr-3 d-flex gap-2 align-items-start contact-today">
                                    <strong>100+</strong>
                                    Project Completed
                                </div>

                                <Link href="/contact" className="btn contact-today">Contact Us Today! <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-6 image-box">
                            <img src={img} alt="Web Development" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="webdevelopment-section2 bg-light section-padding">
                <div className="container">
                    <h2 className="text-center sr-subheading-font-size">Our Exclusive Website Development Service</h2>
                    <p className="text-center">At Ideamagix, we believe in identifying problems before offering web development solutions. This approach sets us apart. We delve into the unique challenges of your business, understanding that each business has specific needs. Our tailored web development services provide effective solutions to meet your requirements.</p>
                    <div className="row">
                        <div className="col-md-4 mt-4">
                            <div className="card service-box">
                                <i className="fab fa-wordpress"></i>
                                <div>
                                    <h4>WordPress Development</h4>
                                    <p>Our WordPress company in India offers the ultimate and comprehensive WordPress Solutions.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card service-box">
                                <i className="fas fa-cube"></i>
                                <div><h4>CakePHP Development</h4>
                                    <p>Our certified CakePHP web developers have the expertise and experience in providing bespoke CakePHP Web Development solutions.</p></div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card service-box">
                                <i className="fab fa-drupal"></i>
                                <div>
                                    <h4>Drupal Development</h4>
                                    <p>Drupal is a complicated nevertheless powerful CMS that matches all types of interweb sites. It takes no time to create addition or modification.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card service-box">
                                <i className="fab fa-joomla"></i>
                                <div>
                                    <h4>Joomla Development</h4>
                                    <p>Joomla web site is in style among programmers making extremely advanced websites. The website comes with many thousands of free plugins.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card service-box">
                                <i className="fas fa-code"></i>
                                <div>
                                    <h4>Codeigniter Development</h4>
                                    <p>Codeigniter is an open-source framework used for designing and developing dynamic websites with PHP.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card service-box">
                                <i className="fas fa-project-diagram"></i>
                                <div>
                                    <h4>Zend Development</h4>
                                    <p>Zend is an open-source Web Application framework that is used to create websites with PHP5.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Hiw />

            <section className="webdevelopment-section3 section-padding">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h2 className="mb-4 sr-subheading-font-size">Industries We Famous for Website Development</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-shopping-cart"></i>
                                <p>E-commerce websites</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-spa"></i>
                                <p>Beauty and Wellness Services</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-graduation-cap"></i>
                                <p>Education and Learning</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-film"></i>
                                <p>Entertainment and Live Streaming</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-university"></i>
                                <p>Finance and Banking</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-dumbbell"></i>
                                <p>Fitness and Workout</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-shopping-basket"></i>
                                <p>Food and Grocery Delivery</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-heartbeat"></i>
                                <p>Healthcare and Wellness</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-tools"></i>
                                <p>Home Services and Repairs</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-book"></i>
                                <p>Library Management System</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-truck"></i>
                                <p>Logistics and Delivery</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="industry-card">
                                <i className="fas fa-paw"></i>
                                <p>Pet Care and Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='webdevelopment-section4 section-padding'>
                <div className="container">
                    <div className="row ">
                        <h2 className='text-center sr-subheading-font-size'>Our Recent Works</h2>
                    </div>

                    <div className="row py-4">
                        <Swiper
                            modules={[Navigation, A11y, Autoplay]}
                            spaceBetween={50}
                            loop={true} // Enable loop
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                waitForTransition: true
                            }}

                            breakpoints={{
                                // when window width is >= 576px
                                576: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                // when window width is >= 992px
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                }
                            }}
                        >

                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="card p-4">
                                        <img src={img2} alt="" className='w-100' />

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="card p-4">
                                        <img src={img1} alt="" className='w-100' />

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="card p-4">
                                        <img src={img3} alt="" className='w-100' />

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="card p-4">
                                        <img src={img4} alt="" className='w-100' />

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="card p-4">
                                        <img src={img5} alt="" className='w-100' />

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="card p-4">
                                        <img src={img6} alt="" className='w-100' />

                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className='section-padding webdevelopment-section5'>
                <div className="container">
                    <div className="row text-center">
                        <h2 className='sr-subheading-font-size'>Start Your Project Today With ClioCode</h2>
                        <p className='py-2'>
                            As a leading WordPress Website Development Company, we at MWD are proud to offer the best and most affordable website design services tailored to meet your specific needs. Our expertise in creating one-page websites, optimizing for SEO, ensuring responsiveness, and incorporating user-friendly design elements sets us apart from the competition.

                            Whether you're a small business owner or a startup entrepreneur looking to make a splash in the digital world, our comprehensive services are designed to elevate your brand with ease.
                        </p>
                        <div className='d-flex justify-content-center gap-5 mt-4'>
                            <div className='contact-now'>
                                <Link to="/contact"><i className="fa-regular fa-address-book me-2"></i>Contact Us</Link>
                            </div>
                            <div className='call-now'>
                                <Link href=""> <i className="fa-solid fa-phone me-2"></i>Call Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default WebDev
