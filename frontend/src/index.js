import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ProviderLayer from './ProviderLayer';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyD1AAjeSYtmsdutaZUjLVlGbSvtFQUOwFI",
  authDomain: "penniless-pantry-c1691.firebaseapp.com",
  projectId: "penniless-pantry-c1691",
  storageBucket: "penniless-pantry-c1691.appspot.com",
  messagingSenderId: "482802176087",
  appId: "1:482802176087:web:6caf4ee142c4963edf5312"
};
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

