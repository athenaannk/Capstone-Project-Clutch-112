// import React, { useState } from "react"


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