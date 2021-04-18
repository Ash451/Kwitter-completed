var firebaseConfig = {
      apiKey: "AIzaSyCUUnp2GGSfh4ck0VUY7Q8UsuXVrQjv-Oc",
      authDomain: "kwitter-6f04c.firebaseapp.com",
      databaseURL: "https://kwitter-6f04c-default-rtdb.firebaseio.com",
      projectId: "kwitter-6f04c",
      storageBucket: "kwitter-6f04c.appspot.com",
      messagingSenderId: "609780641956",
      appId: "1:609780641956:web:f8b1f2b60c3fc54e497631"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username= localStorage.getItem("username")
document.getElementById("welcome").innerHTML="Welcome "+username

function addRoom(){
      roomname=document.getElementById("roomInput").value
      firebase.database().ref("/").child(roomname).update({
            Status:"Room Name Added"
      })
      localStorage.setItem("roomname", roomname)
      window.location="kwitter_page.html"

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names)
roomTag=`<div class="room_name" id=${Room_names} onclick="goToRoom(this.id)">${Room_names}</div><hr>`
document.getElementById("output").innerHTML+=roomTag

      //End code
      });});}

getData();

function goToRoom(room){
      localStorage.setItem("roomname", room)
      window.location="kwitter_page.html"
}

function Logout(){
localStorage.removeItem("username")
localStorage.removeItem("roomname")
window.location="index.html"
}
