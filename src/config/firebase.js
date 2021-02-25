import firebase from 'firebase';
require('dotenv').config()

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(process.env.REACT_APP_apiKey)
const firebaseConfig = {
  apiKey: 'process.env.REACT_APP_apiKey',
  authDomain: process.env.REACT_APP_authDomain,
  projectId: "newlinkedinclone",
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

console.log(firebaseApp)

const db = firebaseApp.firestore();

const auth = firebase.auth();

console.log(auth)

export {db, auth};