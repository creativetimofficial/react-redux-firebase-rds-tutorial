import * as firebase from "firebase";
// replace this variable, with your own config variable
// from your firebase project
var config = {
  apiKey: "YOUR_KEY_HERE",
  authDomain: "YOUR_DOMAIN_HERE",
  databaseURL: "YOUR_URL_HERE",
  projectId: "YOUR_ID_HERE",
  storageBucket: "YOUR_BUCKET_HERE",
  messagingSenderId: "YOUR_ID_HERE"
};
let firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;
