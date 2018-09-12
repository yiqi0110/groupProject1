// anything we want to have happen before the page starts
//===========================================================================
//modal function call for login prompt
$(document).ready(function () {
    $("#submitmsg").click(function (event) {
        event.preventDefault();
        var toAdd = $('#usermsg').val();
        $("#chatbox").prepend(toAdd + "<br>");
        console.log('Chat Box Clicked');
        $("#usermsg").val('');
        var translatedSTUFF = trans('en', 'ja', toAdd);
        console.log(toAdd);
        console.log("this is the text from the chatbox: " + newTranslation);
    });
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
});


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

var supportedLanguages = [{
    languageNames: "Afrikaans",
    symbol: "af"
},
{
    languageNames: "Albanian",
    symbol: "sq"
},
{
    languageNames: "Amharic",
    symbol: "am"
},
{
    languageNames: "Arabic",
    symbol: "ar"
},
{
    languageNames: "Armenian",
    symbol: "hy"
},
{
    languageNames: "Azeerbaijani",
    symbol: "az"
},
{
    languageNames: "Basque",
    symbol: "eu"
},
{
    languageNames: "Belarusian",
    symbol: "be"
},
{
    languageNames: "Bengali",
    symbol: "bn"
},
{
    languageNames: "Bosnian",
    symbol: "bs"
},
{
    languageNames: "Bulgarian",
    symbol: "bg"
},
{
    languageNames: "Catalan",
    symbol: "ca"
},
{
    languageNames: "Cebuano",
    symbol: "ceb"
},
{
    languageNames: "Chinese(Simplified)",
    symbol: "zh-CN"
},
{
    languageNames: "Chinese(Traditional)",
    symbol: "zh-TW"
},
{
    languageNames: "Corsican",
    symbol: "co"
},
{
    languageNames: "Croatian",
    symbol: "hr"
},
{
    languageNames: "Czech",
    symbol: "cs"
},
{
    languageNames: "Danish",
    symbol: "da"
},
{
    languageNames: "Dutch",
    symbol: "nl"
},
{
    languageNames: "English",
    symbol: "en"
},
{
    languageNames: "Esperanto",
    symbol: "eo"
},
{
    languageNames: "Estonian",
    symbol: "et"
},
{
    languageNames: "Finnish",
    symbol: "fi"
},
{
    languageNames: "French",
    symbol: "fr"
},
{
    languageNames: "Frisian",
    symbol: "fy"
},
{
    languageNames: "Galician",
    symbol: "gl"
},
{
    languageNames: "Georgian",
    symbol: "ka"
},
{
    languageNames: "German",
    symbol: "de"
},
{
    languageNames: "Greek",
    symbol: "el"
},
{
    languageNames: "Gujarati",
    symbol: "gu"
},
{
    languageNames: "Haitian Creole",
    symbol: "ht"
},
{
    languageNames: "Hausa",
    symbol: "ha"
},
{
    languageNames: "Hawaiian",
    symbol: "haw"
},
{
    languageNames: "Hebrew",
    symbol: "he"
},
{
    languageNames: "Hindi",
    symbol: "hi"
},
{
    languageNames: "Hmong",
    symbol: "hmn"
},
{
    languageNames: "Hungarian",
    symbol: "hu"
},
{
    languageNames: "Icelandic",
    symbol: "is"
},
{
    languageNames: "Igbo",
    symbol: "ig"
},
{
    languageNames: "Indonesian",
    symbol: "id"
},
{
    languageNames: "Irish",
    symbol: "ga"
},
{
    languageNames: "Italian",
    symbol: "it"
},
{
    languageNames: "Japanese",
    symbol: "ja"
},
{
    languageNames: "Javanese",
    symbol: "jw"
},
{
    languageNames: "Kannada",
    symbol: "kn"
},
{
    languageNames: "Kazakh",
    symbol: "kk"
},
{
    languageNames: "Khmer",
    symbol: "km"
},
{
    languageNames: "Korean",
    symbol: "ko"
},
{
    languageNames: "Kurdish",
    symbol: "ku"
},
{
    languageNames: "Kyrgyz",
    symbol: "ky"
},
{
    languageNames: "Lao",
    symbol: "lo"
},
{
    languageNames: "Latin",
    symbol: "la"
},
{
    languageNames: "Latvian",
    symbol: "lv"
},
{
    languageNames: "Lithuanian",
    symbol: "lt"
},
{
    languageNames: "Luxembourgish",
    symbol: "lb"
},
{
    languageNames: "Macedonian",
    symbol: "mk"
},
{
    languageNames: "Malagasy",
    symbol: "mg"
},
{
    languageNames: "Malay",
    symbol: "ms"
},
{
    languageNames: "Malayalam",
    symbol: "ml"
},
{
    languageNames: "Maltese",
    symbol: "mt"
},
{
    languageNames: "Maori",
    symbol: "mi"
},
{
    languageNames: "Marathi",
    symbol: "mr"
},
{
    languageNames: "Mongolian",
    symbol: "mn"
},
{
    languageNames: "Myanmar(Burmese)",
    symbol: "my"
},
{
    languageNames: "Nepali",
    symbol: "ne"
},
{
    languageNames: "Norwegian",
    symbol: "no"
},
{
    languageNames: "Nyanja(Chichewa)",
    symbol: "ny"
},
{
    languageNames: "Pashto",
    symbol: "ps"
},
{
    languageNames: "Persian",
    symbol: "fa"
},
{
    languageNames: "Polish",
    symbol: "pl"
},
{
    languageNames: "Portuguese(Portugal, Brazil)",
    symbol: "pt"
},
{
    languageNames: "Punjabi",
    symbol: "pa"
},
{
    languageNames: "Romanian",
    symbol: "ro"
},
{
    languageNames: "Russian",
    symbol: "ru"
},
{
    languageNames: "Samoan",
    symbol: "sm"
},
{
    languageNames: "Scots Gaelic",
    symbol: "gd"
},
{
    languageNames: "Serbian",
    symbol: "sr"
},
{
    languageNames: "Sesotho",
    symbol: "st"
},
{
    languageNames: "Shona",
    symbol: "sn"
},
{
    languageNames: "Sindhi",
    symbol: "sd"
},
{
    languageNames: "Sinhala(Sinhalese)",
    symbol: "si"
},
{
    languageNames: "Slovak",
    symbol: "sk"
},
{
    languageNames: "Slovenian",
    symbol: "sl"
},
{
    languageNames: "Somali",
    symbol: "so"
},
{
    languageNames: "Spanish",
    symbol: "es"
},
{
    languageNames: "Sundanese",
    symbol: "su"
},
{
    languageNames: "Swahili",
    symbol: "sw"
},
{
    languageNames: "Swedish",
    symbol: "sv"
},
{
    languageNames: "Tagalog(Filipino)",
    symbol: "tl"
},
{
    languageNames: "Tajik",
    symbol: "tg"
},
{
    languageNames: "Tamil",
    symbol: "ta"
},
{
    languageNames: "Telugu",
    symbol: "te"
},
{
    languageNames: "Thai",
    symbol: "th"
},
{
    languageNames: "Turkish",
    symbol: "tr"
},
{
    languageNames: "Ukrainian",
    symbol: "uk"
},
{
    languageNames: "Urdu",
    symbol: "ur"
},
{
    languageNames: "Uzbek",
    symbol: "uz"
},
{
    languageNames: "Vietnamese",
    symbol: "vi"
},
{
    languageNames: "Welsh",
    symbol: "cy"
},
{
    languageNames: "Xhosa",
    symbol: "xh"
},
{
    languageNames: "Yiddish",
    symbol: "yi"
},
{
    languageNames: "Yoruba",
    symbol: "yo"
},
{
    languageNames: "Zulu",
    symbol: "zu"
}
];


