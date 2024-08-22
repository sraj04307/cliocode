import React, { useEffect } from "react";
import Banner2 from "../Component/Banner/Banner2/Banner2";
import About2 from "../Component/About/About2/About2";
import Service2 from "../Component/Service/Service2/Service2";
import Footer from "../Component/Footer/Footer";
import "../../assets/css/About.css";
import img from '../../assets/img/Banner2/Abput Us.jpg'

const About = () => {
  useEffect(() => {
    document.title = "About"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "About");

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner2 message={"About Us"} image={img} />

      <About2 />
      <section className="section-padding about-mission-vision-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="custom-box shadow custom-box1">
                <h2 className="sr-subheading-font-size">Our Approach</h2>
                <p>
                  In the fast-paced world of digital marketing, staying ahead
                  requires a dynamic and adaptive approach. At Infinikey Media
                  Pvt Ltd., we understand that every business is unique, and
                  there is no one-size-fits-all solution. That's why we tailor
                  our strategies to meet the specific needs and goals of each
                  client.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="custom-box  shadow custom-box2">
                <h2 className="sr-subheading-font-size">Our Mission</h2>
                <p>
                  We believe that every business deserves a powerful and
                  effective online presence. Our mission is to empower your
                  brand in the digital space, driving growth, engagement, and
                  success. We don't just aim to meet your expectations; we
                  strive to exceed them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Service2 />
      <section class="why-choose-us2 section-padding">
        <div class="container">
          <div class="section-title pb-4">
            <h2 className="sr-subheading-font-size">Why Choose Us</h2>
            <p>
              Beta Soft Technology is one of the most prominent & professionally
              managed Web development & Web design company in Delhi India.
            </p>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="feature-box d-flex gap-4 ">
                <div class="feature-icon ">
                  <i class="fas fa-dollar-sign"></i>

                </div>

                <div>
                  <h3>Affordable Prices</h3>
                  <p>
                    Economically Develop Responsive Website and APPS by
                    Experienced Web Experts.
                  </p>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box d-flex gap-4">
                <div class="feature-icon">
                  <i class="fas fa-clock"></i>

                </div>

                <div>
                  <h3>Timely and Quality Delivery</h3>
                  <p>
                    Beta Soft Technology delivers timely and qualitative
                    result-driven projects.
                  </p>

                </div>



              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box  d-flex gap-4">
                <div class="feature-icon">
                  <i class="fas fa-users"></i>
                </div>

                <div>
                  <h3>Professionals Team</h3>
                  <p>
                    Beta Soft Technology has a team of experts to cater to your
                    business's needs.
                  </p>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box d-flex gap-4 align-items-center">
                <div class="feature-icon">
                  <i class="fas fa-tasks"></i>

                </div>
                <div>
                  <h3>Result Oriented Approach</h3>
                  <p>
                    Beta Soft Technology stands out with the approach of quality
                    worth.
                  </p>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box d-flex gap-4">
                <div class="feature-icon">
                  <i class="fas fa-cogs"></i>

                </div>

                <div>
                  <h3>Great Working Process</h3>
                  <p>
                    Team of expert Web Professionals at Beta Soft Technology.
                  </p>
                </div>




              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box d-flex gap-4">
                <div class="feature-icon">
                  <i class="fas fa-star"></i>

                </div>

                <div>
                  <h3>Fully Client Satisfaction</h3>
                  <p>
                    Beta Soft Technology has completed more than 2000 projects
                    in a short time.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer scrollpos={1700} />
    </>
  );
};

export default About;
