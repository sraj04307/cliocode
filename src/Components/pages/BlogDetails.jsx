import React, { useEffect } from "react";
import Banner2 from "../Component/Banner/Banner2/Banner2";
import Footer from "../Component/Footer/Footer";
import { useLocation } from "react-router-dom";
import '../../assets/css/BlogDetails.css'
const BlogDetails = () => {

  const location = useLocation();
  const image = location.state?.image;
  const title = location.state?.title;
  const date = location.state?.date;
  const desc = location.state?.desc;
  const meta_title = location.state?.meta_title;
  const meta_desc = location.state?.meta_desc;
  const author = location.state?.author;

  useEffect(() => {
    document.title = meta_title; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", {meta_desc});

    window.scrollTo(0, 0);

  }, [meta_title,meta_desc]);
  
  
  
  const blogDate = new Date(date);

  const formattedDate = blogDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  // const formattedTime = blogDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });


  console.log(date);
  

  return (
    <>
      <Banner2 message={"Blog Details"} />

      <section className="news-standard fix section-padding">
        <div className="container">
          <div className="news-details-area">
            <div className="row g-5">
              <div className="col-12 col-lg-8">
              
                <div className="blog-post-details">
                  <div className="single-blog-post">
                    <div className="post-featured-thumb bg-cover">
                      {/* //  style="background-image: url('assets/img/news/post-4.jpg');" */}
                      <img
                        src={image}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="post-content">
                      <ul className="post-list d-flex align-items-center">
                        <li>
                          <i className="fa-regular fa-user"></i>
                          By {author}
                        </li>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          {formattedDate}
                        </li>
                        <li>
                          <i className="fa-solid fa-tag"></i>
                          IT Services
                        </li>
                      </ul>
                      <h3>{title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: desc }}></div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Search</h3>
                    </div>
                    <div className="search-widget">
                      <form action="#">
                        <input type="text" placeholder="Search here" />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="news-widget-categories">
                      <ul>
                        <li>
                          <a href="news-details.html">Database Security</a>{" "}
                          <span>(08)</span>
                        </li>
                        <li>
                          <a href="news-details.html">IT Consultancy</a>{" "}
                          <span>(11)</span>
                        </li>
                        <li className="active">
                          <a href="news-details.html">App Development</a>
                          <span>(12)</span>
                        </li>
                        <li>
                          <a href="news-details.html">UI/UX Design</a>{" "}
                          <span>(18)</span>
                        </li>
                        <li>
                          <a href="news-details.html">Cyber Security</a>{" "}
                          <span>(07)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Recent Post</h3>
                    </div>
                    <div className="recent-post-area">
                      <div className="recent-items">
                        <div className="recent-thumb">
                          <img src="assets/img/news/pp3.jpg" alt="img" />
                        </div>
                        <div className="recent-content">
                          <ul>
                            <li>
                              <i className="fa-solid fa-calendar-days"></i>
                              18 Dec, 2024
                            </li>
                          </ul>
                          <h6>
                            <a href="news-details.html">
                              Keep Your Business Safe & <br />
                              Endure High Availability
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="recent-items">
                        <div className="recent-thumb">
                          <img src="assets/img/news/pp4.jpg" alt="img" />
                        </div>
                        <div className="recent-content">
                          <ul>
                            <li>
                              <i className="fa-solid fa-calendar-days"></i>
                              18 Dec, 2024
                            </li>
                          </ul>
                          <h6>
                            <a href="news-details.html">
                              Tacking the Changes of <br />
                              Retail Industry
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="recent-items">
                        <div className="recent-thumb">
                          <img src="assets/img/news/pp5.jpg" alt="img" />
                        </div>
                        <div className="recent-content">
                          <ul>
                            <li>
                              <i className="fa-solid fa-calendar-days"></i>
                              18 Dec, 2024
                            </li>
                          </ul>
                          <h6>
                            <a href="news-details.html">
                              What’s the Holding Back <br />
                              the It Solution
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Tags</h3>
                    </div>
                    <div className="news-widget-categories">
                      <div className="tagcloud">
                        <a href="news-standard.html">News</a>
                        <a href="news-details.html">business</a>
                        <a href="news-details.html">marketing</a>
                        <a href="news-details.html">solution</a>
                        <a href="news-details.html">SMM</a>
                        <a href="news-details.html">strategy</a>
                        <a href="news-details.html">SEO</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetails;
