import React from "react";
import Logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useAuth, useUser, useSigninCheck, useDatabase } from "reactfire";
import { signOut } from "firebase/auth";
import { useState } from "react";

const Navbar = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { data: user } = useUser();  // this gets our user object
  const { signinStatus } = useSigninCheck();  // is there a user signed in or not?
  const auth = useAuth();

  const db = useDatabase();

  const signout = async () => {
      await signOut(auth);
      setIsLoggedIn(false);
      setShowDropdown(false);
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
      setIsLoggedIn(signinStatus === 'SignedIn')
  }, [signinStatus])

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
             <Link to="/salesearch"><li>Kroger</li></Link> 
             <Link to="/bookmarkedrecipes" ><li>Settings</li></Link>
              <li onClick={signout}>Logout</li>
            </ul>
          )}
        </div>
        </div>
      ) : (
        <Link to="/login"><button className="primary-button11">
          Sign In
        </button></Link>
      )}
      
    </nav>
  
  );
};
      
export default Navbar;
