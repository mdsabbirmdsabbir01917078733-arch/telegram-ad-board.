import { db } from './firebase.js';
import { doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Telegram User ID
const userId = Telegram.WebApp.initDataUnsafe.user.id.toString();
const userRef = doc(db, 'users', userId);

async function loadUser() {
  const snap = await getDoc(userRef);
  if (!snap.exists()) {
    await setDoc(userRef, {
      balance: 0,
      ads: 0,
      ref: 0
    });
  }
}
loadUser();

window.watchAd = async () => {
  await updateDoc(userRef, {
    ads: increment(1),
    balance: increment(1) // per ad earning ADMIN থেকে আসবে (future)
  });
  location.reload();
}

window.withdraw = async () => {
  alert('Withdraw request submitted');
}
