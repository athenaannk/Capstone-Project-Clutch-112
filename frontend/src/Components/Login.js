import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

                <label htmlFor="password">password</label>
                <input className="login-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="passsword" name="password"></input>

                <button className="login-button" type="submit">Log In</button>
                <button className="login-button2" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register Here!</button>


                
                </form >
        </div> 
      
    )
}

export default Login