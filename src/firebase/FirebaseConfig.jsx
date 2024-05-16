// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN2IjoE4jhPXSiL9IlPn9QaAprQCdDQLg",
    authDomain: "react-contact-dabd2.firebaseapp.com",
    databaseURL: "https://react-contact-dabd2-default-rtdb.firebaseio.com",
    projectId: "react-contact-dabd2",
    storageBucket: "react-contact-dabd2.appspot.com",
    messagingSenderId: "699426357246",
    appId: "1:699426357246:web:720518ddea75ea9f45caaf",
    measurementId: "G-H5ZZWVPPK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }