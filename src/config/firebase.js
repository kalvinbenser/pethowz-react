import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyAlCo1n1jNYbvD0DEAjKepE27FcdZqkfmY",

    authDomain: "pethouse-otp.firebaseapp.com",
  
    databaseURL: "https://pethouse-otp-default-rtdb.firebaseio.com",
  
    projectId: "pethouse-otp",
  
    storageBucket: "pethouse-otp.appspot.com",
  
    messagingSenderId: "589343176814",
  
    appId: "1:589343176814:web:5e6e291ee9ab25be6e0e7f",
  
    measurementId: "G-4VQD1X0NDR"
  
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};
