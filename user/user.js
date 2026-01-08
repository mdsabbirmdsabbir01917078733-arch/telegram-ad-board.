import { db } from "../firebase.js";
import { ref, get, set, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// 🔹 Temporary User ID (Telegram later connect হবে)
const userId = "demo_user";

// UI elements
const balanceEl = document.getElementById("balance");
const adsEl = document.getElementById("ads");
const btn = document.getElementById("watchAdBtn");

// Firebase path
const userRef = ref(db, "users/" + userId);

// Load user data
get(userRef).then(snapshot => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    balanceEl.innerText = data.balance;
    adsEl.innerText = data.ads;
  } else {
    set(userRef, {
      balance: 0,
      ads: 0
    });
  }
});

// Watch Ad button
btn.addEventListener("click", () => {
  get(userRef).then(snapshot => {
    const data = snapshot.val();

    const newBalance = data.balance + 10;
    const newAds = data.ads + 1;

    update(userRef, {
      balance: newBalance,
      ads: newAds
    });

    balanceEl.innerText = newBalance;
    adsEl.innerText = newAds;

    alert("Ad watched! +10 balance");
  });
});
