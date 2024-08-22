import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card1.css";

const Card1 = ({ id, image, title, date, desc ,meta_title,meta_description,author}) => {
  const newdate = new Date(date);

  const navigate = useNavigate();

  const readmoreClick = () => {
    navigate('/blog-details', {
      state: {
        image: image,
        title: title,
        date: newdate,
        desc: desc,
        meta_title:meta_title,
        meta_desc:meta_description,
        author:author
      }
    });
  };

  

  return (
    <div className="col-xl-4 col-lg-6 col-md-6" data-wow-delay=".3s">
      <div className={`news-card-items style-2 mt-0 pb-0 active ${id}`}>
        <div className="news-image">
          <img src={image || "assets/img/news/blog.jpg"} alt="news-img" />
          <div className="post-date">
            <h3 className="text-center">
              {newdate.toLocaleString("en-US", { day: "numeric" })}
              <br />
              {newdate.toLocaleString("en-US", { month: "short" })}
            </h3>
          </div>
        </div>
        <div className="news-content">
          <ul>
            <li>
              <i className="fa-regular fa-user"></i>
              By Admin
            </li>
            <li>
              <i className="fa-solid fa-tag"></i>
              IT Services
            </li>
          </ul>
          <h3>
            <span>{title}</span>
          </h3>
          <span className="theme-btn-2 mt-3" onClick={readmoreClick}>
            Read More
            <i className="fa-solid fa-arrow-right-long"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
