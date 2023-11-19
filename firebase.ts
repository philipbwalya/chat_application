// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfYUoUeCzVzLf-JC2ORPWBT9DllTgkN9M",
  authDomain: "saas-chat-application.firebaseapp.com",
  projectId: "saas-chat-application",
  storageBucket: "saas-chat-application.appspot.com",
  messagingSenderId: "1042746970685",
  appId: "1:1042746970685:web:274d94e89886ca6f271054"
};

// was the app already initialized once?
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export {db, auth, functions};