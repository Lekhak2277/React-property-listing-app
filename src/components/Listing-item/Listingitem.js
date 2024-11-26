import React from 'react'
import './Listingitem.css'
import { Link } from 'react-router-dom'

function Listingitem() {
  return (
    <>
    <div className='listing-item'>
        <img className = 'listing-img' src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        <div className='listing-details'>
            <div className='listing-categories'>
                <span className='listing-category'>Buy</span>
                <span className='listing-category'>Sell</span>
            </div>
            <Link to='/detail'>
            <span className='listing-title'>Awesome Property </span>
            </Link>
            
            <hr/>
            <span className='listing-time'>2 days ago</span>
            <p className='listing-description'>This is our property and this is very beautiful This is our property and this is very beautiful and affordable also</p>
        </div>
    </div>

    

    
    </>
  )
}

export default Listingitem