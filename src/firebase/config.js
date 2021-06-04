import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA6MI1vOWxuGtms_UQATLBZN8i-vA_y7K4",
    authDomain: "olx-app-1b917.firebaseapp.com",
    projectId: "olx-app-1b917",
    storageBucket: "olx-app-1b917.appspot.com",
    messagingSenderId: "542750523286",
    appId: "1:542750523286:web:c8eff498c17f6823bb67b7",
    measurementId: "G-JQEHJSZPEX"
  };

  export default firebase.initializeApp(firebaseConfig)

