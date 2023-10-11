// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5e_cSfsO5QGfPzHljueCV_LvISa_otNs",
  authDomain: "netflop-clone.firebaseapp.com",
  projectId: "netflop-clone",
  storageBucket: "netflop-clone.appspot.com",
  messagingSenderId: "2711236691",
  appId: "1:2711236691:web:d701086647cbcd42c096a6"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
