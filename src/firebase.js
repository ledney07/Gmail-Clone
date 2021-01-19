import firebase from "firebase";
import "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIz*******************************",
  authDomain: "clone-565af.firebaseapp.com",
  projectId: "clone-565af",
  storageBucket: "c>>>>>>>>>>>>>>>>>>>>",
  messagingSenderId: "************",
  appId: "1:17*****************************",
  measurementId: ">>>>>>>>>>>>>>>>>>",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
