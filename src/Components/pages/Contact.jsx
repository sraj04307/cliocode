import React,{useEffect} from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Forms from '../Component/Forms/Forms'
import FormMaps from '../Component/Maps/FormMaps.jsx'
import Footer from '../Component/Footer/Footer.jsx'
import img from '../../assets/img/Banner2/Contact Us.jpg'
import '../../assets/css/Contact.css'

const Contact = () => {

  useEffect(() => {
    document.title = "Contact"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Contact");

    window.scrollTo(0,0);
  }, []);


  return (
    <>
        <Banner2 message={"Contact Us"} image={img} />
        <Forms/>
        <FormMaps/>
        <Footer/>
    </>
  )
}

export default Contact
