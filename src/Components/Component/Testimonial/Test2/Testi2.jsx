import React from 'react'
import './Testi2.css'


const Testi2 = ({ id }) => {

  return (
    <div className="col-lg-6 p-2 testi2">
      <div className={`testi2-card active ${id}`}>
        <div className="testimonial-box-items">
          
          <p>
            Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
          </p>
          <div className="client-items mt-4">
            
            <div className="client-image style-2 bg-cover"
            >
              
            </div>
            <div className="client-content">
              <h4>Kathryn Murphy</h4>
              <p>Web Designer</p>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Testi2
