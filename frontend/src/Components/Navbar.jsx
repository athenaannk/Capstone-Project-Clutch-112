import React from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import SaleSearch from "./SaleSearch";
import { useContext, useEffect } from "react";
import { useAuth, useUser, useSigninCheck, useDatabase } from "reactfire";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";


const Navbar = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

    const { data: user } = useUser();  // this gets our user object
  const { signinStatus } = useSigninCheck();  // is there a user signed in or not?
  const auth = useAuth();

  const db = useDatabase();

  const signin = async () => {
      let provider = new GoogleAuthProvider();
      let u = await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
      console.log(u);
      return u

    }
    const signout = async () => {
        await signOut(auth);
        setIsLoggedIn(false);
        setShowDropdown(false);

    }



  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
    <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      
    
      {
        isLoggedIn ? (
        <div>
     <span className="hithere">Hi there, {user.displayName}!</span>
     
<div className="dropdown-container">
          <button className="primary-button1" onClick={toggleDropdown}>
            Menu
          </button>
          {showDropdown && (
            <ul className="dropdown">
             <Link to={SaleSearch}><li>Kroger</li></Link> 
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          )}
          <button className="primary-button11" onClick={signout}>
            Sign out
          </button>
        </div>
        </div>
      ) : (
        <button className="primary-button11" onClick={signin}>
          Sign In
        </button>
      )}
    </nav>
  )
}

export default Navbar;
