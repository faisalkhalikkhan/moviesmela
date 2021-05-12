import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAqiYQRQ746rMrB0PqdgV3LXgzITvUfvsA",
    authDomain: "moviesmela-dbbcf.firebaseapp.com",
    projectId: "moviesmela-dbbcf",
    storageBucket: "moviesmela-dbbcf.appspot.com",
    messagingSenderId: "206940907268",
    appId: "1:206940907268:web:c2488214a5ac2b31c99251",
    measurementId: "G-VE3BXEK7MM"
  };
  // Initialize Firebase
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
