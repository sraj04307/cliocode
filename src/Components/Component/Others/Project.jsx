import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Project = () => {
    return (
        <section className="project-section-2 section-padding fix">
            <div className="left-shape">
                <img src="assets/img/project/left-shape.png" alt="shape-img" />
            </div>
            <div className="right-shape">
                <img src="assets/img/project/right-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="wow fadeInUp">PROJECTS</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Our Latest Incredible <br /> Client's Projects
                        </h2>
                    </div>
                    <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                        <button className="array-prev"><i className="fal fa-arrow-right"></i></button>
                        <button className="array-next"><i className="fal fa-arrow-left"></i></button>
                    </div>
                </div>
                <div className="project-wrapper">
                    <div className="swiper project-slider-2">
                        <div className="swiper-wrapper">


                            <Swiper
                                modules={[Navigation, A11y, Autoplay]}
                                spaceBetween={50}
                                loop={true} // Enable loop
                                autoplay={{
                                    delay: 3000, // Delay between transitions (in ms)
                                    disableOnInteraction: false, // Continue autoplay even when user interacts with swiper
                                    waitForTransition: true // Ensure no delays between slides
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
                                        <div className="project-items style-2">
                                            <div className="project-image">
                                                <img src="assets/img/project/05.jpg" alt="project-img" />
                                                <div className="project-content">
                                                    <p>Technology</p>
                                                    <h4>
                                                        <Link to="project-details.html">Software Development</Link>
                                                    </h4>
                                                    <Link to="project-details.html" className="arrow-icon">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-items style-2">
                                            <div className="project-image">
                                                <img src="assets/img/project/06.jpg" alt="project-img" />
                                                <div className="project-content">
                                                    <p>Technology</p>
                                                    <h4>
                                                        <Link to="project-details.html">Analytic Solutions</Link>
                                                    </h4>
                                                    <Link to="project-details.html" className="arrow-icon">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-items style-2">
                                            <div className="project-image">
                                                <img src="assets/img/project/07.jpg" alt="project-img" />
                                                <div className="project-content">
                                                    <p>Solutions</p>
                                                    <h4>
                                                        <Link to="project-details.html">Design Solutions</Link>
                                                    </h4>
                                                    <Link to="project-details.html" className="arrow-icon">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-items style-2">
                                            <div className="project-image">
                                                <img src="assets/img/project/05.jpg" alt="project-img" />
                                                <div className="project-content">
                                                    <p>Technology</p>
                                                    <h4>
                                                        <Link to="project-details.html">Software Development</Link>
                                                    </h4>
                                                    <Link to="project-details.html" className="arrow-icon">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-items style-2">
                                            <div className="project-image">
                                                <img src="assets/img/project/06.jpg" alt="project-img" />
                                                <div className="project-content">
                                                    <p>Technology</p>
                                                    <h4>
                                                        <Link to="project-details.html">Analytic Solutions</Link>
                                                    </h4>
                                                    <Link to="project-details.html" className="arrow-icon">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-items style-2">
                                            <div className="project-image">
                                                <img src="assets/img/project/07.jpg" alt="project-img" />
                                                <div className="project-content">
                                                    <p>Solutions</p>
                                                    <h4>
                                                        <Link to="project-details.html">Design Solutions</Link>
                                                    </h4>
                                                    <Link to="project-details.html" className="arrow-icon">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>





                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
