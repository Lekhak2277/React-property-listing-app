import React from 'react'
import './Createlisting.css'

function Createlisting() {
  return (
    <div className='crete-listing'>
      <form className='create-listing-form'>
        <div className='create-listing-form-group'>
        <input autoFocus = {true} type='text' placeholder='Property title' className='create-listing-text'/>
        <label htmlFor='listingImg' className='create-listing-img-upload'>
         <i class = 'upload-icon fas fa-upload'></i>
        </label>
        <input type='file' id='listingImg' style={{display:'none'}}/>
        </div>

        <div className='create-listing-form-group'>
        <textarea className='create-listing-text create-listing-description' placeholder='Property Description'></textarea>
        </div>

      </form>
      <button className='create-listing-button'>Submit</button>
    
    </div>
  )
}

export default Createlisting