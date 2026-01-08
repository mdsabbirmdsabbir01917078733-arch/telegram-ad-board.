// Telegram
const tg = window.Telegram.WebApp;
tg.ready();

// Firebase
const auth = firebase.auth();
const db = firebase.database();

let uid = null;
let userRef = null;

// Login detect
auth.onAuthStateChanged(user => {
  if (user) {
    uid = user.uid;
    userRef = db.ref("users/" + uid);

    // First time create user
    userRef.once("value", snap => {
      if (!snap.exists()) {
        userRef.set({
          balance: 0,
          adsWatched: 0,
          createdAt: Date.now()
        });
      }
    });

    // Live update UI
    userRef.on("value", snap => {
      const data = snap.val();
      if (!data) return;

      document.getElementById("balance").innerText = data.balance;
      document.getElementById("adsWatched").innerText = data.adsWatched;
    });
  }
});

// Watch Ad
document.getElementById("watchAdBtn").addEventListener("click", () => {

  // Fake ad (later real ad)
  alert("✅ Ad Finished");

  if (!userRef) return;

  userRef.transaction(data => {
    if (data) {
      data.adsWatched += 1;
      data.balance += 10;
    }
    return data;
  });

});
