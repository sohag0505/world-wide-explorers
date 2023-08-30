// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcckOLYNM_WgvR4Dqmy0GPwHWkg4sl9bM",
  authDomain: "travelling-a8609.firebaseapp.com",
  projectId: "travelling-a8609",
  storageBucket: "travelling-a8609.appspot.com",
  messagingSenderId: "837349282025",
  appId: "1:837349282025:web:9d5b9c9b33a3e389612078",
  measurementId: "G-P658G8HRMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
