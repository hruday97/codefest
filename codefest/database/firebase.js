// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyqJNxIZ5v75mRiDKalQmYHvqr5eARi-w",
    authDomain: "pcf22-19365.firebaseapp.com",
    projectId: "pcf22-19365",
    storageBucket: "pcf22-19365.appspot.com",
    messagingSenderId: "495160869491",
    appId: "1:495160869491:web:4cc78a33b8f35022c86006"
  };

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app=firebase.app()
}

const auth =firebase.auth()

export {auth};