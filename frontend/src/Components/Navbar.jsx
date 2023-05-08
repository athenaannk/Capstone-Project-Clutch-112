import React from "react";
import Logo from "../Assets/logo.png";
import { useContext, useEffect } from "react";
import { useAuth, useUser, useSigninCheck, useDatabase } from "reactfire";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const Navbar = props => {

  const { data: user } = useUser();  // this gets our user object
  const { signinStatus } = useSigninCheck();  // is there a user signed in or not?
  const auth = useAuth();

  const db = useDatabase();

  const signin = async () => {
      let provider = new GoogleAuthProvider();
      let u = await signInWithPopup(auth, provider);
      console.log(u);
      return u

    }
    const signout = async () => {
        await signOut(auth);

    }

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
     
      {
                        signinStatus === 'loading' ?
                            <button className="btn btn-primary" disabled>Waiting. . .  to. . . .  log . . .  in</button> :
                            user ?
                                <>
                                    <span className="hithere">Hi there, {user.displayName}!</span>
                                    <button className="primary-button1" onClick={signout}>Kroger</button>

                                    <button className="primary-button1" onClick={signout}>Settings</button>

                                    <button className="primary-button1" onClick={signout}>Logout</button>
                                </> :
                                    <button className="primary-button11" onClick={signin}>Login</button>                    
                                    }
     

      </div>

    </nav>
  );
  }

export default Navbar;
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