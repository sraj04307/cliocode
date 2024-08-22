import React from 'react'
import { Link } from 'react-router-dom'
import './Banner2.css'

const Banner2 = (props) => {
  return (
    <div className="breadcrumb-wrapper bg-cover">
    <div className="line-shape">
        <img src={props.image} alt="shape-img"/>
    </div>
    <div className="container">
        <div className="page-heading">
            <h1 className="wow" data-wow-delay=".3s">{props.message}</h1>
            <ul className="breadcrumb-items wow" data-wow-delay=".5s">
                <li>
                    <Link to="index.html">
                        Home
                    </Link>
                </li>
                <li>
                    <i className="fas fa-chevron-right"></i>
                </li>
                <li>
                {props.message}
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Banner2
