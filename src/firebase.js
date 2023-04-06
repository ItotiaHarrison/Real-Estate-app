// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzMCPxvILX7O-m4AGKy2M6_U4AzKTVi_Y",
  authDomain: "real-estate-react-25df8.firebaseapp.com",
  projectId: "real-estate-react-25df8",
  storageBucket: "real-estate-react-25df8.appspot.com",
  messagingSenderId: "142556388773",
  appId: "1:142556388773:web:f6a4543c1de32f75245c4c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()