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

    $(".row.userBox").text(snapshot.val().userName + '\n' + snapshot.val().emailAddress);
    //$(".row.userBox").text(snapshot.val().password);
    //$(".row.userBox").text(snapshot.val().emailAddress);
    //$(".row.userBox").text(snapshot.val().confirmPassword);
});

    console.log("fired");


    

