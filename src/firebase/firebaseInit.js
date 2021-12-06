import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8HcN85_SEBg4mctY7a6A_ufi-EKZbVHE",
  authDomain: "vueblog-aa931.firebaseapp.com",
  projectId: "vueblog-aa931",
  storageBucket: "vueblog-aa931.appspot.com",
  messagingSenderId: "835218818704",
  appId: "1:835218818704:web:e882371d6e72d996493a15",
  measurementId: "G-CGWYJ4897S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { timeStamp };
export default firebaseApp.firestore();
