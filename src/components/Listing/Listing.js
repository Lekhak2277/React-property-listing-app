import React from 'react'
import './Listing.css'
import Listingitem from '../Listing-item/Listingitem'

function Listing() {
  return (
    <div className='listing-section'>
      <Listingitem/>
      <Listingitem/>
      <Listingitem/>
      <Listingitem/>
      <Listingitem/>
      <Listingitem/>
    </div>

  )
}

export default Listing