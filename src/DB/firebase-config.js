// Import the functions you need from the SDKs you need

import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
const { initializeApp, applicationDefault, cert } = require("firebase/app");
const { getFirestore, Timestamp, FieldValue } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDYS-nDj22tkgg6z1i-4cs4fr_zciyBGkQ",
  authDomain: "kongensweb-125af.firebaseapp.com",
  databaseURL: "https://kongensweb-125af-default-rtdb.firebaseio.com",
  projectId: "kongensweb-125af",
  storageBucket: "kongensweb-125af.appspot.com",
  messagingSenderId: "398970920970",
  appId: "1:398970920970:web:0ff9b665e3e96658ac3ff3",
  measurementId: "G-1MZFS2HS0C",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
