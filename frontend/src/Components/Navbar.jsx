import React from "react";
import Logo from "../Assets/logo.png";
import Login from "./Auth/Login";
import { Link } from "react-router-dom"


const Navbar = () => {


  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
     
      <button className="primary-button1">Register</button>
        <Link to={Login}><button className="primary-button1" >Login</button></Link> 

      </div>

    </nav>
  );
  }

export default Navbar;