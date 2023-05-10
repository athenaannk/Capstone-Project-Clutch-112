import React from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import SaleSearch from "./SaleSearch";
import { useContext, useEffect } from "react";
import { useAuth, useUser, useSigninCheck, useDatabase } from "reactfire";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

// const Navbar = props => {

//   const { data: user } = useUser();  // this gets our user object
//   const { signinStatus } = useSigninCheck();  // is there a user signed in or not?
//   const auth = useAuth();

//   const db = useDatabase();

//   const signin = async () => {
//       let provider = new GoogleAuthProvider();
//       let u = await signInWithPopup(auth, provider);
//       console.log(u);
//       return u

//     }
//     const signout = async () => {
//         await signOut(auth);

//     }

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

// const Navbar = props => {

//   const { data: user } = useUser();  // this gets our user object
//   const { signinStatus } = useSigninCheck();  // is there a user signed in or not?
//   const auth = useAuth();

//   const db = useDatabase();

//   const signin = async () => {
//       let provider = new GoogleAuthProvider();
//       let u = await signInWithPopup(auth, provider);
//       console.log(u);
//       return u

//     }
//     const signout = async () => {
//         await signOut(auth);

//     }

//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={Logo} alt="" />
//       </div>
//       <div className="navbar-links-container">
     
//       {
//                         signinStatus === 'loading' ?
//                             <button className="btn btn-primary" disabled>Waiting. . .  to. . . .  log . . .  in</button> :
//                             user ?
//                                 <>
//                                     <span className="hithere">Hi there, {user.displayName}!</span>
//                                     <div className="navbar-end">
//     <div className="dropdown">
//       <label tabIndex={0} className="btn btn-ghost btn-circle">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//       </label>
//       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//         <li><a>Kroger</a></li>
//         <li><a>Settings</a></li>
//         <li><a onClick={signout}>Logout</a></li>
//       </ul>
//     </div>
//   </div>
//                                 </> :
//                                     <button className="primary-button11" onClick={signin}>Login</button>                    
//                                     }
  

//       </div>

//     </nav>
//   );
//   }

// import React from "react";
// import Logo from "../Assets/logo.png";
// import { Link } from "react-router-dom"
// import { useContext } from "react";
// import { DataContext } from "../Context/DataProvider";
// import { useAuth, useUser, useSigninCheck } from "reactfire";
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// const Navbar = props => {
// const auth = useAuth
// const{data:user} = useUser();
// const { signinStatus } = useSigninCheck();

// const signin = async () => {
// let provider = new GoogleAuthProvider();
// let u = await signInWithPopup(auth, provider);
// console.log(u)
// return u
// }

// const signout = async () => {
//   await signOut(auth)
  
// }
//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={Logo} alt="" />
//       </div>
//       <div className="navbar-links-container">

//        {
//                         signinStatus === 'loading' ?
//                             <button className="btn btn-primary" disabled>Waiting. . .  to. . . .  log . . .  in</button> :
//                             user ?
//                                 <>
//                                     <span>Hi there, {user.displayName}!</span>
//                                     <button className="primary-button1" >Kroger</button>
//                                     <button className="primary-button1" >User Settings</button>
//                                     <button className="primary-button1" onClick={signout}>Logout</button>
//                                 </> :
//                                       <button className="primary-button11" onClick={signin} >Login</button>

//                     }
                    
//       </div>

//     </nav>
//   );
//   }

// export default Navbar;