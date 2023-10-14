// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtlQ3hMaKNpL_Q4528cQqd8kKfjq6FCJE",
  authDomain: "shlee-web.firebaseapp.com",
  databaseURL: "https://shlee-web-default-rtdb.firebaseio.com",
  projectId: "shlee-web",
  storageBucket: "shlee-web.appspot.com",
  messagingSenderId: "995977616183",
  appId: "1:995977616183:web:705214005713e3927dd8b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);