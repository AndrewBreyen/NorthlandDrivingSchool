// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "yourAPIKey",
  authDomain: "your-firebase-instance.firebaseapp.com",
  projectId: "your-firebase-instance",
  storageBucket: "your-firebase-instance.appspot.com",
  messagingSenderId: "yourMessagingSenderID",
  appId: "yourAppID",
  measurementId: "G-yourGoogleAnalyticsID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

