import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;