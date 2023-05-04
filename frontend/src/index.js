import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ProviderLayer from './ProviderLayer';

import { FirebaseAppProvider } from 'reactfire';

import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBj8Xl_9vjVugZ3FA6asXo_aWQbVSrnTOo",
  authDomain: "capstone-project-fc695.firebaseapp.com",
  projectId: "capstone-project-fc695",
  storageBucket: "capstone-project-fc695.appspot.com",
  messagingSenderId: "541299067363",
  appId: "1:541299067363:web:7af7cbb79aae2fda4238d6"
};



const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider  firebaseConfig={firebaseConfig}>
        <ProviderLayer />
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

