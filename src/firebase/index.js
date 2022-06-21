
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyADxywxxvgaaY68-AbuyCeNFsYYDPZsmwQ",
  authDomain: "meal-47b11.firebaseapp.com",
  databaseURL: "https://meal-47b11-default-rtdb.firebaseio.com",
  projectId: "meal-47b11",
  storageBucket: "meal-47b11.appspot.com",
  messagingSenderId: "843819308227",
  appId: "1:843819308227:web:3553821b2fc8e323dcfe76"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

export { db, auth }
export default firebase