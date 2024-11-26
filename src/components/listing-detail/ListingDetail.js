import React from 'react'
import './ListingDetail.css'

function ListingDetail() {
  return (
    <div className='listing-detail'>
        <div className='listing-detail-content'>
            <img className = 'listing-detail-img' src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='list-img'></img>
            <h1 className='listing-detail-title'>Awesome property
                <div className='listing-detail-action'>
                    <i className='listing-detail-action-icon fas fa-edit'></i>
                    <i className='listing-detail-action-icon fas fa-trash-alt'></i>
                </div>
            </h1>
            <div className='listing-detail-meta-info'>
                <span className='listing-detail-author'>Author-<strong>John Doe</strong></span>
                <span className='listing-detail-time'>1 day ago</span>

            </div>
            <p className='listing-detail-description'>
            Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.orem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.orem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.orem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.orem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.
            </p>
        </div>
    </div>
  )
}

export default ListingDetail