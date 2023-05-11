import React from "react";
import Logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useAuth, useUser, useSigninCheck, useDatabase } from "reactfire";
import { signOut } from "firebase/auth";
import { useState } from "react";
import {FiCornerRightDown} from "react-icons/fi";

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
      {console.log(user)}
    
      {
        user ? (
        <div>
     <span className="hithere">Hungry for More?!<FiCornerRightDown/></span>
     
<div className="dropdown-container">
          <button className="primary-button15" onClick={toggleDropdown}>
            Menu Options
          </button>
          {showDropdown && (
            <ul className="dropdown">
             <Link to="/salesearch"><li>Search Kroger</li></Link> 
             <Link to="/bookmarkedrecipes" ><li>Bookmarked Recipes</li></Link>
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