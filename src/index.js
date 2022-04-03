import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';
const firebaseConfig = {
  apiKey: "AIzaSyDYS-nDj22tkgg6z1i-4cs4fr_zciyBGkQ",
  authDomain: "kongensweb-125af.firebaseapp.com",
  projectId: "kongensweb-125af",
  storageBucket: "kongensweb-125af.appspot.com",
  messagingSenderId: "398970920970",
  appId: "1:398970920970:web:0ff9b665e3e96658ac3ff3",
  measurementId: "G-1MZFS2HS0C"
};


ReactDOM.render(
    <App />
,
  document.getElementById('root')
);


