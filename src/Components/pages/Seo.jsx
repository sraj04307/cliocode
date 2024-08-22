import React from 'react'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import '../../assets/css/Seo.css'
import img from '../../assets/img/Banner2/SEO.jpg'

const Seo = () => {
  return (
    <>
      <Banner2 message={"SEO"} image = {img} />
      <section className="sr-seo-nit-seo section-padding">
        <div className="container">
            <div className="sr-seo-nit-seo-box">
                <div className="table-responsive-sm">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="sr-seo-nit-heading-1">
                                <th><h3 className="sr-seo-nit-heading">SEO Packages and Pricing</h3></th>
                                <th className='value'>
                                    <h3 className="sr-seo-nit-subtitle">Value</h3>
                                    <h3 className="sr-seo-nit-title">$150</h3>
                                    <h3 className="sr-seo-nit-subtitle2">Per Month</h3>
                                </th>
                                <th className='bronze'>
                                    <h3 className="sr-seo-nit-subtitle">Bronze</h3>
                                    <h3 className="sr-seo-nit-title">$280</h3>
                                    <h3 className="sr-seo-nit-subtitle2">Per Month</h3>
                                </th>
                                <th className='silver'>
                                    <h3 className="sr-seo-nit-subtitle">Silver</h3>
                                    <h3 className="sr-seo-nit-title">$500</h3>
                                    <h3 className="sr-seo-nit-subtitle2">Per Month</h3>
                                </th>
                                <th className='gold'>
                                    <h3 className="sr-seo-nit-subtitle">Gold</h3>
                                    <h3 className="sr-seo-nit-title">$800</h3>
                                    <h3 className="sr-seo-nit-subtitle2">Per Month</h3>
                                </th>
                                <th className='platinum'>
                                    <h3 className="sr-seo-nit-subtitle">Platinum</h3>
                                    <h3 className="sr-seo-nit-title">$1250</h3>
                                    <h3 className="sr-seo-nit-subtitle2">Per Month</h3>
                                </th>
                            </tr>
                            <tr className="sr-seo-nit-heading-2">
                                <td><h2 className="sr-seo-nit-title">Minimum Contract Duration</h2></td>
                                <td><h2 className="sr-seo-nit-title">6 Months</h2></td>
                                <td><h2 className="sr-seo-nit-title">6 Months</h2></td>
                                <td><h2 className="sr-seo-nit-title">6 Months</h2></td>
                                <td><h2 className="sr-seo-nit-title">6 Months</h2></td>
                                <td><h2 className="sr-seo-nit-title">6 Months</h2></td>
                            </tr>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">INITIAL REVIEW &amp; ANALYSIS</h3> </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Number of Key Phrases Optimized</td>
                                <td><b>Upto 10</b></td>
                                <td><b>Upto 20</b></td>
                                <td><b>Upto 40</b></td>
                                <td><b>Upto 70</b></td>
                                <td><b>Upto 100</b></td>
                            </tr>
                            <tr>
                                <td>Preliminary SEO Check</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Detailed SEO Strategy &amp; Plan</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Keywords Analysis Report</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Competitive Analysis Report (If required)</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Initial Backlinks Analysis</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Google Penalty Check</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Working with HTML Source Code</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Crawler Compliance Implementation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">SEO Compatibility Checks</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Cross Browser Compatibility</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Website Loading Time</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Checking Page Size</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Checking Broken Links</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Duplicate Content Checking</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Canonical Tag</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>W3C Validation *</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Redirection Issues *</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                            </tr>
                            <tr>
                                <td>404 Custom Error Page *</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">On-Page Optimization</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Meta Tags Optimization (Title &amp; Description)</td>
                                <td>Upto 5</td>
                                <td>Upto 10</td>
                                <td>Upto 25</td>
                                <td>Upto 50</td>
                                <td>Upto 50-100</td>
                            </tr>
                            <tr>
                                <td>Robots.Txt Creation &amp; Analysis</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Creation &amp; Implementation Of XML Sitemap</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Google Analytics Setup &amp; Conversion Tracking</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Creation Of Website Navigation (If Required) *</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Image Optimization (Alt &amp; Title Tags)</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Anchor Tag Optimization</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                            </tr>
                            <tr>
                                <td>Heading Tag Optimization</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Existing Web Content Optimization</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Creation Of New Pages (Additional Charges) *</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>URL Mapping</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Off-Page Optimization And Link Strategy Factors</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Link Wheel</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>5</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>                                
                            </tr>
                            <tr>
                                <td>"No Follow" Links Check</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Quality Social Bookmarking</td>
                                <td>5</td>
                                <td>10</td>
                                <td>20</td>
                                <td>50</td> 
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Article Submission</td>
                                <td>5</td>
                                <td>10</td>
                                <td>20</td>
                                <td>50</td> 
                                <td>75</td>
                            </tr>
                            <tr>
                                <td>Article Link Promotion</td>
                                <td>10</td>
                                <td>20</td>
                                <td>30</td>
                                <td>40</td> 
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>Press Release Submission</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>5</td>
                                <td>10</td>
                                <td>20</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Logo Submission</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Profile Submission</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Image Submission</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Infographic Creation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Infographic Distribution</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>3</td>
                                <td>5</td>
                                <td>8</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Product Listing (E-Commerce Website) *</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Content Syndication And Optimization</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Article Writing</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                                <td>8</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>Press Releases Writing</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>Sound Promotion</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>RSS News Feed Submission</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td>10</td>
                                <td>20</td>
                                <td>40</td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Local Optimization</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Local Listings (Yelp, Yell, Trustpilot Etc.)</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Business Review Posting</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Search Engine Submission</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Customer Review/Testimonial Promotion</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Geo-Tagging*</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Google Map &amp; Wikimapia Updation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Classified Ad Submission</td>
                                <td>10</td>
                                <td>20</td>
                                <td>40</td>
                                <td>60</td>
                                <td>80</td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Blog Optimization</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Blog Setup</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Internal Blog Integration &amp; Optimization *</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Blog Optimization</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Blog Articles Writing</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>5</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Blog Submission</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>5</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Blog Promotion</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Forum Posting</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>5</td>
                                <td>10</td>
                                <td>15</td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Social Media Optimization</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Social Media Optimization</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Strategically Presence On Top Social Media Websites</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>10</td>
                                <td>12</td>
                                <td>15</td>
                                <td>20</td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Facebook</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Facebook Fan Page Creation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Regular Updates</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Facebook Profile Avatar Design (If Required)</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Facebook Timeline Design</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Facebook Apps Integration</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Facebook Page Likes / Fans</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>20</td>
                                <td>30</td>
                                <td>40</td>
                                <td>50</td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Twitter</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Twitter Page Creation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Regular Updates</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Twitter Background Design</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Twitter Followers</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>25</td>
                                <td>40</td>
                                <td>70</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Twitter List Management</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Google Local Page</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Google Local Page Creation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Google Local Page Optimization</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Regular Updates</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Apsense</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Google Local Page Creation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Google Local Page Optimization</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Regular Updates</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Video Marketing </h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>YouTube Channel Creation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>YouTube Background Design</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Video Submission (Youtube, Dailymotion, Vimeo Account Setup)</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>3</td>
                                <td>5</td>
                                <td>10</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Video Link Promotion</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>5</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Video Creation &amp; Optimization</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Guaranteed Views</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td>30</td>
                                <td>50</td>
                                <td>70</td>
                                <td>100</td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Website Usability &amp; Conversion Optimization </h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Latest Online Marketing Trend Updation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Website Designing Consultation</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Landing Page Analyzer</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Enquiry Pages Review &amp; Suggestion</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Enquiry Page Modification (If Required)*</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Google Penalty Link Removals *</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                            </tr>
                            <tr>
                                <td>Mobile Compatibility Check*</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                            </tr>
                            <tr>
                                <td>Dynamic &amp; E-Commerce URL Optimization*</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                                <td>As Per Requirement</td>
                            </tr>
                        </tbody><thead>
                            <tr className="sr-seo-nit-heading-3">
                                <td colspan="6"><h3 className="sr-seo-nit-subtitle">Analysis Reports</h3></td>
                            </tr>
                        </thead>
                            <tbody><tr>
                                <td>Bi-Weekly SEO Report</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Monthly Activity/SEO Ranking Reports</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>Google Analytical Report</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/cross.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>E-Mail/Call/Skype Support</td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                                <td><img src="https://www.webmintra.com/wp-content/themes/webmintra/assets/images/icons/check.png" alt="" className="img-fluid"/></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td><a href="https://www.webmintra.com/contact-us/" className="tbtn">Order Now </a></td>
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
      <Footer />
    </>
  )
}

export default Seo
