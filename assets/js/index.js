// Initialize Firebase
var config = {
    apiKey: "AIzaSyAnjC7ValpNMtt5hZ5kAWV5tTAJ3QNxXxc",
    authDomain: "urja-2018.firebaseapp.com",
    databaseURL: "https://urja-2018.firebaseio.com",
    projectId: "urja-2018",
    storageBucket: "urja-2018.appspot.com",
    messagingSenderId: "792644849697"
};
firebase.initializeApp(config);

//Reference Message Collection
var messageRef = firebase.database().ref('messages');

//Listen for Contact Form
document.getElementById('contact').addEventListener('submit', submitForm);

//Submit Form
 function submitForm(e) {
     e.preventDefault();

     //Get Values
     var name = getInputVal('conName');
     var email = getInputVal('conEmail');
     var message = getInputVal('conMessage');

     //Save Message
     saveMessage(name, email, message);

     //Show Alert
     document.querySelector('.alert').style.display = 'block';

     //Hide alert after 3 seconds
     setTimeout(function () {
         document.querySelector('.alert').style.display = 'none';
     }, 3000);

     // //clear Form
     // document.('contact').reset();
 }

 function  getInputVal(id) {
     return document.getElementById(id).value;
 }

 //Save messages to firebase
function  saveMessage(name,email,message) {
     var newMessageref = messageRef.push();
     newMessageref.set({
         name: name,
         email: email,
         message: message
     })

}