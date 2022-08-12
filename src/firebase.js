import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDVtqK1xxyU7UdJ8B2kBaNSPOdom-JMOu0",
  authDomain: "clone-861e9.firebaseapp.com",
  projectId: "clone-861e9",
  storageBucket: "clone-861e9.appspot.com",
  messagingSenderId: "637498604339",
  appId: "1:637498604339:web:b8b714f027ffef0f495c46"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };