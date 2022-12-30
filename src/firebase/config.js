import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
// import { defineConfig, loadEnv } from 'vite'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Init Services
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()

//timestamp
const timeStamp = firebase.firestore.Timestamp

export {projectAuth, projectFirestore, timeStamp}