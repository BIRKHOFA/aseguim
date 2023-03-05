import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCAJB4S1-As3-A3tzpDqbzGcoY2JpGhMGk",
  authDomain: "aseguimmohammedia-b61c1.firebaseapp.com",
  projectId: "aseguimmohammedia-b61c1",
  storageBucket: "aseguimmohammedia-b61c1.appspot.com",
  messagingSenderId: "974175506970",
  appId: "1:974175506970:web:4f2af9e338712624afb7a3",
  measurementId: "G-1Y0Z1J10R2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
