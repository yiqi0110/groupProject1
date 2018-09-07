// anything we want to have happen before the page starts
//===========================================================================
$(window).on('load',function(){
    $('#myModal').modal('show');
});


// variable declarations
//===========================================================================


// function declarations
//===========================================================================

// firebase stuff

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