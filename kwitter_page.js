//YOUR FIREBASE LINKS
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

   username= localStorage.getItem("username")
   room_name=localStorage.getItem("roomname")


   function Send(){
message=document.getElementById("msg").value
firebase.database().ref(room_name).push({
USERNAME:username,
MESSAGE:message,
LIKE:0
})
document.getElementById("msg").value=""


   }


    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
//Code for creating tags for username//
user=message_data["USERNAME"]
console.log(user)
user_tag=`<h4>${user} <img src="tick.png" class="user_tick"></h4>`
//code for message tag
message=message_data["MESSAGE"]
console.log(message)
message_tag=`<h4 class="message_h4" > ${message}</h4>`
//Code for button tag
like=message_data["LIKE"]
console.log(like)
button_tag=`<button class="btn btn-success" id=${firebase_message_id} value=${like} onclick= update(this.id)><span class="glyphicon glyphicon-thumbs-up"></span> LIKE: ${like}</button><hr>`





document.getElementById("output").innerHTML+=user_tag+message_tag+button_tag

//End code
      } });  }); }
getData();

function Logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location="index.html"
      }
function update(button_id) {
      console.log(button_id)
   getLikes= document.getElementById(button_id).value
   updatedLikes= Number(getLikes)+1
 console.log(updatedLikes)
 firebase.database().ref(room_name).child(button_id).update({
       LIKE: updatedLikes
 })
}