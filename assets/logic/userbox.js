$( document ).ready(function() {
    console.log("ready!");
});


var config = {
    apiKey: "AIzaSyCZsQZfdR545hpdtOie-D5qnXNqkQI_3ck",
    authDomain: "groupproject1-ed26a.firebaseapp.com",
    databaseURL: "https://groupproject1-ed26a.firebaseio.com",
    projectId: "groupproject1-ed26a",
    storageBucket: "groupproject1-ed26a.appspot.com",
    messagingSenderId: "264760171748"
};



firebase.initializeApp(config);

var database = firebase.database();

console.log(database);

var userName =""; 
var emailAddress="";
var confirmPassword="";
var password="";



$("#SignUp").on("click", function(e) {
    e.preventDefault();
    //grab info from modal input boxes
    console.log("Hello!");

    //set info to database
    // post new user info to firebase
    userName = $("#userName").val().trim();
    emailAddress = $("#emailAddress").val().trim();
    confirmPassword = $("#confirmPassword").val().trim();
    password = $("#password").val().trim();

    console.log("Hello!");


    database.ref().set({
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
        emailAddress: emailAddress
    },function(error){
        if (error) { 
            console.log("error");

        }

        else { 
            console.log("success");
        }
    });
    //push new user to database
    //database.ref().push(newUser);
    //alert that user has been added - another modal?
})

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().userName);
    console.log(snapshot.val().password);
    console.log(snapshot.val().confirmPassword);
    console.log(snapshot.val().emailAddress);

    $(".row.userBox").text(snapshot.val().userName + '/\n/' + snapshot.val().password);
    //$(".row.userBox").text(snapshot.val().password);
    //$(".row.userBox").text(snapshot.val().emailAddress);
    //$(".row.userBox").text(snapshot.val().confirmPassword);
});

    console.log("fired");


    

