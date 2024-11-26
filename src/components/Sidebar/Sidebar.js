import React from 'react'
import './Sidebar.css'


function Sidebar() {
  return (
    <>
    <div className='sidebar-section'>
      <div className='sidebar-subsection'>
              <span className='sidebar-title'>about me</span>
              <img className='sidebar-img' src='https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing elit adipisicing elit. </p>
      </div>
      <div className='sidebar-subsection'>
              <span className='sidebar-title'>categories</span>
              <ul className='sidebar-categories'>
                <li className='sidebar-category'>Buy</li>
                <li className='sidebar-category'>Sell</li>
                <li className='sidebar-category'>Rent</li>
                <li className='sidebar-category'>Hostel</li>
                <li className='sidebar-category'>B & B</li>
                <li className='sidebar-category'>Hotel</li>
              </ul>
      </div>
      <div className='sidebar-subsection'>
              <span className='sidebar-title'>follow us on</span>
              <div className='sidebar-social-icons'>
                  <i className="sidebar-social-icon fa-brands fa-instagram"></i>
                  <i className="sidebar-social-icon fa-brands fa-facebook"></i>
                  <i className="sidebar-social-icon fa-brands fa-linkedin"></i>
                  <i className="sidebar-social-icon fa-brands fa-twitter"></i>
              </div>
      </div>
    </div>

    </>

  )
}

export default Sidebar