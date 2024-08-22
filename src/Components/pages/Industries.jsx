import React, { useEffect } from 'react'
import Banner from '../../Components/Component/Banner/Banner2/Banner2'
import Footer from '../../Components/Component/Footer/Footer'
// import Card4 from '../Card/Card4/Card4'
// import img1 from '../../assets/img/Industries/ind1.png'
// import img2 from '../../assets/img/Industries/indi2.png'
// import img3 from '../../assets/img/Industries/indi3.png'
// import img4 from '../../assets/img/Industries/indi4.png'
// import img5 from '../../assets/img/Industries/indi5.png'
// import img6 from '../../assets/img/Industries/indi6.png'
// import img7 from '../../assets/img/Industries/indi7.png'
// import img8 from '../../assets/img/Industries/indi8.png'
// import img9 from '../../assets/img/Industries/indi9.png'
import './../Card/Card4/Card4.css'
import '../../assets/css/industries.css'

import img from '../../assets/img/Banner2/Industries.jpg'

const Industries = () => {

  useEffect(() => {
    document.title = "Industries"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Industries");

    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <Banner message={"Industries"} image={img}/>
      <section class="industries-section">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mt-4 mt-4">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-briefcase-medical"></i>
                    </div>
                    <div class="service-title">Health Care</div>
                    <div class="service-divider"></div>
                    <div class="service-description">
                        Health Care is one leading brand in today's market and our organization provides the best web design services in the field of health care.
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-4 mt-4">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-university"></i>
                    </div>
                    <div class="service-title">Banking and Finance</div>
                    <div class="service-divider"></div>
                    <div class="service-description">
                        Online Banking is a new trend in today's market. Thus, a need for web designers to occur. Therefore, we are here to get you the amazing web designing service in the field of banking and finance.
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-4 mt-4">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-book-reader"></i>
                    </div>
                    <div class="service-title">E-learning and Education</div>
                    <div class="service-divider"></div>
                    <div class="service-description">
                        Students love to learn online and we love to deliver the best promising services that will help you in your business growth.
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-4 mt-4">
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fa-solid fa-house-chimney"></i>
                    </div>
                    <div class="service-title">Real Estate</div>
                    <div class="service-divider"></div>
                    <div class="service-description">
                    Real estate is another field within which our organization deal with. We promise the best web designing service in the area of real estate.
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-4 mt-4">
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fa-solid fa-suitcase-rolling"></i>
                    </div>
                    <div class="service-title">E-learning and Education</div>
                    <div class="service-divider"></div>
                    <div class="service-description">
                    Students love to learn online and we love to deliver the best promising services that will help you in your business growth.
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-4 mt-4">
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div class="service-title">E-commerce</div>
                    <div class="service-divider"></div>
                    <div class="service-description">
                    Uur team provides the best e-commerce web design services. Get in touch with our organization now to get the best promising service.
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-4 mt-4">
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fa-solid fa-utensils"></i>
                    </div>
                    <div class="service-title">Food</div>
                    <div class="service-divider"></div>
                    <div class="service-description">
                    The food website is getting into a high demand nowadays. Give your website a new look with Pay2Web.
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-4 mt-4">
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fa-solid fa-truck"></i>
                    </div>
                    <div class="service-title">Packers and Movers</div>
                    <div class="service-divider"></div>
                    <div class="service-description">
                    Give our services a chance to help you gain the best audience within your website.
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-4 mt-4">
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fa-solid fa-video"></i>
                    </div>
                    <div class="service-title">Media and Entertainment</div>
                    <div class="service-divider"></div>
                    <div class="service-description">
                    Media and Entertainment is the most search content and thus we offer the best web design services for the promising
                    desired outcomes.
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

export default Industries
