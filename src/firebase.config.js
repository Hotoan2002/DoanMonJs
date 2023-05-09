import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAmNUeEw1DVb77QcafaSnMq0OOni__zpNw",
  authDomain: "maltimart-88ba8.firebaseapp.com",
  projectId: "maltimart-88ba8",
  storageBucket: "maltimart-88ba8.appspot.com",
  messagingSenderId: "592366298478",
  appId: "1:592366298478:web:e9fe0a45fb9bee3bf8cd7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
