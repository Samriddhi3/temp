import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCrGRYFobzpv8vB8VIN1pFAVjLWZKv_WUk",
    authDomain: "my-articles-ecaf6.firebaseapp.com",
    projectId: "my-articles-ecaf6",
    storageBucket: "my-articles-ecaf6.appspot.com",
    messagingSenderId: "812926881582",
    appId: "1:812926881582:web:c3411153369182653534bf"
  };

  const app = initializeApp(firebaseConfig);
  
  export const storage = getStorage(app);
  export const db = getFirestore(app);