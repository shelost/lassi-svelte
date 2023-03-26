import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALA5S3lzsbE9GW1gf5BVNGhw61_SprPRs",
    authDomain: "lassi-app-db.firebaseapp.com",
    projectId: "lassi-app-db",
    storageBucket: "lassi-app-db.appspot.com",
    messagingSenderId: "140166281430",
    appId: "1:140166281430:web:22d971671c935e8ec77177",
    measurementId: "G-EREYWZHNHE"
};

console.log('4e54e')
console.log(firebase)
console.log(firebase.auth)
console.log(firebase.firestore)

const app = firebase.initializeApp(firebaseConfig);


export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)

