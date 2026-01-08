// user/user.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
  update,
  push
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 🔥 Firebase config (firebase.js থেকে same project)
import { firebaseConfig } from "./firebase.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 🆔 Temporary user id (later Telegram ID বসবে)
const userId = "demo_user_001";

// 📌 HTML Elements
const balanceEl = document.getElementById("userBalance");
const refEl = document.getElementById("userRef");
const adsEl = document.getElementById("adsWatched");
const withdrawnEl = document.getElementById("withdrawn");
const refLinkEl = document.getElementById("refLink");

// 🔹 Load user data
async function loadUser() {
  const userRef = ref(db, "users/" + userId);
  const snap = await get(userRef);

  if (!snap.exists()) {
    await set(userRef, {
      balance: 0,
      referrals: 0,
      adsWatched: 0,
      withdrawn: 0
    });
    return loadUser();
  }

  const data = snap.val();
  balanceEl.innerText = data.balance;
  refEl.innerText = data.referrals;
  adsEl.innerText = data.adsWatched;
  withdrawnEl.innerText = data.withdrawn;

  refLinkEl.value = `${location.origin}/user/?ref=${userId}`;
}

loadUser();

// 📺 Watch Ad & Earn
window.watchAd = async function () {
  const userRef = ref(db, "users/" + userId);
  const snap = await get(userRef);
  const data = snap.val();

  const newBalance = data.balance + 10; // per ad 10 taka
  const newAds = data.adsWatched + 1;

  await update(userRef, {
    balance: newBalance,
    adsWatched: newAds
  });

  alert("✅ Ad watched! 10 টাকা যোগ হয়েছে");
  loadUser();
};

// 🏧 Withdraw Request
window.requestWithdraw = async function () {
  const amount = Number(document.getElementById("withdrawAmount").value);
  const method = document.getElementById("withdrawMethod").value;
  const number = document.getElementById("withdrawNumber").value;

  if (!amount || !method || !number) {
    alert("❌ সব তথ্য পূরণ করো");
    return;
  }

  const userRef = ref(db, "users/" + userId);
  const snap = await get(userRef);
  const data = snap.val();

  if (amount > data.balance) {
    alert("❌ পর্যাপ্ত ব্যালেন্স নেই");
    return;
  }

  // save withdraw request
  await push(ref(db, "withdrawRequests"), {
    userId,
    amount,
    method,
    number,
    status: "pending",
    time: Date.now()
  });

  await update(userRef, {
    balance: data.balance - amount
  });

  alert("✅ Withdraw request sent");
  loadUser();
};

// 🔗 Copy referral link
window.copyRef = function () {
  refLinkEl.select();
  document.execCommand("copy");
  alert("✅ Referral link copied");
};