database.ref().on("value", function (snapshot) {
    console.log("working");
    if (snapshot.child("username").exists() && snapshot.child("password").exists()) {
        // Pull the variables equal to the stored values if they exist
        // Set the variables for userName and language equal to the stored values if they exist
        userName = snapshot.val().userName;
        language = snapshot.val().language;

        console.log("username and password stored");
    } else {


        ("username and password NOT stored");
        console.log("username exists is: ");
        console.log(snapshot.child("username").exists());
        console.log("password exists is: ");
        console.log(snapshot.child("password").exists());


        $("#create-profile").on("click", function () {
            function Profile() {
                console.log("Creating Profile as one was not found");
                //grab info from modal input boxes
                userName = $("#username").val().trim;
                password = $("#password").val().trim;
                language = $("#language").val().trim;
                email = $("#emailAddress").val().trim;

                //set info to database
                // post new user info to firebase
                database.ref().set({
                    userName: userName,
                    password: password,
                    language: setLanguage,
                    email: email
                });

                //push new user to database
                database.ref().push(newUser);

                console.log("added new user to database");
                //alert that user has been added - another modal?
            }
        })
    };


    Profile();
    $(document).on("click", "#create-profile", Profile());


});

/* giphy api button stuff
$("#button-for-giphs").click(function () {

    console.log("button GIF");

    var inputsArray = [];
    var userInput = $("#user-selection").val().trim();
    inputsArray.push(userInput);

    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search",
        APIKey: "4cK7PhqwwNF15DHlSkE0A2ttuyHL6uoX",
        method: "GET",
        q: inputsArray,
        limit: 5
    }).then(function (data) {
        // Log the resulting object
        //console.log(data);

        $("#giph-scroll-img").append(data.image);

    });
});
*/
// An array of actions, new actions will be pushed into this array;
$(".dropdown").on("click", function () {
    var gifs = ["Funny", "Sad", "Happy", "Excited", "Hopeful"];

    // Creating Functions & Methods
    // Function that displays all gif buttons
    function displayGifButtons() {
        $("#gifButtonsView").empty(); // erasing anything in this div id so that it doesnt duplicate the results
        for (var i = 0; i < gifs.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("dropdown-item");
            gifButton.attr("data-name", gifs[i]);
            gifButton.text(gifs[i]);
            $("#gifButtonsView").append(gifButton);
        }
    }

    // Function that displays all of the gifs
    function displayGifs() {
        var action = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=4cK7PhqwwNF15DHlSkE0A2ttuyHL6uoX&limit=3";
        console.log(queryURL); // displays the constructed url
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function (response) {
                console.log(response); // console test to make sure something returns
                $("#submitmsg").empty(); // erasing anything in this div id so that it doesnt keep any from the previous click
                var results = response.data; //shows results of gifs
                if (results == "") {
                    alert("There isn't a gif for this selected button");
                }
                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div>"); //div for the gifs to go inside
                    gifDiv.addClass("gifDiv");
                    // pulling gif
                    var gifImage = $("<img>");       
                    gifImage.attr("data-animate", results[i].images.fixed_height_small.url); // animated image
                    gifImage.attr("data-state", "animate"); // set the image state
                    gifImage.addClass("image");
                    gifDiv.append(gifImage);
                    // pulling still image of gif
                    // adding div of gifs to gifsView div
                    $("#submitmsg").prepend(gifDiv);
                }
            });
    }
    // Calling Functions & Methods
    displayGifButtons(); // displays list of actions already created
    displayGifs();

    // Document Event Listeners
    $(document).on("click", ".dropdown", displayGifs);
});
var newTranslation = '';

