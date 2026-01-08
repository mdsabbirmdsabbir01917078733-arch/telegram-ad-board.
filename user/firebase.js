// Firebase Core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Your Firebase Config (তুমি যেটা দিয়েছো)
const firebaseConfig = {
  apiKey: "AIzaSyBNcV0FMuEvxgg6FFClJ5r7Xld4g3Z7x6U",
  authDomain: "double-earning-bot.firebaseapp.com",
  databaseURL: "https://double-earning-bot-default-rtdb.firebaseio.com",
  projectId: "double-earning-bot",
  storageBucket: "double-earning-bot.firebasestorage.app",
  messagingSenderId: "155076870534",
  appId: "1:155076870534:web:0023206fbb40f56aafac07",
};

// Init
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
