import React from 'react'
import './Brand2.css'

const Brand2 = ({ ib ,id}) => {

    return (
        <div className='col-lg-3 col-md-6 p-2 '>
            <div className={`text-center p-4 border brand2-card active ${id}`}>
                <img src={ib} alt="" />
            </div>

        </div>
    )
}

export default Brand2
