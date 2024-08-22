import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './Achivement.css'

const Achivement = () => {

    const [counterOn, setCounterOn] = useState(true);
    return (
        <section className="achievement-section-3 fix section-bg-2 section-padding">
            <div className="container">
                <div className="row">
                    <span className="text-white text-center">achievement</span>
                    <h2 className="text-white text-center sr-subheading-font-size">
                        Why Choose Us
                    </h2>
                </div>
                <div className="row counter-container ">
                    <div className="counter-items  col-6 col-lg-3 text-center py-5 d-flex flex-column justify-content-center " data-wow-delay=".3s">
                        <div className='achivement-bg p-2 py-4'>
                            <div className="icon">
                                <i className="fa-solid fa-file-pen"></i>
                            </div>
                            <div className="content">
                                <h2><span className="count">
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                    </ScrollTrigger>
                                    {counterOn && <CountUp
                                        start={0}
                                        end={500}
                                        duration={8}
                                    />
                                    }</span>+</h2>
                                <p>Projects Complete</p>
                            </div>
                        </div>

                    </div>
                    <div className="counter-items  col-6 col-lg-3 text-center py-5 d-flex flex-column justify-content-center " data-wow-delay=".5s">
                        <div className='achivement-bg p-2 py-4'>
                            <div className="icon">
                            <i className="fa-solid fa-users"></i>
                            </div>
                            <div className="content">
                                <h2><span className="count">
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                    </ScrollTrigger>
                                    {counterOn && <CountUp
                                        start={0}
                                        end={5}
                                        duration={2}
                                    />
                                    }</span>+</h2>
                                <p>Dedicated Team</p>
                            </div>
                        </div>

                    </div>
                    <div className="counter-items  col-6 col-lg-3 text-center py-5 d-flex flex-column justify-content-center " data-wow-delay=".7s">
                        <div className='achivement-bg p-2 py-4'>
                            <div className="icon">
                            <i className="fa-regular fa-face-smile"></i>
                            </div>
                            <div className="content">
                                <h2><span className="count">
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                    </ScrollTrigger>
                                    {counterOn && <CountUp
                                        start={0}
                                        end={180}
                                        duration={4}
                                    />
                                    }</span>+</h2>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                    </div>
                    <div className="counter-items  col-6 col-lg-3 text-center py-5 d-flex flex-column justify-content-center " data-wow-delay=".9s">
                        <div className='achivement-bg p-2 py-4'>
                            <div className="icon">
                            <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="content">
                                <h2><span className="count">
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                    </ScrollTrigger>
                                    {counterOn && <CountUp
                                        start={0}
                                        end={5}
                                        duration={6}
                                    />
                                    }</span>+</h2>
                                <p>Years Experience</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section>
    )
}

export default Achivement
