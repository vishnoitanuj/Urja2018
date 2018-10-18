
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

//Reference Registration Collection
var messageRef = firebase.database().ref('registrations');

//Listen for Contact Form
document.getElementById('register').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
    e.preventDefault();

    //Get Values
    var college_name = getInputVal('Collegename');
    var captain_name = getInputVal('Capname');
    var email = getInputVal('mail');
    var contact1 = getInputVal('number');
    var contact2 = getInputVal('number2');
    var bio = getInputVal('bio');
    var sport = getInputVal('job');
    var transaction = getInputVal('transaction');

    console.log(college_name,captain_name,email,contact1,contact2,bio,sport,transaction);
    //Save Message
    saveMessage(college_name,captain_name,email,contact1,contact2,bio,sport,transaction);

    //Show Alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    window.alert("You have been successfully Registered");

    setTimeout(function () {
        location.href = "../index.html";
    },1000);

}

function  getInputVal(id) {
    return document.getElementById(id).value;
}

//Save messages to firebase
function  saveMessage(college_name,captain_name,email,contact1,contact2,bio,sport,transaction) {
    var newMessageref = messageRef.push();
    newMessageref.set({
        College_Name: college_name,
        Captain_Name: captain_name,
        Email: email,
        Primary_Contact:contact1,
        Secondary_Contact: contact2,
        Achievements : bio,
        Sport : sport,
        Transaction_ID : transaction,
    });
}