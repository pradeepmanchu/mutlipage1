// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0aWkQt4bakWHSkIP0PFLBhTBmwP8vn0A",
  authDomain: "mutlipage-69992.firebaseapp.com",
  databaseURL: "https://mutlipage-69992-default-rtdb.firebaseio.com",
  projectId: "mutlipage-69992",
  storageBucket: "mutlipage-69992.appspot.com",
  messagingSenderId: "142935198940",
  appId: "1:142935198940:web:e2c6bc958e412bc5d63819"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 


var getName=localStorage.getItem("Username");


document.getElementById("Welcome").innerHTML="Hello "+getName;
var input1=document.getElementById("input1");
var button1=document.getElementById("button1");
var div1=document.getElementById("div1");

function addUser(){
    var userName=input1.value;
    firebase.database().ref("/").child(userName).update({
        purpose:"adding room name"
    });
   
    var newElement=document.createElement("h1");
    newElement.textContent=userName;
   
    div1.appendChild(newElement); 
    
    input1.value="";
}; 
