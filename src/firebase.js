//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCWklNvoEoZZ3e_tlkAg-bhDU-gGUSw1iU",
  authDomain: "project-50331.firebaseapp.com",
  projectId: "project-50331",
  storageBucket: "project-50331.appspot.com",
  messagingSenderId: "59765007315",
  appId: "1:59765007315:web:d431fdc56e119fc0ae4526"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };