import React from 'react'
import '../../assets/css/CRP.css'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Footer from '../Component/Footer/Footer'
import img from '../../assets/img/Banner2/content writing.jpg'

const CRP = () => {
    return (
        <>

            <Banner2 message={"Content Writing"} image={img} />

            <section className="sr-crp-nit-crp sr-crp-nit-content-writing-packages section-padding">
                <div className="container">
                    <div className="sr-crp-nit-crp-box">
                        <div className="table-responsive-sm">
                            <table className="table active-3 table-bordered">
                                <thead>
                                    <tr className="sr-crp-nit-heading-1">
                                        <th><h3 className="sr-crp-nit-heading">Content Writing Packages</h3></th>
                                        <th className="bronze">
                                            <h3 className="sr-crp-nit-subtitle">Website Content <br /> Writing</h3>
                                        </th>
                                        <th className="silver">
                                            <h3 className="sr-crp-nit-subtitle">Article Copywriting</h3>
                                        </th>
                                        <th className="gold">
                                            <h3 className="sr-crp-nit-subtitle">Press Release <br /> Writing</h3>
                                        </th>
                                        <th className="platinum">
                                            <h3 className="sr-crp-nit-subtitle">Blog Writing</h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>200 Words</td>
                                        <td>$10</td>
                                        <td>$7</td>
                                        <td>$8</td>
                                        <td>$6</td>
                                    </tr>
                                    <tr>
                                        <td>400 Words</td>
                                        <td>$20</td>
                                        <td>$15</td>
                                        <td>$16</td>
                                        <td>$13</td>
                                    </tr>
                                    <tr>
                                        <td>600 Words</td>
                                        <td>$28</td>
                                        <td>$20</td>
                                        <td>$22</td>
                                        <td>$18</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td><a href="https://www.webmintra.com/contact-us/" className="tbtn">Order Now </a></td>
                                        <td><a href="https://www.webmintra.com/contact-us/" className="tbtn">Order Now </a></td>
                                        <td><a href="https://www.webmintra.com/contact-us/" className="tbtn">Order Now </a></td>
                                        <td><a href="https://www.webmintra.com/contact-us/" className="tbtn">Order Now </a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default CRP
