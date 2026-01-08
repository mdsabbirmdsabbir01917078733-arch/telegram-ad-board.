<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>

<script>
  // 🔥 Firebase Configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBNcV0FMuEvxgg6FFClJ5r7Xld4g3Z7x6U",
    authDomain: "double-earning-bot.firebaseapp.com",
    databaseURL: "https://double-earning-bot-default-rtdb.firebaseio.com",
    projectId: "double-earning-bot",
    storageBucket: "double-earning-bot.firebasestorage.app",
    messagingSenderId: "155076870534",
    appId: "1:155076870534:web:0023206fbb40f56aafac07"
  };

  // 🔥 Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // 🔥 Database reference
  const db = firebase.database();
</script>
