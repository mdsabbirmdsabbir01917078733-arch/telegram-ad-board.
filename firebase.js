// ================================
// 🔥 FINAL SHARED FIREBASE CONFIG
// ================================

// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 🔐 Firebase Configuration (YOUR REAL PROJECT)
const firebaseConfig = {
  apiKey: "AIzaSyBNcV0FMuEvxgg6FFClJ5r7Xld4g3Z7x6U",
  authDomain: "double-earning-bot.firebaseapp.com",
  databaseURL: "https://double-earning-bot-default-rtdb.firebaseio.com",
  projectId: "double-earning-bot",
  storageBucket: "double-earning-bot.firebasestorage.app",
  messagingSenderId: "155076870534",
  appId: "1:155076870534:web:0023206fbb40f56aafac07",
  measurementId: "G-HKT35XCSYH"
};

// 🚀 Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// ================================
// 👑 ADMIN CONFIG (FIXED)
// ================================
export const ADMIN_ID = "8308715957";

// ================================
// ⚙️ DEFAULT SETTINGS (Auto create)
// ================================
export const DEFAULT_SETTINGS = {
  perAd: 1,
  perRefer: 20,
  minWithdraw: 1500,
  dailyAdLimit: 100,
  withdrawMethods: ["bkash", "nagad"],
  telegramOnly: true
};

// ================================
// 🛠️ HELPERS
// ================================
export {
  ref,
  set,
  get,
  update,
  push,
  onValue
};
