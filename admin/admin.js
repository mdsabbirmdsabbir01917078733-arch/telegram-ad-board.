// 🔐 Admin Panel Logic
// Firebase app আগেই firebase.js থেকে initialize করা আছে

import { getDatabase, ref, onValue, update } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

/* =========================
   🔢 DASHBOARD STATS
========================= */

// Total Users
const usersRef = ref(db, "users");
onValue(usersRef, (snapshot) => {
  const data = snapshot.val() || {};
  document.getElementById("totalUsers").innerText =
    Object.keys(data).length;
});

// Total Earnings
const earningsRef = ref(db, "totalEarnings");
onValue(earningsRef, (snapshot) => {
  document.getElementById("totalEarnings").innerText =
    "৳" + (snapshot.val() || 0);
});

// Total Withdraw
const withdrawTotalRef = ref(db, "totalWithdraw");
onValue(withdrawTotalRef, (snapshot) => {
  document.getElementById("totalWithdraw").innerText =
    "৳" + (snapshot.val() || 0);
});

/* =========================
   💸 WITHDRAW REQUESTS
========================= */

const withdrawRef = ref(db, "withdrawRequests");
onValue(withdrawRef, (snapshot) => {
  const list = document.getElementById("withdrawList");
  list.innerHTML = "";

  let pendingCount = 0;

  snapshot.forEach((child) => {
    const w = child.val();
    const id = child.key;

    if (w.status === "pending") {
      pendingCount++;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${w.userId}</td>
        <td>৳${w.amount}</td>
        <td>${w.method}</td>
        <td>
          <button class="approve" onclick="approveWithdraw('${id}')">
            Approve
          </button>
          <button class="reject" onclick="rejectWithdraw('${id}')">
            Reject
          </button>
        </td>
      `;
      list.appendChild(row);
    }
  });

  document.getElementById("pendingWithdraw").innerText = pendingCount;

  if (pendingCount === 0) {
    list.innerHTML = `<tr><td colspan="4">No pending requests</td></tr>`;
  }
});

/* =========================
   ✅ APPROVE WITHDRAW
========================= */
window.approveWithdraw = function (id) {
  update(ref(db, "withdrawRequests/" + id), {
    status: "approved"
  });
  alert("Withdraw Approved ✅");
};

/* =========================
   ❌ REJECT WITHDRAW
========================= */
window.rejectWithdraw = function (id) {
  update(ref(db, "withdrawRequests/" + id), {
    status: "rejected"
  });
  alert("Withdraw Rejected ❌");
};
