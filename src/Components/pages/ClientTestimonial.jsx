import React, { useEffect } from 'react';
import Banner2 from '../Component/Banner/Banner2/Banner2';
import Footer from '../Component/Footer/Footer';
import Testi2 from '../Component/Testimonial/Test2/Testi2';
import img from '../../assets/img/Banner2/client testimonial.jpg';
import { Pagination, A11y, Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../assets/css/client-testimonial.css';

const ClientTestimonial = () => {

  useEffect(() => {
    document.title = "Client Testimonial"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Client Testimonial");

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner2 message={"Client Testimonial"} image={img} />

      <section className='section-padding testimonial-video-section'>
        <div className="container">
          <h3 className="text-center mt-5">Video Testimonials</h3>
          <p className="text-center my-3 sr-subheading-font-size">Word of Mouth is the Best Advertising</p>

          <div className="row mt-5">
            <Swiper
              // install Swiper modules
              modules={[Navigation, A11y, Autoplay, Pagination]}
              spaceBetween={50}
              loop={true} // Enable loop
              pagination
              navigation
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
                <div className="card">
                  <iframe title='testimonial3' src="https://www.youtube.com/embed/xikQlJIRkrw" allowFullScreen></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <iframe title='testimonial3' src="https://www.youtube.com/embed/xikQlJIRkrw" allowFullScreen></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <iframe title='testimonial3' src="https://www.youtube.com/embed/xikQlJIRkrw" allowFullScreen></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <iframe title='testimonial3' src="https://www.youtube.com/embed/xikQlJIRkrw" allowFullScreen></iframe>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row py-5">
            <Testi2 id={"id1"} />
            <Testi2 id={"id2"} />
           
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ClientTestimonial;
