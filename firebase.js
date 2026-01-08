// firebase.js (GLOBAL - Admin + User)

// Firebase SDK v9 (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// 🔥 তোমার Firebase Web App Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNcV0FMuEvxgg6FFClJ5r7Xld4g3Z7x6U",
  authDomain: "double-earning-bot.firebaseapp.com",
  databaseURL: "https://double-earning-bot-default-rtdb.firebaseio.com",
  projectId: "double-earning-bot",
  storageBucket: "double-earning-bot.firebasestorage.app",
  messagingSenderId: "155076870534",
  appId: "1:155076870534:web:0023206fbb40f56aafac07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
