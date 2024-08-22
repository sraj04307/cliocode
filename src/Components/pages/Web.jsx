import React,{useEffect} from 'react'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2/Banner2'

const Web = () => {

  useEffect(() => {
    document.title = "Web Development"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Web Development");

  }, []);

  return (
    <>
      <Banner2 message={"Web Development"} />
        Web
      <Footer />
    </>
  )
}

export default Web
