import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/enteringredients");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="loginlogo">
    <img src={Logo} alt="" />
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Register</h3>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="primary-button14">
              Register
            </button>
          </form>
          <div className="loginregister mt-3 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
