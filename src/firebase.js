import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBedMpisvOB2nGsAzfmdfKvI1b8-j74maE",
    authDomain: "clone-f4f6a.firebaseapp.com",
    projectId: "clone-f4f6a",
    storageBucket: "clone-f4f6a.appspot.com",
    messagingSenderId: "611907407999",
    appId: "1:611907407999:web:5d52ec2bcf3c08b1adef4a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth};