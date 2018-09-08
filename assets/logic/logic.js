$(document).ready(function(){
    $("#submitmsg").click(function(event) {
    event.preventDefault();
      var toAdd = $('#usermsg').val();
      $("#chatbox").append(toAdd + "<br>");
      console.log('click');
      $("#usermsg").val('');
    });
})
    
 


// anything we want to have happen before the page starts
//===========================================================================


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



// function functionality
//===========================================================================

// sign in or create profile or anonymous profile

// sign in ==> input username and password

// create profile ==> set username and password, and set language

// anonymous ==> set language

// on.click submit to translator as well as submit text to chat


//submit text to chat 



// giphy stuff from last project in a scroll menu to choose from

// gif post into the chatroom