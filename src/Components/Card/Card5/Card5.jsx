import React from 'react'
import './Card5.css'
import { Link } from 'react-router-dom'
const Card5 = () => {
  return (
    <div className='col-lg-6 col-12 py-5'>
        <div class="sr-nit-box">
          <div class="img-box">
            <img class="img-fluid" src="https://www.webmintra.com/wp-content/uploads/2021/12/2.png" alt=""/>
                      </div>
          <div class="nit-profolio-info">
            <h3 class="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
          </div>
          <div class="sr-nit-inflex">
            <div class="nit-content-box">
              <h3 class="sr-nit-title pb-2">Square One Sports</h3>
              <p className='mb-3'>Our Development Academy is the earliest stage of our youth player development model. This training-only program uses the same, coaches as in the older age groups and implements a well-structured curriculum that promotes young players’ motor skill development while developing a comfort level with the ball. The technical objective of the 5 to 10-year-olds’ program is to teach players to dribble.</p>
            </div>
            <Link class="tbtn">Detail</Link>
          </div>
        </div>
      
    </div>
  )
}

export default Card5
