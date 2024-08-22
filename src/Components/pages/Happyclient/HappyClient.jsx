import React, {useEffect} from 'react'
import Banner2 from '../../Component/Banner/Banner2/Banner2'
import Footer from '../../Component/Footer/Footer'
import Brand2 from '../../Component/Brand/Brand2/Brand2'

import img from '../../../assets/img/Banner2/client 1.jpg'

import img1 from '../../../assets/img/All Logo/1.png'
import img2 from '../../../assets/img/All Logo/2.png'
import img3 from '../../../assets/img/All Logo/3.png'
import img4 from '../../../assets/img/All Logo/4.jpg'
import img5 from '../../../assets/img/All Logo/5.jpg'
import img6 from '../../../assets/img/All Logo/6.jpg'
import img7 from '../../../assets/img/All Logo/7.jpg'
import img8 from '../../../assets/img/All Logo/8.jpg'
import img9 from '../../../assets/img/All Logo/9.jpg'
import img10 from '../../../assets/img/All Logo/10.jpg'
import img11 from '../../../assets/img/All Logo/11.jpg'
import img12 from '../../../assets/img/All Logo/12.jpg'
import img13 from '../../../assets/img/All Logo/13.jpg'
import img14 from '../../../assets/img/All Logo/14.jpg'
import img15 from '../../../assets/img/All Logo/15.jpg'
import img16 from '../../../assets/img/All Logo/16.jpg'
import img17 from '../../../assets/img/All Logo/17.jpg'
import img18 from '../../../assets/img/All Logo/18.jpg'
import img19 from '../../../assets/img/All Logo/19.jpg'
import img20 from '../../../assets/img/All Logo/20.jpg'


const HappyClient = () => {

  useEffect(() => {
    document.title = "Happy Client"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Happy Client");

    window.scrollTo(0, 0);

  }, []);


  return (
    <>
        <Banner2 message={"Our Happy Client"} image={img}/>
        <section className='testimonial-detail-section'>
          <div className="container">
            <div className="row py-5">
                
                <Brand2 ib={img1} id={"id1"}/>
                <Brand2 ib={img2} id={"id2"}/>
                <Brand2 ib={img3} id={"id3"}/>
                <Brand2 ib={img4} id={"id4"}/>
                <Brand2 ib={img5} id={"id5"}/>
                <Brand2 ib={img6} id={"id6"}/>
                <Brand2 ib={img7} id={"id7"}/>
                <Brand2 ib={img8} id={"id8"}/>
                <Brand2 ib={img9} id={"id9"}/>
                <Brand2 ib={img10} id={"id10"}/>
                <Brand2 ib={img11} id={"id11"}/>
                <Brand2 ib={img12} id={"id12"}/>
                <Brand2 ib={img13} id={"id13"}/>
                <Brand2 ib={img14} id={"id14"}/>
                <Brand2 ib={img15} id={"id15"}/>
                <Brand2 ib={img16} id={"id16"}/>
                <Brand2 ib={img17} id={"id17"}/>
                <Brand2 ib={img18} id={"id18"}/>
                <Brand2 ib={img19} id={"id19"}/>
                <Brand2 ib={img20} id={"id20"}/>
                
            </div>
          </div>
        </section>
        <Footer/>
      
    </>
  )
}

export default HappyClient
