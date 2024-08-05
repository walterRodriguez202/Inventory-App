// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfpzfSyLaUQuDeiBGQTedegKi91HKa3PQ",
  authDomain: "inventory-app-3633b.firebaseapp.com",
  projectId: "inventory-app-3633b",
  storageBucket: "inventory-app-3633b.appspot.com",
  messagingSenderId: "583682010672",
  appId: "1:583682010672:web:cc34c1636a0f3f0ecf07f5",
  measurementId: "G-KF92KG9H2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}