// translation section
var trans = function (selectedLanguage, translatedLanguage, translatedText) {

    var translateURL = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + selectedLanguage + "&tl=" + translatedLanguage + "&dt=t&q=" + translatedText;

    $.ajax({
        url: translateURL,
        method: "POST",
    }).then(function (response) {
        newTranslation = response[0][0][0];

    });
};

// Any input that is put into the chat box will be sent as the users language and the translated to the other users language
$("#text2TranslateInChat").on("sumbit", function () {
    // takes set language from user
    selectedLanguage = '#';
    // takes language to be translate to
    translatedLanguage = '#';
    // takes the text 2 be translated
    translatedText = '#';
}); // end of input retrieval


//Profile page code, still testing//
//     // var newPhoto = {file: ""}
//     var name = ""
//     var profileEmail = email.val().trim();
//     var defaultLang = []
//     var userLocation = []
//     var profileText = $("#profileText");
//    // var lastLogin = place time code here

//    if (document.onclick($("#save"))) {
//        // $("#profilePhoto").html("<img src=" + newPhoto + "id='profilePhoto'>")
//        $("#username").text(name);
//        $("#emailAddress").text(profileEmail);
//         $("#languageSelect").text(defaultLang);
//         $("#countrySelect").text(userLocation);
//    //     $("#lastLogin").text(lastLogin);
//        $("#pText").text(profileText);
//     }

//    //function (getprofilepic) {
//        //get the file name of newPhoto
//        //put the name into a string

//}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for the userbox

$("#SignUp").on("click", function (e) {
    e.preventDefault();
    //grab info from modal input boxes
    console.log("#SignUp");

    //set info to database
    // post new user info to firebase
    userName = $("#userName").val();
    emailAddress = $("#emailAddress").val();
    confirmPassword = $("#confirmPassword").val();
    password = $("#password").val();

    console.log("User Name: ");
    console.log(userName);


    database.ref().set({
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
        emailAddress: emailAddress
    }, function (error) {
        if (error) {
            console.log("error wrutung to databse");

        } else {
            console.log("success writing to database");
        }
    });
    //push new user to database
    //database.ref().push(newUser);
    //alert that user has been added - another modal?
})

database.ref().on("value", function (snapshot) {

    console.log("Get Started Button Clicked")

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

console.log("End of UserBox Code");
