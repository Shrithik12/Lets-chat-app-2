// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaAdF-F-zh1eArDcZbTJAapJ9u0bovoKw",
  authDomain: "lets-chat-6e62a.firebaseapp.com",
  projectId: "lets-chat-6e62a",
  storageBucket: "lets-chat-6e62a.appspot.com",
  messagingSenderId: "138258497025",
  appId: "1:138258497025:web:897793ea62041be8db8a00",
  measurementId: "G-QVEZ5LQH9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase

firebase.initializeApp(firebaseConfig);


      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

      function addRoom(){

            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "chat_room.html";
      }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
     

      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "chat_room.html"

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location="index.html";
}



