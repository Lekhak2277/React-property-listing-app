import React from 'react'
import './Topbar.css';
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <>
    <div className='topbar'>
    <div className='topbar-left'>
    <i className="topbar-social-icon fa-brands fa-instagram"></i>
    <i className="topbar-social-icon fa-brands fa-facebook"></i>
    <i className="topbar-social-icon fa-brands fa-linkedin"></i>
    <i className="topbar-social-icon fa-brands fa-twitter"></i>
    </div>
    <div className='topbar-center'>
      <ul className='topbar-list'>
        <li className='topbar-list-item'>
        <Link to="/">
          HOME
        </Link>
        </li>
        <li className='topbar-list-item'>ABOUT</li>
        <li className='topbar-list-item'>CONTACT US</li>
        <li className='topbar-list-item'>
          
        <Link to="/create">
        CREATE PROPERTY
        </Link>
         
          
        </li>


        <li className='topbar-list-item'>LOGOUT</li>
      </ul>
    </div>
    <div className='topbar-right'>
        <img className = "topbar-profile-pic" src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        <i className = "topbar-search fa-solid fa-magnifying-glass" ></i>
        
    </div>
    </div>
    </>
  )
}

export default Topbar