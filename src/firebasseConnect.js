import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCxG1wGMyAhDPQZ7SMX7S_qdhMF9VmaI2M",
    authDomain: "curso-5a4ae.firebaseapp.com",
    projectId: "curso-5a4ae",
    storageBucket: "curso-5a4ae.appspot.com",
    messagingSenderId: "162799104945",
    appId: "1:162799104945:web:61e7586c1f8748fc344390",
    measurementId: "G-DYDQWTJCGB"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export{db, auth};