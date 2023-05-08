import React from "react";
import Logo from "../Assets/logo.png";


const Navbar2 = () => {


  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
     
      <button className="primary-button3">Bookmark</button>


        <button className="primary-button3" >Log Out</button>

      </div>

    </nav>
  );
  }

export default Navbar2;