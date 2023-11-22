import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDEzC5EM7PLxl4YYcIXskgNGi9qR5VYHXo",
  authDomain: "hackcloud-686ed.firebaseapp.com",
  databaseURL:
    "https://hackcloud-686ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hackcloud-686ed",
  storageBucket: "hackcloud-686ed.appspot.com",
  messagingSenderId: "450059260437",
  appId: "1:450059260437:web:4773a62ef1a896a708b41c",
  measurementId: "G-15PTTKCHVS",
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
