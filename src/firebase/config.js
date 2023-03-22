// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt6fKJz8Us850emA8U_qUsl3cMf4eeSY0",
  authDomain: "medicare-daa7f.firebaseapp.com",
  projectId: "medicare-daa7f",
  storageBucket: "medicare-daa7f.appspot.com",
  messagingSenderId: "269045398881",
  appId: "1:269045398881:web:0a2e76e71fbb293e625920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;