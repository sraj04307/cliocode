import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/cta.css'
import img1 from '../../../assets/img/cta/c1.png'
import img2 from '../../../assets/img/cta/c2.png'
import img3 from '../../../assets/img/cta/c3.png'

const Cta_banner = () => {
    return (
        <section className="business-growth section-padding">
            <div className="container">
                <h2 className='sr-subheading-font-size'>Grow Your Business Online With Us</h2>
                <p className='pt-2'>A Digital Marketing & Web Designing Company with All Services in Delhi, India</p>
                <div className="row justify-content-center align-items-center">

                    <div className="col-md-3 ">
                        <div className="badge badge-light">

                            <img src={img1} alt="Best Web Development Company 2019" className='w-100' />
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="badge badge-light">
                            <img src={img2} alt="Best SEO Company 2020" className='w-100' />
                            
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="badge badge-light">
                            <img src={img3} alt="Best PCC Company 2021" className='w-100' />
                            
                        </div>
                    </div>
                </div>
                <Link to='/contact' className='contact-button'>Contact Us Today!</Link>
            </div>
        </section>

    )
}

export default Cta_banner
