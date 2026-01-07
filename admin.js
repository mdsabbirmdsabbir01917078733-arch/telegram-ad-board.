<!DOCTYPE html>
<html>
<head>
  <title>Double Earning Bot – Admin Panel</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container" id="loginBox">
  <h2>🔐 Admin Login</h2>
  <input id="email" placeholder="Admin Email">
  <input id="password" type="password" placeholder="Password">
  <button onclick="login()">Login</button>
</div>

<div class="container hidden" id="dashboard">
  <h2>📊 Admin Dashboard</h2>

  <div class="card">👥 Total Users: <span id="totalUsers">0</span></div>
  <div class="card">💰 Total Earnings: ৳ <span id="totalEarnings">0</span></div>
  <div class="card">💸 Total Withdraw: ৳ <span id="totalWithdraw">0</span></div>

  <div class="card">
    <h3>⚙️ Settings</h3>
    <input id="botToken" placeholder="Telegram Bot Token">
    <input id="zoneId" placeholder="Monetag Zone ID">
    <input id="withdrawLimit" placeholder="Withdraw Limit">
    <button onclick="saveSettings()">Save</button>
  </div>

  <div class="card">
    <h3>⏳ Withdraw Requests</h3>
    <div id="withdrawList"></div>
  </div>
</div>

<script src="firebase.js"></script>
<script src="admin.js"></script>
</body>
</html>
