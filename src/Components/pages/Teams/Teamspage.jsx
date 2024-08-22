import React, { useEffect } from "react";
import Banner2 from "../../Component/Banner/Banner2/Banner2";
import Footer from '../../Component/Footer/Footer.jsx'
import img from '../../../assets/img/Banner2/our experts.jpg'
import img1 from '../../../assets/img/teams/Rajesh Sharma.jpg'
import img2 from '../../../assets/img/teams/Amit Kumar.jpg'
import img3 from '../../../assets/img/teams/Krish Yadav.jpg'
import img4 from '../../../assets/img/teams/Shubham Raj.jpg'
import img5 from '../../../assets/img/teams/neha joshi.jpg'
import { Link } from "react-router-dom";


const Teamspage = () => {

  useEffect(() => {
    document.title = "Our Experts"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Our Experts");

    window.scrollTo(0, 0);

  }, []);


  return (
    <>
      <Banner2 message={"Our Experts"} image={img}/>
      <section>
        <div className="container">
          <div className="row py-5">

         

            
            <div className={'col-xl-3 col-lg-4 col-md-6 card3 p-2'} data-wow-delay=".3s">
              <div className={`single-team-items active `}>
                <div className="team-image">
                  <img src={img2} alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn"><i class="fa-solid fa-info"></i></span>
                  </div>

                </div>
                <div className="team-content text-center">
                  <h3>
                    <Link to="team-details.html">Amit Kumar</Link>
                  </h3>
                  <p>PHP Developer</p>
                </div>
              </div>
            </div>

            <div className={'col-xl-3 col-lg-4 col-md-6 card3 p-2'} data-wow-delay=".3s">
              <div className={`single-team-items active `}>
                <div className="team-image">
                  <img src={img5} alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn"><i class="fa-solid fa-info"></i></span>
                  </div>

                </div>
                <div className="team-content text-center">
                  <h3>
                    <Link to="team-details.html">Neha Joshi</Link>
                  </h3>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>

            <div className={'col-xl-3 col-lg-4 col-md-6 card3 p-2'} data-wow-delay=".3s">
              <div className={`single-team-items active `}>
                <div className="team-image">
                  <img src={img3} alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn"><i class="fa-solid fa-info"></i></span>
                  </div>

                </div>
                <div className="team-content text-center">
                  <h3>
                    <Link to="team-details.html">Krish Yadav</Link>
                  </h3>
                  <p>Graphic Designer</p>
                </div>
              </div>
            </div>

            <div className={'col-xl-3 col-lg-4 col-md-6 card3 p-2'} data-wow-delay=".3s">
              <div className={`single-team-items active `}>
                <div className="team-image">
                  <img src={img4} alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn"><i class="fa-solid fa-info"></i></span>
                  </div>

                </div>
                <div className="team-content text-center">
                  <h3>
                    <Link to="team-details.html">Shubham Raj</Link>
                  </h3>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>

           
            <div className={'col-xl-3 col-lg-4 col-md-6 card3 p-2'} data-wow-delay=".3s">
              <div className={`single-team-items active `}>
                <div className="team-image">
                  <img src={img1} alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn"><i class="fa-solid fa-info"></i></span>
                  </div>

                </div>
                <div className="team-content text-center">
                  <h3>
                    <Link to="team-details.html">Rajesh Sharma</Link>
                  </h3>
                  <p>Frontend Developer</p>
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

export default Teamspage;
