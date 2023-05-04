import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
    apiKey: "AIzaSyBj8Xl_9vjVugZ3FA6asXo_aWQbVSrnTOo",
    authDomain: "capstone-project-fc695.firebaseapp.com",
    projectId: "capstone-project-fc695",
    storageBucket: "capstone-project-fc695.appspot.com",
    messagingSenderId: "541299067363",
    appId: "1:541299067363:web:7af7cbb79aae2fda4238d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);