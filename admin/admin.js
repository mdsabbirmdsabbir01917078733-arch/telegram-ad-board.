import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const ADMIN_ID = "YOUR_TELEGRAM_ID"; // 👉 এখানে নিজের Telegram ID বসাবে

async function loadStats() {
  const snap = await getDocs(collection(db, 'users'));
  let users = snap.size;
  let totalBalance = 0;

  snap.forEach(d => totalBalance += d.data().balance);

  document.getElementById('stats').innerHTML = `
    Users: ${users}<br>
    Total Balance: ${totalBalance}
  `;
}
loadStats();
