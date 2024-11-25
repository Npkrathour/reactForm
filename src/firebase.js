
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8Xj870HCxfKIO7XzNV4i0tZntceLV3EQ",
  authDomain: "reactform-9cdc0.firebaseapp.com",
  projectId: "reactform-9cdc0",
  storageBucket: "reactform-9cdc0.firebasestorage.app",
  messagingSenderId: "735223016510",
  appId: "1:735223016510:web:f020c660695949dc9cb56f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
