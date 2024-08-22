import React from 'react'
import img1 from '../../../assets/img/Industries/ind1.png'
import './Card4.css'

const Card4 = () => {
  return (
    <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
        <div className='container card p-4'>
            <div className="image-container mb-4 p-3">
            <img src={img1} alt="" />
            </div>
            <div className="content">
                <h3>Educations & e-learning</h3>
            </div>
            

        </div>
      
    </div>
  )
}

export default Card4
