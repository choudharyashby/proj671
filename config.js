import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDDGev0nAj5ubKTc-WRS8NVqFO5mQXCHok",
  authDomain: "proj67-f4da1.firebaseapp.com",
  projectId: "proj67-f4da1",
  storageBucket: "proj67-f4da1.appspot.com",
  messagingSenderId: "1026648185205",
  appId: "1:1026648185205:web:14b89b1c30e39a144d5b3c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();