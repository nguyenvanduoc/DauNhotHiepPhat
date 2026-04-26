import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyBsBGGFTWYw9o_oq_tG-JAuA8HYokrPUjc",
    authDomain: "daunhothiepphat-8fda9.firebaseapp.com",
    projectId: "daunhothiepphat-8fda9",
    storageBucket: "daunhothiepphat-8fda9.firebasestorage.app",
    messagingSenderId: "295110684225",
    appId: "1:295110684225:web:a8231e60be9050734b20c0",
    measurementId: "G-ZFJDDDEBET"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
