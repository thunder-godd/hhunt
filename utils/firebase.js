// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCsx9v5k069FYFf0g4g5zsydScBqdlReLE",
	authDomain: "househunters-d9361.firebaseapp.com",
	projectId: "househunters-d9361",
	storageBucket: "househunters-d9361.appspot.com",
	messagingSenderId: "1023599326109",
	appId: "1:1023599326109:web:802bf7dd1401a9a7223574",
};

// Initialize Firebase
// if (!firebase.apps.length) {
// 	firebase.initializeApp(firebaseConfig);
// }

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
