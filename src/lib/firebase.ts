import { initializeApp } from "firebase/app";
import { getAuth, type User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpwXUCYA6OQHSYCSnZP2n1GRk9snSS4KU",
    authDomain: "fir-juanluis.firebaseapp.com",
    databaseURL: "https://fir-juanluis-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-juanluis",
    storageBucket: "fir-juanluis.firebasestorage.app",
    messagingSenderId: "979260114323",
    appId: "1:979260114323:web:cb49524a8ebe4874c95466"
  };
  

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export type { User };
