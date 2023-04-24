import React, { useState } from "react"


export const Register = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState ('');
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input value={name} name="name" id="name" placeholder="Full Name"/>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="passsword" name="password"></input>

        <button type="submit">Log In</button>

    </form>
    <button>Already have an account? Log In Here!</button>

    </>
    )
}

export default Register