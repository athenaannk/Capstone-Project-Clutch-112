import React, { useState } from "react";
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create an Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

// export const Register = (props) => {

//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState ('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }
//     return (
//         <div className="auth-form-container" >
//         <form className="register-form"onSubmit={handleSubmit}>
//             <label>full name</label>
//             <input className="register-input" value={name} name="name" id="name" placeholder="Full Name"/>
//         <label htmlFor="email">email</label>
//         <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

//         <label htmlFor="password">password</label>
//         <input className="register-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="passsword" name="password"></input>

//         <button className="register-button" type="submit">Register</button>
//         <button className="register-button2" onClick={()=>props.onFormSwitch('login')}>Already have an account? Log In Here!</button>

//     </form>

  
//     </div>
    
//     )
// }

// export default Register