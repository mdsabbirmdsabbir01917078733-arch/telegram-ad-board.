import { db, DEFAULT_SETTINGS } from "./firebase.js";
import { ref, get, set, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export async function initUser(userId) {
  const userRef = ref(db, `users/${userId}`);
  const snap = await get(userRef);

  if (!snap.exists()) {
    await set(userRef, {
      balance: 0,
      totalEarn: 0,
      referCount: 0,
      todayAds: 0,
      lastAdDate: new Date().toDateString(),
      joinedAt: Date.now()
    });
  }
}

export async function watchAd(userId) {
  const userRef = ref(db, `users/${userId}`);
  const snap = await get(userRef);
  if (!snap.exists()) return;

  const user = snap.val();
  const today = new Date().toDateString();

  let todayAds = user.todayAds || 0;

  // reset daily ads if new day
  if (user.lastAdDate !== today) {
    todayAds = 0;
  }

  if (todayAds >= DEFAULT_SETTINGS.dailyAdLimit) {
    alert("আজকের Ad limit শেষ ❌");
    return;
  }

  await update(userRef, {
    balance: (user.balance || 0) + DEFAULT_SETTINGS.perAd,
    totalEarn: (user.totalEarn || 0) + DEFAULT_SETTINGS.perAd,
    todayAds: todayAds + 1,
    lastAdDate: today
  });
}
