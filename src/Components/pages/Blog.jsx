import React, { useEffect, useState } from "react";
import Card1 from "../Card/Card1/Card1";
import Banner2 from "../Component/Banner/Banner2/Banner2";
import Footer from "../Component/Footer/Footer";
import img from "../../assets/img/Banner2/blog.jpg";
import { blogApi } from "../../api/Api_check";

const Blog = () => {
  const [blogData, setBlogData] = useState();

  useEffect(() => {
    document.title = "Blog"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Blog");

    window.scrollTo(0, 0);

    getData();
  }, []);

  const getData = () => {
    blogApi("https://mastergosen.com/wp-json/cliocode-blog/v1/posts/")
      .then((result) => {
        console.log(result);

        setBlogData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <>
      <Banner2 message={"Blog Grid"} image={img} />
      <section className="news-section-4 fix section-padding">
        <div className="container">
          <div className="row g-4">
            {blogData?.data?.map((item) => (
              <Card1
                key={item.id}
                image={item.thumbnail_url}
                date={item.date}
                title={item.title}
                desc={item.content}
                meta_title={item.meta_title}
                meta_description={item.meta_description}
                author={item.author}
              />
            ))}
          </div>
          {/* <div
            className="page-nav-wrap pt-5 text-center wow "
            data-wow-delay=".3s"
          >
            <ul>
              <li>
                <Link className="page-numbers" to="#">
                  01
                </Link>
              </li>
              <li>
                <Link className="page-numbers" to="#">
                  02
                </Link>
              </li>
              <li>
                <Link className="page-numbers" to="#">
                  03
                </Link>
              </li>
              <li>
                <Link className="page-numbers" to="#">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
