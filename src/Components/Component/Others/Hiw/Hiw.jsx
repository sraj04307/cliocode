import React from 'react'
import './Hiw.css'

const Hiw = () => {

  return (
    <section className="work-process-section fix section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <span className={'active'}>How IT work</span>
                    <h2 className={'active sr-subheading-font-size'}>Standard Work Process</h2>
                </div>
                <div className="process-work-wrapper">
                    <div className="line-shape">
                        <img src="assets/img/process/linepng.png" alt=""/>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className={"work-process-items text-center work-process-items1 active"}>
                                <div className="icon icon1">
                                    <img src="assets/img/process/01.svg" alt="img"/>
                                    <h6 className="number">
                                        1
                                    </h6>
                                </div>
                                <div className="content">
                                    <h4>Choose A Service</h4>
                                    <p>
                                        In a free hour, when our power of choice is untrammeled and 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className={"work-process-items text-center work-process-items2 active"}>
                                <div className="content style-2">
                                    <h4>Define Requirements</h4>
                                    <p>
                                        In a free hour, when our power of choice is untrammeled and 
                                    </p>
                                </div>
                                <div className="icon icon2">
                                    <img src="assets/img/process/02.svg" alt="img"/>
                                    <h6 className="number">
                                        2
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className={"work-process-items text-center work-process-items3 active"}>
                                <div className="icon icon3">
                                    <img src="assets/img/process/03.svg" alt="img"/>
                                    <h6 className="number">
                                        3
                                    </h6>
                                </div>
                                <div className="content">
                                    <h4>Request A Meeting</h4>
                                    <p>
                                        In a free hour, when our power of choice is untrammeled and 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className={"work-process-items text-center work-process-items4 active"}>
                                <div className="content style-2">
                                    <h4>Finial Solution</h4>
                                    <p>
                                        In a free hour, when our power of choice is untrammeled and 
                                    </p>
                                </div>
                                <div className="icon icon4">
                                    <img src="assets/img/process/04.svg" alt="img"/>
                                    <h6 className="number">
                                        4
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hiw
