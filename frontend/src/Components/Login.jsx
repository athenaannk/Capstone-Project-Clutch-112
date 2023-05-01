import React from 'react';
import Logo from "../Assets/logo.png"
import Video from "../Assets/video.mp4"
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

function Login() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
          <video
          src= {Video}
          controls
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
        > something</video>          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='imglogin d-flex'>
                <span> 
                <img src={Logo} ></img>
                </span>
              </div>

              <h5 className="signin fw-bold my-4 pb-3" style={{letterSpacing: '4px'}}>Sign into your account</h5>

                <MDBInput className="inputlogin" label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput className="inputlogin" label='Password' id='formControlLg' type='password' size= "lg"/>

              <MDBBtn className="loginbutton mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              <a className="forgot small text-muted" href="#!">Forgot password?</a>
              <p className="register mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

        

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;
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
