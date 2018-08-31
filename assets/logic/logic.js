// anything we want to have happen before the page starts
//===========================================================================


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
        
    }


    console.log(userName);
    console.log(language);

    // post new user info to firebase
    database.ref().set({
        userName: userName,
        password: password,
        userInfo: userInfo,
        language: setLanguage
    });
    


}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

// api calls

// if no firebase data, prompt profile creation

// post new user info to firebase

// giphy api button stuff


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