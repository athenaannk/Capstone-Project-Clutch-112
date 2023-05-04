import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import video from "../../Assets/video.mp4"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Register from "./Register";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
<MDBContainer className="wrapper">

  <MDBCard className="d-flex">
    <MDBRow className='g-0'>

      <MDBCol md='6'>
        <video src={video}  />
      </MDBCol>

      <MDBCol className='d-flex' md='6'>
        <MDBCardBody className='d-flex flex-column'>
          <div className='d-flex flex-row mt-2'>
          
           <img src={logo} className="imglogin mx-auto"></img>
          </div>
      <form className="d-flex flex-column" onSubmit={logIn}>
      <h5 className="fw-normal" style={{letterSpacing: '1px'}}>Sign into your account</h5>
       <MDBInput wrapperClass='mb-4 mx-5 ' id="formControlLg" size="lg"
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></MDBInput>
         <MDBInput wrapperClass='mb-4 mx-5' id="formControlLg" size="lg"

                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></MDBInput>
              <MDBBtn className="loginbutton" size="lg" type="submit">Login</MDBBtn>
              <Link to={Register}><p className="mb-5 pb-lg-2">Don't have an account? Register here</p></Link>

            </form>
        </MDBCardBody>
      </MDBCol>

    </MDBRow>
  </MDBCard>

</MDBContainer>
  );
};

export default Login;

// import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'
// var firebase = require('firebase');

// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// const Login = (props) => {
//   useEffect(()=>{
//     const ui= firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth)
//     ui.start('.firebase-auth-container',{
//       signInOptions: [
//         {
//           provider: firebase.auth.EmailAuthProvider.PROVIDER_ID

//         }
//       ],
//       signInSuccessUrl: '/authenticated',
//     });
//   },[props.auth]);
//   return (
//     <>
//     <div>Login</div>
//     <div className={"firebase-auth-container"}></div>
//     </>
//   )
// }

// export default Login;
// import React from 'react';
// import Loginbackground from "../Assets/loginbackground.png"
// import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

// function Login() {

//   return (
//     <MDBContainer fluid className="logincontainer">

//       <MDBRow>

//         <MDBCol col='10' md='6'>
//           <img src={Loginbackground} class="img-fluid" alt="Sample image" />
//         </MDBCol>

//         <MDBCol col='4' md='6'>

//           <div className="divider d-flex align-items-center my-4">
//             <p className="text-center fw-bold mx-3 mb-0">Log In</p>
//           </div>

//           <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

//           <div className="d-flex justify-content-between mb-4">
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//             <a href="!#">Forgot password?</a>
//           </div>

//           <div className='text-center text-md-start mt-4 pt-2'>
//             <MDBBtn className="loginbutton" size='lg'>Login</MDBBtn>
//             <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
//           </div>

//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default Login;
// import React, { useState } from "react"

// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);

//     }
//     return (
//         <div className="auth-form-container">
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">email</label>
//                 <input className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

//                 <label htmlFor="password">password</label>
//                 <input className="login-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="passsword" name="password"></input>

//                 <button className="login-button" type="submit">Log In</button>
//                 <button className="login-button2" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register Here!</button>

//                 </form >
//         </div>

//     )
// }

// export default Login
