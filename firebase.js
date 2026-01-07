<script type="module">
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

window.login = function () {
  const email = email.value;
  const password = password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      loginBox.classList.add("hidden");
      dashboard.classList.remove("hidden");
      loadData();
    })
    .catch(() => alert("Login failed"));
};

function loadData() {
  onValue(ref(db, "users"), snap => {
    let users = snap.val() || {};
    totalUsers.innerText = Object.keys(users).length;

    let earnings = 0;
    Object.values(users).forEach(u => earnings += u.totalEarned || 0);
    totalEarnings.innerText = earnings;
  });

  onValue(ref(db, "withdrawRequests"), snap => {
    let data = snap.val() || {};
    withdrawList.innerHTML = "";
    let totalW = 0;

    Object.entries(data).forEach(([id, w]) => {
      totalW += w.amount || 0;
      if (w.status === "pending") {
        withdrawList.innerHTML += `
          <div class="card">
            ৳${w.amount} - ${w.method}
            <button onclick="approve('${id}')">Approve</button>
            <button onclick="reject('${id}')">Reject</button>
          </div>
        `;
      }
    });
    totalWithdraw.innerText = totalW;
  });

  onValue(ref(db, "settings"), snap => {
    const s = snap.val() || {};
    botToken.value = s.telegramBotToken || "";
    zoneId.value = s.monetagZoneId || "";
    withdrawLimit.value = s.withdrawLimit || "";
  });
}

window.saveSettings = function () {
  update(ref(db, "settings"), {
    telegramBotToken: botToken.value,
    monetagZoneId: zoneId.value,
    withdrawLimit: Number(withdrawLimit.value)
  });
  alert("Saved");
};

window.approve = id =>
  update(ref(db, "withdrawRequests/" + id), { status: "approved" });

window.reject = id =>
  update(ref(db, "withdrawRequests/" + id), { status: "rejected" });
</script>
