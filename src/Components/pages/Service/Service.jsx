import React, { useEffect } from 'react'
import Banner2 from '../../Component/Banner/Banner2/Banner2'
import Card2 from '../../Card/Card2/Card2'
import './Service.css'
import Footer from '../../Component/Footer/Footer'
import img from '../../../assets/img/Banner2/OUR SERVICE.jpg'
import img1 from '../../../assets/img/service/06.jpg'
import img2 from '../../../assets/img/service/07.jpg'
import img3 from '../../../assets/img/service/08.jpg'
import img4 from '../../../assets/img/service/09.jpg'
import img5 from '../../../assets/img/service/10.jpg'
import img6 from '../../../assets/img/service/11.jpg'

const Service = () => {


  useEffect(() => {

    document.title = "Service"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Service");

    window.scrollTo(0, 0);


  }, []);

  return (
    <>
      <Banner2 message={"Services"} image={img}/>
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className={"wow  ourservice active"}>OUR SERVICES</span>
            <h2 className={"wow  ourservice2 active sr-subheading-font-size"}>
              We Provide the Best Quality
            </h2>
          </div>
          <div className="service-wrapper mb-0">
            <div className="row mb-5 pb-5">

              <Card2 title={"Graphic Designing"} image={img5} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"Ecommerce Solution"} image={img2} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"App Development"} image={img3} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"Digital Marketing"} image={img4} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"Web Development"} image={img1} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"Web Accesiblity"} image={img6} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              
              
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service
