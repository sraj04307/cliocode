import React, { useState } from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Footer from '../Component/Footer/Footer'
// import Card5 from '../Card/Card5/Card5'
import { useEffect } from 'react'
import img1 from './../../assets/img/portfolio/1.jpg'
import img2 from './../../assets/img/portfolio/2.jpg'
import img3 from './../../assets/img/portfolio/3.jpg'
import img4 from './../../assets/img/portfolio/4.jpg'
import img5 from './../../assets/img/portfolio/5.jpg'
import img6 from './../../assets/img/portfolio/6.jpg'
// import img7 from './../../assets/img/portfolio/7.jpg'
import img8 from './../../assets/img/portfolio/8.jpg'
import img9 from './../../assets/img/portfolio/9.jpg'
import img10 from './../../assets/img/portfolio/10.jpg'
import img11 from './../../assets/img/portfolio/11.jpg'
import img12 from './../../assets/img/portfolio/12.jpg'
import img13 from './../../assets/img/portfolio/13.jpg'
import img14 from './../../assets/img/portfolio/14.jpg'
import img15 from './../../assets/img/portfolio/15.jpg'
import img16 from './../../assets/img/portfolio/16.jpg'
import img17 from './../../assets/img/portfolio/17.jpg'
// import img18 from './../../assets/img/portfolio/18.jpg'
import img19 from './../../assets/img/portfolio/19.jpg'
import img20 from './../../assets/img/portfolio/20.jpg'
import img21 from './../../assets/img/portfolio/21.jpg'
import img22 from './../../assets/img/portfolio/22.jpg'
import img23 from './../../assets/img/portfolio/23.jpg'
import img24 from './../../assets/img/portfolio/24.jpg'
import img25 from './../../assets/img/portfolio/25.jpg'
// import img26 from './../../assets/img/portfolio/26.jpg'
import img27 from './../../assets/img/portfolio/27.jpg'
import img28 from './../../assets/img/portfolio/28.jpg'
import img29 from './../../assets/img/portfolio/29.jpg'
import img30 from './../../assets/img/portfolio/30.jpg'



import './../Card/Card5/Card5.css'
import '../../assets/css/portfolio.css'
import img7 from '../../assets/img/Banner2/PORTFOLIO.jpg'

const Portfolio = () => {

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(true);
  const [active5, setActive5] = useState(false);

  function activate1() {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  }
  function activate2() {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  }
  function activate3() {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setActive5(false);
  }
  function activate4() {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setActive5(false);
  }
  function activate5() {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(true);
  }


  useEffect(() => {
    document.title = "Portfolio"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "portfolio");

    window.scrollTo(0, 0);

  }, []);


  return (
    <>
      <Banner2 message={"Portfolio"} image={img7} />

      <section className='py-5 portflio-nav'>
        <div className="container">
          <nav>
            <ul className='d-flex justify-content-between text-center overflow-hidden rounded-pill shadow'>
              <li className={active4 ? 'active' : ''} onClick={activate4}>Ecommerce Website</li>
              <li className={active2 ? 'active' : ''} onClick={activate2}>Web Application</li>
              <li className={active3 ? 'active' : ''} onClick={activate3}>Mobile Application</li>
              <li className={active5 ? 'active' : ''} onClick={activate5}>Digital Marketing</li>
              <li className={active1 ? 'active' : ''} onClick={activate1}>Logo Design</li>
            </ul>
          </nav>
        </div>
      </section>

      <section className='portfolio-content pb-5' >
        <div className="container ">
          <div className={active1 ? "row active d-flex flex-wrap" : "row "}>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: WORDPRESS | MYSQL | ECOMMERCE | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img8} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: WORDPRESS | MYSQL | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img2} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img3} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img4} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img5} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

          </div>

          <div className={active2 ? "row active d-flex flex-wrap" : "row "}>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img6} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img21} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img9} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | CODEIGNITER | RESPONSIVE</h3>
                </div>

              </div>

            </div>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img10} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE | WOCOMMERCE</h3>
                </div>

              </div>

            </div>

          </div>

          <div className={active3 ? "row active d-flex flex-wrap" : "row "}>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img11} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE | WOCOMMERCE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img12} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img13} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img14} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | CODEIGNITER | ECOMMERCE | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img15} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS| RESPONSIVE</h3>
                </div>

              </div>

            </div>

          </div>

          <div className={active4 ? "row active d-flex flex-wrap" : "row "}>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img16} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE | WOCOMMERCE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img17} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE | WOCOMMERCE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img19} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img20} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | .NET| RESPONSIVE</h3>
                </div>

              </div>

            </div>


          </div>

          <div className={active5 ? "row active d-flex flex-wrap" : "row "}>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img22} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | CODEIGNITER | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img23} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE | WOOCOMMERCE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img24} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE | WOCOMMERCE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img25} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img27} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img28} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img29} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE</h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img30} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">TECHNOLOGY: PHP | WORDPRESS | RESPONSIVE | WOCOMMERCE</h3>
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

export default Portfolio
