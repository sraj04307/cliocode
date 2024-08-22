import React from 'react'
import './About1.css'
import { Link } from 'react-router-dom'
// import CountUp from 'react-countup'
// import ScrollTrigger from 'react-scroll-trigger'
import img1 from '../../../../assets/img/cliocode-home-about-us.jpg'

const About = () => {

    // const [counterOn, setCounterOn] = useState(true);

    return (
        <section className={"about-section section-padding fix bg-cover active"}>
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row">

                        <div className={'myfadein-left active col-lg-6 wow fadeInUp'} data-wow-delay=".4s">
                            <div className="about-image">
                                <img src={img1} alt="about-img" />
                                {/* <div className={"content active"}>
                                    <h2>
                                        <span className="count">
                                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                            </ScrollTrigger>
                                            {counterOn && <CountUp
                                                start={0}
                                                end={5}
                                                duration={2}
                                            />
                                            }</span>+
                                    </h2>
                                    <span>Years Experience</span>
                                </div> */}

                            </div>
                        </div>

                        <div className={'myfadein-right active col-lg-6 wow fadeInUp'}>
                            <div className="about-content mt-4 mt-lg-0">
                                <div className="section-title">
                                    <span className="sr-about1-top">About <p>Clio</p><span>Code</span> </span>
                                    <h2 className="sr-about1-heading sr-subheading-font-size" data-wow-delay=".3s">
                                    Professional Web Development company in india


                                    </h2>
                                </div>
                                <p className="" data-wow-delay=".5s">
                                    ClioCode Technologies Pvt. Ltd. is an exciting and rapidly growing Software Development and Digital Marketing company based in India. We offer a wide range of services, including Web Design, Web Development, E-commerce Solutions, Mobile App Development, and Digital Marketing, to clients around the world.
                                            <br/>
                                    At ClioCode, we understand that every client is unique, and we’re dedicated to tailoring our solutions to meet your specific needs. Our approach is to provide high-quality, affordable proposals and deliver exceptional results on time and within budget. We’re passionate about helping our clients succeed, and we use our creativity and expertise to craft strategies that make a real difference for your business.
                                </p>

                                <div className="about-author">
                                    <div className="about-button wow fadeInUp" data-wow-delay=".8s">
                                        <Link to="/about" className="theme-btn">
                                            Explore More
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </Link>
                                    </div>
                                    <div className="author-icon wow fadeInUp" data-wow-delay=".9s">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <span>Call Us Now</span>
                                            <h5>
                                                <Link to="tel:+918368629185">+918368629185</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
