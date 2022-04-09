import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const database = fb.initializeApp({
  apiKey: "AIzaSyBgjpvfZtfAEg0O03G9FPyQuOlI-Zc9poM",
  authDomain: "cypress-workshop-todoist.firebaseapp.com",
  databaseURL: "https://cypress-workshop-todoist-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cypress-workshop-todoist",
  storageBucket: "cypress-workshop-todoist.appspot.com",
  messagingSenderId: "642702710348",
  appId: "1:642702710348:web:54a3e3f196fb7e4a4c46e9",
});

export default database;
