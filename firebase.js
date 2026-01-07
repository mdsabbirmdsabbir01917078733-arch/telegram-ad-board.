import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 🔴 নিজের Firebase config বসাবে
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "double-earning-bot.firebaseapp.com",
  databaseURL: "https://double-earning-bot-default-rtdb.firebaseio.com",
  projectId: "double-earning-bot",
  storageBucket: "double-earning-bot.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
window.auth = getAuth(app);
window.db = getDatabase(app);
window.ref = ref;
window.onValue = onValue;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.update = update;
