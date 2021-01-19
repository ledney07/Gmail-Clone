import firebase from "firebase";
import "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCofabyaUAcngtNRbe2A2pp3r9f8kVl7hU",
  authDomain: "clone-565af.firebaseapp.com",
  projectId: "clone-565af",
  storageBucket: "clone-565af.appspot.com",
  messagingSenderId: "175034865625",
  appId: "1:175034865625:web:3352ea1ba7c58debbc6bc8",
  measurementId: "G-GB59Y157BY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
