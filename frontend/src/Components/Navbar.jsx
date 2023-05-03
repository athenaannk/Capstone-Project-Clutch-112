import React from "react";
import Logo from "../Assets/logo.png";


const Navbar = () => {


  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
     
      <button className="primary-button1">Register</button>
        <button className="primary-button1" >Login</button>

      </div>

    </nav>
  );
  }

export default Navbar;