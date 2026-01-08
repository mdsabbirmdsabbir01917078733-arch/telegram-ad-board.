import { db } from "../firebase.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const usersDiv = document.getElementById("users");

const usersRef = ref(db, "users");

onValue(usersRef, snapshot => {
  usersDiv.innerHTML = "";
  snapshot.forEach(child => {
    const u = child.val();
    usersDiv.innerHTML += `
      <p>
        User: ${child.key}<br>
        Balance: ${u.balance}<br>
        Ads: ${u.ads}
      </p>
      <hr>
    `;
  });
});
