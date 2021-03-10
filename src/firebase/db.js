import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABIrfPCS-nTgU1POLPNv5NaXLOdpC__YI",
    authDomain: "to-do-46957.firebaseapp.com",
    databaseURL: "https://to-do-46957-default-rtdb.firebaseio.com",
    projectId: "to-do-46957",
    storageBucket: "to-do-46957.appspot.com",
    messagingSenderId: "252074261113",
    appId: "1:252074261113:web:cb6a1c31be49db8887b2a8"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();
