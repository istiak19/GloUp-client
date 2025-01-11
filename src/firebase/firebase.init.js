// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2w7x8MipLIP5_2Ho5ELa9rE9yGJucOSU",
  authDomain: "gloup-dbca1.firebaseapp.com",
  projectId: "gloup-dbca1",
  storageBucket: "gloup-dbca1.firebasestorage.app",
  messagingSenderId: "362842707257",
  appId: "1:362842707257:web:f4cf070b1118a854b484e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;