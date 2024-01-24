import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyAZnzuL8aEm7UKhlK2MfDekPSdUx9fwKPw",
  authDomain: "proyectotienda-24213.firebaseapp.com",
  projectId: "proyectotienda-24213",
  storageBucket: "proyectotienda-24213.appspot.com",
  messagingSenderId: "643868018738",
  appId: "1:643868018738:web:ca3c247bcf1ff8fc5d942b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);