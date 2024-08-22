import React, { useState } from "react";
import "./About2.css";
import img1 from "../../../../assets/img/About Us/about page.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const About2 = () => {
  const [counterOn, setCounterOn] = useState(true);

  return (
    <section className="about-section2 section-padding fix bg-cover">
      <div className="container">
        <div className="about-wrapper style-2">
          <div className="row">
            <div className={"col-lg-6 left active"}>
              <img src={img1} alt="" className="about-section2-img" />
              <div className="about-image-items">
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src="assets/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>
                      <span className="count">
                        <ScrollTrigger
                          onEnter={() => setCounterOn(true)}
                          onExit={() => setCounterOn(false)}
                        ></ScrollTrigger>
                        {counterOn && (
                          <CountUp start={0} end={5} duration={2} />
                        )}
                      </span>
                      Years
                    </h3>
                    <p>Of Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-6 mt-4 mt-lg-0 right active"}>
              <div className="about-content mt-4 mt-lg-0">
                <div className="section-title ">
                  <span className="sr-about1-top d-flex gap-1">
                    About <p>Clio</p>
                    <span>Code</span>{" "}
                  </span>
                  <h2 className="sr-about1-heading sr-subheading-font-size" data-wow-delay=".3s">
                    Professional Web Development company in india
                  </h2>
                </div>
                <p className="" data-wow-delay=".5s">
                  ClioCode Technologies Pvt. Ltd. is an exciting and rapidly
                  growing Software Development and Digital Marketing company
                  based in India. We offer a wide range of services, including
                  Web Design, Web Development, E-commerce Solutions, Mobile App
                  Development, and Digital Marketing, to clients around the
                  world.
                  <br />
                  At ClioCode, we understand that every client is unique, and
                  we’re dedicated to tailoring our solutions to meet your
                  specific needs. Our approach is to provide high-quality,
                  affordable proposals and deliver exceptional results on time
                  and within budget. We’re passionate about helping our clients
                  succeed, and we use our creativity and expertise to craft
                  strategies that make a real difference for your business.
                </p>

                <div className="about-author">
                  <div className="about-button">
                    <a href="about.html" className="theme-btn">
                      Explore More
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                  <div className="author-icon d-flex align-items-center gap-3">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="content">
                      <span>Call Us Now</span>
                      <h5>
                        <a href="tel:+918368629185">+918368629185</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
