import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBH5gXw0OLqIziNmeDmJRiEG5uzmruhX98",
  authDomain: "disneyplus-clone-31718.firebaseapp.com",
  projectId: "disneyplus-clone-31718",
  storageBucket: "disneyplus-clone-31718.firebasestorage.app",
  messagingSenderId: "180367864055",
  appId: "1:180367864055:web:4b188832a61890c26ea3f2",
  measurementId: "G-CR8M37TPL9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
