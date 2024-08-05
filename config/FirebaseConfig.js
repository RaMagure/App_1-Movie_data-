// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTSXhcfrdI3h5jOG2H_1hi33HDYtJipwg",
  authDomain: "app1-41967.firebaseapp.com",
  projectId: "app1-41967",
  storageBucket: "app1-41967.appspot.com",
  messagingSenderId: "41949962019",
  appId: "1:41949962019:web:ba7b827a3262c5eb2af696",
  measurementId: "G-SSXLG6W8H0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);