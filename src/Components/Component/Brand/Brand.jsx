import React from "react";
import img1 from "../../../assets/img/All Logo/1.png";
import img2 from "../../../assets/img/All Logo/2.png";
import img3 from "../../../assets/img/All Logo/3.png";
import img4 from "../../../assets/img/All Logo/4.jpg";
import img5 from "../../../assets/img/All Logo/5.jpg";
import img6 from "../../../assets/img/All Logo/6.jpg";
import img7 from "../../../assets/img/All Logo/7.jpg";
import img8 from "../../../assets/img/All Logo/8.jpg";
import img9 from "../../../assets/img/All Logo/9.jpg";
import img10 from "../../../assets/img/All Logo/10.jpg";
import img11 from "../../../assets/img/All Logo/11.jpg";
import img12 from "../../../assets/img/All Logo/12.jpg";
import img13 from "../../../assets/img/All Logo/13.jpg";
import img14 from "../../../assets/img/All Logo/14.jpg";
import img15 from "../../../assets/img/All Logo/15.jpg";
import img16 from "../../../assets/img/All Logo/16.jpg";
import img17 from "../../../assets/img/All Logo/17.jpg";
import img18 from "../../../assets/img/All Logo/18.jpg";
import img19 from "../../../assets/img/All Logo/19.jpg";
import img20 from "../../../assets/img/All Logo/20.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="brand-section fix section-padding">
      <div className="container">
        <div className="brand-wrapper">
          <h6 className="text-center sr-subheading-font-size">
            Trusted by global brands.
          </h6>
          <p className="text-center sr-subheading-font-size">
            Delivering top-notch service to customers globally, ensuring
            excellence and satisfaction in eVery interaction.
          </p>
          <div className="swiper brand-slider">
            <div className="swiper-wrapper ">
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  waitForTransition: true,
                }}
                breakpoints={{
                  // when window width is >= 576px
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  // when window width is >= 992px
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img1} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img2} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img3} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img4} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img5} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img6} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img7} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img8} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img9} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img10} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img11} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img12} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img13} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img14} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img15} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img16} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img17} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img18} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img19} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="brand-image">
                      <img src={img20} alt="brand-img" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
