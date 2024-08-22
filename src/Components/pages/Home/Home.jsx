import React, { useEffect } from "react";
import Banner from "../../Component/Banner/Banner1/Banner1";
import About from "../../Component/About/About1/About1";
import Service from "../../Component/Service/Service1/Service1";
import Testi from "../../Component/Testimonial/Testi.jsx";
import Hiw from "../../Component/Others/Hiw/Hiw.jsx";
import Contact from "../../Component/Brand/Brand";
import World from "../../Component/Maps/worldmap/World";
import Achivement from "../../Component/Achivement/Achivement";
import Footer from "../../Component/Footer/Footer.jsx";
import "./Home.css";
import Ctabanner from "../../Component/Others/Cta_banner.jsx";
import Technologies from "../../Component/Technologies/Technologies.jsx";
import img from '../../../assets/img/news/blog.jpg'
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Home");

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <About />
      <Service />
      <Achivement />
      <Hiw />
      <Technologies />
      <Testi />
      <Ctabanner />
      <World />
      <Contact />
      <section className="section-padding">
        <div className="container">
        <div className="row g-4">
        <h6 className="text-center sr-subheading-font-size pb-4 ">
            Blog
          </h6>
        </div>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6" data-wow-delay=".3s">
              <div className={`news-card-items style-2 mt-0 pb-0 active`}>
                <div className="news-image">
                  <img
                    src={img}
                    alt="news-img"
                  />
                  <div className="post-date">
                    <h3 className="text-center">
                      04
                      <br />
                      May
                    </h3>
                  </div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                    <li>
                      <i className="fa-solid fa-tag"></i>
                      IT Services
                    </li>
                  </ul>
                  <h3>
                    <Link to="">Lorem, ipsum dolor.</Link>
                  </h3>
                  <Link to="/blog-details" className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6" data-wow-delay=".3s">
              <div className={`news-card-items style-2 mt-0 pb-0 active`}>
                <div className="news-image">
                  <img
                    src={img}
                    alt="news-img"
                  />
                  <div className="post-date">
                    <h3 className="text-center">
                      04
                      <br />
                      May
                    </h3>
                  </div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                    <li>
                      <i className="fa-solid fa-tag"></i>
                      IT Services
                    </li>
                  </ul>
                  <h3>
                    <Link to="">Lorem, ipsum dolor.</Link>
                  </h3>
                  <Link to="/blog-details" className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6" data-wow-delay=".3s">
              <div className={`news-card-items style-2 mt-0 pb-0 active`}>
                <div className="news-image">
                  <img
                    src={img}
                    alt="news-img"
                  />
                  <div className="post-date">
                    <h3 className="text-center">
                      04
                      <br />
                      May
                    </h3>
                  </div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                    <li>
                      <i className="fa-solid fa-tag"></i>
                      IT Services
                    </li>
                  </ul>
                  <h3>
                    <Link to="">Lorem, ipsum dolor.</Link>
                  </h3>
                  <Link to="/blog-details" className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
