import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "weloop.firebaseapp.com",
  projectId: "weloop-local",
  storageBucket: "weloop.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);