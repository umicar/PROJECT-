var firebaseConfig = {
      apiKey: "AIzaSyApFhmcZS0pIXQkcWiQDnxwJKaIOPe6ewM",
      authDomain: "proven-impact-296010.firebaseapp.com",
      databaseURL: "https://proven-impact-296010-default-rtdb.firebaseio.com",
      projectId: "proven-impact-296010",
      storageBucket: "proven-impact-296010.appspot.com",
      messagingSenderId: "103138527656",
      appId: "1:103138527656:web:60c04e53dd53715c43f59d",
      measurementId: "G-MYH31F0H80"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("msg").value = "";
}