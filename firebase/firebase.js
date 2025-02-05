import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAqI0RQuQ7DWQfihHa6Azqn6NE61vrZPFw",
  authDomain: "r-2-js.firebaseapp.com",
  projectId: "r-2-js",
  storageBucket: "r-2-js.firebasestorage.app",
  messagingSenderId: "152929090737",
  appId: "1:152929090737:web:7f264b4b37b6fd2302b690",
  measurementId: "G-N4GZWWKTMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // intialisaing firebase authentication

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
