import React from 'react';
import { useRef } from 'react';
import { NavLink,Link } from 'react-router-dom';
import "./NavBar.css";


  
const NavBar = () => {

  const navRef= useRef();

  const handleClick= ()=>{
    navRef.current.classList.toggle('showNavMenu');
  }


  return (
    <nav id='navbar'>
        <h2 className='nav-logo'><Link to="/"><i class="fa fa-plane" aria-hidden="true"></i>BlaqWaYs</Link></h2>
        <div className='hamburger'>
          <i className="fa fa-bars" aria-hidden="true" onClick={handleClick}></i>
        </div>
       
        <ul className='nav-menu' ref={navRef}>
            <li><NavLink to="/" activeClassName="active" onClick={handleClick}><i className='fa-solid fa-house-user'></i>Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" onClick={handleClick}><i class="fa fa-book" aria-hidden="true"></i>About</NavLink></li>
            <li><NavLink to="/explore" activeClassName="active" onClick={handleClick}><i class="fa fa-suitcase" aria-hidden="true"></i>Explore</NavLink></li>
            <li><NavLink to="/" activeClassName="active" onClick={handleClick}><i class="fa fa-comments" aria-hidden="true"></i>Contact</NavLink></li>
            <li><NavLink to="/" activeClassName="active" onClick={handleClick}><i class="fa fa-user-plus" aria-hidden="true"></i>SignUp</NavLink></li> 
            <div className="menu-exit-wrapper">
              <i className="fas fa-times" onClick={handleClick}></i>
            </div> 
        </ul>
        

    </nav>
  )
}

export default NavBar