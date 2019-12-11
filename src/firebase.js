import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD7sPfg5pFe0ox3hZ5fS7UGKnKWqBK_pPE",
  authDomain: "react-slack-clone-ts.firebaseapp.com",
  databaseURL: "https://react-slack-clone-ts.firebaseio.com",
  projectId: "react-slack-clone-ts",
  storageBucket: "react-slack-clone-ts.appspot.com",
  messagingSenderId: "457882852132",
  appId: "1:457882852132:web:a5f8b7bd3f49d00d89f1b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;