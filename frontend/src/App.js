import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About"
import Work from "./Components/Work";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Work/>
    
    </div>
  );
}


//import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route}
// from 'react-router-dom';
// import Home from './pages';
// import Register from './pages/register';
// import Search from './pages/search';
// import SignIn from './pages/signin';
// import UserSettings from './pages/usersettings';
// import Bookmark from './pages/bookmark';

// function App() {
// return (
// <Router>
// <Navbar />
// <Routes>
//     <Route exact path='/' exact element={<Home />} />
//     <Route path='/register' element={<Register/>} />
//     <Route path='/signin' element={<SignIn/>} />
//     <Route path='/usersettings' element={<UserSettings/>} />
//     <Route path='/bookmark' element={<Bookmark/>} />
// </Routes>
// </Router>
// );
// }

// export default App;
//    <Route exact path='/' exact element={<Home />} />

// function App() {
//   // usestate for setting a javascript
//   // object for storing and using data
//   const [data, setdata] = useState({
//       name: "",
//       age: 0,
//       date: "",
//       programming: "",
//   });

//   // Using useEffect for single rendering
//   useEffect(() => {
//       // Using fetch to fetch the api from 
//       // flask server it will be redirected to proxy
//       fetch("/data").then((res) =>
//           res.json().then((data) => {
//               // Setting a data from api
//               setdata({
//                   name: data.Name,
//                   age: data.Age,
//                   date: data.Date,
//                   programming: data.programming,
//               });
//           })
//       );
//   }, []);

//   return (
//       <div className="App">
//           <header className="App-header">
//               <h1>React and flask</h1>
//               {/* Calling a data from setdata for showing */}
//               <p>{data.name}</p>
//               <p>{data.age}</p>
//               <p>{data.date}</p>
//               <p>{data.programming}</p>

//           </header>
//       </div>
//   );
// }

// export default App;
export default App;