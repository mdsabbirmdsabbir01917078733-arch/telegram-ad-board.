const loginBox = document.getElementById("loginBox");
const dashboard = document.getElementById("dashboard");

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

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
    const users = snap.val() || {};
    document.getElementById("totalUsers").innerText = Object.keys(users).length;

    let earnings = 0;
    Object.values(users).forEach(u => earnings += u.totalEarned || 0);
    document.getElementById("totalEarnings").innerText = earnings;
  });

  onValue(ref(db, "withdrawRequests"), snap => {
    const data = snap.val() || {};
    const list = document.getElementById("withdrawList");
    list.innerHTML = "";

    Object.entries(data).forEach(([id, w]) => {
      if (w.status === "pending") {
        const li = document.createElement("li");
        li.innerHTML = `
          ${w.userId} - ৳${w.amount}
          <button onclick="approve('${id}')">Approve</button>
        `;
        list.appendChild(li);
      }
    });
  });
}

window.approve = function (id) {
  update(ref(db, "withdrawRequests/" + id), {
    status: "approved"
  });
};
