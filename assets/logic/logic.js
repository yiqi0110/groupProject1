// anything we want to have happen before the page starts
//===========================================================================
$("#modal").modal(hide);

// variable declarations
//===========================================================================
var userName = "";
var password = "";
var language = "";

// function declarations
//===========================================================================

// firebase stuff
var config = {
    apiKey: "AIzaSyCGtI9XNr0J-kA2A7VgdavXQXtoNiN6vcI",
    authDomain: "project1-8d0be.firebaseapp.com",
    databaseURL: "https://project1-8d0be.firebaseio.com",
    projectId: "project1-8d0be",
    storageBucket: "project1-8d0be.appspot.com",
    messagingSenderId: "799117703087"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();

  database.ref().on("value", function(snapshot) {
    if (snapshot.child("userName").exists() && snapshot.child("language").exists()) {
    // Set the variables for userName and language equal to the stored values if they exist
        userName = snapshot.val().userName;
        language = snapshot.val().language;
      }

    else {
        //modal to display with profile creation questions
        $("#modal").modal(show);
        
        $("#submit-button").click(function() {
        //grab info from modal input boxes
        userName = $("#modal-userName").val().trim;
        password = $("#modal-password").val().trim;
        language = $("#modal-language").val().trim;

        //set info to database
        // post new user info to firebase
        database.ref().set({
            userName: userName,
            password: password,
            language: setLanguage
        });
        
        //push new user to database
        database.ref().push(newUser);
        //alert that user has been added - another modal?
    }
  )};

// giphy api button stuff
$("#button-for-giphs").click(function(){
var inputsArray = [];
var userInput = $("#user-selection").val().trim();
inputsArray.push(userInput);

$.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    APIKey: "4cK7PhqwwNF15DHlSkE0A2ttuyHL6uoX",
    method: "GET",
    q = inputsArray,
    limit = 5
}).then(function(data) {
    // Log the resulting object
    console.log(data);

    $("#giph-scroll-img").append(data.image);

  });
});

// translator api stuff
var selectedLanguage = "";  // should be something like en, jp, etc. for reference look at google translate api
var translatedLanguage = "";    // same stuff from above
var translatedText = "";    // any text you want to translate from sl to tl . . .
var translateURL = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + selectedLanguage + "&tl=" + translatedLanguage + "&dt=t&q=" + translatedText;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {


// function functionality
//===========================================================================

// sign in or create profile or anonymous profile

// sign in ==> input username and password

// create profile ==> set username and password, and set language

// anonymous ==> set language

// on.click submit to translator as well as submit text to chat

// giphy stuff from last project in a scroll menu to choose from

// gif post into the chatroom

//language dropdown option
var langOptions = langArray;
        var mySelect = $('#langSelect');
        $.each(langOptions, function(val, text) {
            mySelect.append(
                $('<option></option>').val(val).html(text)
            );
        });
        console.log(langOptions);
        