import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyA9_MxScgVLAkcwCu_NxQAKSIfoCO76YTQ",
    authDomain: "wahussein-dd3d5.firebaseapp.com",
    projectId: "wahussein-dd3d5",
    storageBucket: "wahussein-dd3d5.firebasestorage.app",
    messagingSenderId: "1066645608715",
    appId: "1:1066645608715:web:c43ac21e7c2f08d88eea0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);