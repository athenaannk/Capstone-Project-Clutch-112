import React, { useState } from "react"
import "./App.css";
import Login from "./Components/Login"
import Register from "./Components/Register"
import Home from "./Components/Home";
import About from "./Components/About"
import Work from "./Components/Work";
import Footer from "./Components/Footer";


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
      currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      {/* <Home />
      <About/>
      <Work/>
      <Footer/> 
     */}
    </div>
  );
}

export default App;