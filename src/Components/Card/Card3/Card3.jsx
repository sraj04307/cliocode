import React from 'react'
import './Card3.css'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/teams/Person 1.jpg'

const Card3 = ({ id }) => {


  return (


    <div className={'col-xl-3 col-lg-4 col-md-6 card3 p-2'} data-wow-delay=".3s">
      <div className={`single-team-items active ${id}`}>
        <div className="team-image">
          <img src={img1} alt="team-img" />
          <div className="social-profile">
            <span className="plus-btn"><i class="fa-solid fa-info"></i></span>
          </div>

          <div className='profile-details'>
              <h5>James Smith</h5>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="team-content text-center">
          <h3>
            <Link to="team-details.html">Marvin McKinney</Link>
          </h3>
          <p>Web Designer</p>
        </div>
      </div>
    </div>
  )
}

export default Card3
