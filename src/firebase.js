
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA0gP0jk4LWT7iHLWdL2QnEVdS6QuZ0x5I",
    authDomain: "portfolio-1cfdd.firebaseapp.com",
    projectId: "portfolio-1cfdd",
    storageBucket: "portfolio-1cfdd.appspot.com",
    messagingSenderId: "765763597060",
    appId: "1:765763597060:web:67e5791b42e439e62b5651",
    measurementId: "G-97Y117H72G"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;