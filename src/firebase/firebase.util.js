import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyDlxnIbanhnWmCD5zxFy-B5z8dcF7LaA-k",
    authDomain: "ecomm-fdf4c.firebaseapp.com",
    databaseURL: "https://ecomm-fdf4c.firebaseio.com",
    projectId: "ecomm-fdf4c",
    storageBucket: "ecomm-fdf4c.appspot.com",
    messagingSenderId: "991760146654",
    appId: "1:991760146654:web:d5d0c64807d0baa269e24f",
    measurementId: "G-X51GLLF2ZJ"
  };

  firebase.initializeApp(config)
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase