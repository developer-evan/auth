// firebase config key setup
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA3-wbiLfDDYfh1xgEcZVr2Z3i6iGm2xE",
  authDomain: "auth-3a5a2.firebaseapp.com",
  projectId: "auth-3a5a2",
  storageBucket: "auth-3a5a2.appspot.com",
  messagingSenderId: "276642125973",
  appId: "1:276642125973:web:301d0a6dd284d981ac639c",
  measurementId: "G-PLW0PEWEX0"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase};