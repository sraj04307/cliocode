import React from 'react'
import './Testi.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testi = () => {


    return (
        <section className="tesimonial-section-3 section-padding section-bg-2 bg-cover">
            {/* <div className="line-shape">
                <img src="assets/img/team/line-shape.png" alt="shape-img"  />
            </div> */}
            <div className="mask-shape">
                <img src="assets/img/team/mask-shape.png" alt="shape-img" />
            </div>
            {/* <div className="array-button">
                <button className="array-prev"><i className="fal fa-arrow-left"></i></button>
                <button className="array-next"><i className="fal fa-arrow-right"></i></button>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                    <span className={"text-white span-active"}>Testimonials</span>
                    <h2 className={"text-white h2-active sr-subheading-font-size"}>
                                People Who Already Love Us
                            </h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                           
                            <div className={"swiper testimonial-slider-2 left active"}>
                                <div className="swiper-wrapper">

                                    <Swiper
                                       modules={[Navigation, A11y, Autoplay, Pagination]}
                                       spaceBetween={50}
                                       loop={true} // Enable loop
                                       pagination
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
                                                slidesPerView: 1,
                                                spaceBetween: 30
                                            },
                                            // when window width is >= 992px
                                            992: {
                                                slidesPerView: 1,
                                                spaceBetween: 40
                                            }
                                        }}
                                    >
                                    
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="testimonial-box-items">
                                                    <div className="icon">
                                                        <img src="assets/img/testimonial/icon.png" alt="icon-img" />
                                                    </div>
                                                    <div className="client-items">
                                                        <div className="client-image style-2 bg-cover"
                                                        ></div>
                                                        <div className="client-content">
                                                            <h4>Albert Flores</h4>
                                                            <p>Medical Assistant</p>
                                                            <div className="star">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star color-text"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="testimonial-box-items">
                                                    <div className="icon">
                                                        <img src="assets/img/testimonial/icon.png" alt="icon-img" />
                                                    </div>
                                                    <div className="client-items">
                                                        <div className="client-image style-2 bg-cover"
                                                        ></div>
                                                        <div className="client-content">
                                                            <h4>Albert Flores</h4>
                                                            <p>Medical Assistant</p>
                                                            <div className="star">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star color-text"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="testimonial-box-items">
                                                    <div className="icon">
                                                        <img src="assets/img/testimonial/icon.png" alt="icon-img" />
                                                    </div>
                                                    <div className="client-items">
                                                        <div className="client-image style-2 bg-cover"
                                                        ></div>
                                                        <div className="client-content">
                                                            <h4>Albert Flores</h4>
                                                            <p>Medical Assistant</p>
                                                            <div className="star">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star color-text"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                    <div className="section-title text-center">
                           
                           <div className={"swiper testimonial-slider-2 right active"}>
                               <div className="swiper-wrapper">

                                   <Swiper
                                      modules={[Navigation, A11y, Pagination]}
                                      spaceBetween={50}
                                      loop={true} 
                                      pagination
                                      autoplay={{
                                          delay: 4000,
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
                                               slidesPerView: 1,
                                               spaceBetween: 30
                                           },
                                           // when window width is >= 992px
                                           992: {
                                               slidesPerView: 1,
                                               spaceBetween: 40
                                           }
                                       }}
                                   >
                                           <SwiperSlide>
                                           <div className="swiper-slide">
                                               <div className="testimonial-box-video">
                                               <video width="100%" height="100%" controls>
                            <source src="https://videos.pexels.com/video-files/5342194/5342194-hd_1920_1080_30fps.mp4" />
                            Your browser does not support the video tag.
                        </video>
                                               </div>
                                           </div>
                                       </SwiperSlide>

                                       <SwiperSlide>
                                           <div className="swiper-slide">
                                               <div className="testimonial-box-video">
                                               <video width="100%" height="100%" controls>
                            <source src="https://videos.pexels.com/video-files/5342194/5342194-hd_1920_1080_30fps.mp4" />
                            Your browser does not support the video tag.
                        </video>
                                               </div>
                                           </div>
                                       </SwiperSlide>

                                       <SwiperSlide>
                                           <div className="swiper-slide">
                                               <div className="testimonial-box-video">
                                               <video width="100%" height="100%" controls>
                            <source src="https://videos.pexels.com/video-files/5342194/5342194-hd_1920_1080_30fps.mp4" />
                            Your browser does not support the video tag.
                        </video>
                                               </div>
                                           </div>
                                       </SwiperSlide>

                                       <SwiperSlide>
                                           <div className="swiper-slide">
                                               <div className="testimonial-box-video">
                                               <video width="100%" height="100%" controls>
                            <source src="https://videos.pexels.com/video-files/5342194/5342194-hd_1920_1080_30fps.mp4" />
                            Your browser does not support the video tag.
                        </video>
                                               </div>
                                           </div>
                                       </SwiperSlide>
                                   </Swiper>


                               </div>
                           </div>
                       </div>

                        

                    </div>
                </div>



            </div>
        </section>
    )
}

export default Testi
