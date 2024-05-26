// firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9RZx5TtgELdmPE5_jcGPOq8TE5P3_Re0",
    authDomain: "rahatkhanname-a4a4c.firebaseapp.com",
    projectId: "rahatkhanname-a4a4c",
    storageBucket: "rahatkhanname-a4a4c.appspot.com",
    messagingSenderId: "513094662946",
    appId: "1:513094662946:web:8376c2bb11cd32f635c37b",
    measurementId: "G-5S609PDYC6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, serverTimestamp, collection, addDoc };