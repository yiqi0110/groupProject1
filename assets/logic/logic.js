// anything we want to have happen before the page starts
//===========================================================================

//modal function call for login prompt
$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
    lang();
});

// variable declarations
//===========================================================================

var userName = "";
var password = "";

var email = "";

// translator api stuff
var selectedLanguage = ""; // should be something like en, jp, etc. for reference look at google translate api
var translatedLanguage = ""; // same stuff from above
var translatedText = ""; // any text you want to translate from sl to tl . . .
var translation = ""; // the translated text

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

database.ref().on("value", function (snapshot) {
    if (snapshot.child("userName").exists() && snapshot.child("password").exists()) {
        // Pull the variables equal to the stored values if they exist
        // Set the variables for userName and language equal to the stored values if they exist
        userName = snapshot.val().userName;
        language = snapshot.val().language;
    } else {

        $("#create-profile").click(function () {
            //grab info from modal input boxes
            userName = $("#userName").val().trim;
            password = $("#password").val().trim;
            language = $("#language").val().trim;
            email = $("#email").val().trim;

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
            //alert that user has been added - another modal?
        })
    };

    // giphy api button stuff
    $("#button-for-giphs").click(function () {
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
            console.log(data);

            $("#giph-scroll-img").append(data.image);

        });
    });
});

function lang() {
    for (var i = 0; i < supportedLanguages.length; i++) {
        console.log(supportedLanguages[i].languageNames);
        var options = $("<option>").text(supportedLanguages[i].languageNames);
        $("#languageList").append(options);
    };
};

// api calls

// if no firebase data, prompt profile creation

// post new user info to firebase

// giphy api button stuff  
var supportedLanguages = [
    {
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

// console.log(supportedLanguages.length);

var newTranslation;

// var translatedName = [];
for (var i = 0; i < 2; i++) {
    selectedLanguage = 'en';
    translatedLanguage = supportedLanguages[i].symbol;
    translatedText = supportedLanguages[i].languageNames;
    var translateURL = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + selectedLanguage + "&tl=" + translatedLanguage + "&dt=t&q=" + translatedText;


                // (function (i) {

                //     $.ajax({
                //         url: translateURL,
                //         method: "POST"
                //     }).then(function (response) {
                //         newTranslation = response[0][0][0];
                //         translatedName.push(newTranslation);
                //         console.log(translatedName);
                //         console.log(i);

                //         // console.log(translator);
                //         // console.log(response[0][0][0]); // this is the tl response
                //         // console.log(translator[0][0][1]); // this is the sl response
                //         // console.log(newTranslation);
                //         // console.log(translator[0][0][0]);
                //         // for use of adding the language name into the object supportedLanguages
                //     });
                // })(i); // this is the syntax of an anonmous function
                //          for right now, because of CORS, we will hold of on having the translated languages be in the language selectin
};



// function functionality
//===========================================================================


// Any input that is put into the chat box will be sent as the users language and the translated to the other users language
$("#text2TranslateInChat").on("sumbit", function () {
    // takes set language from user
    selectedLanguage = '#';
    // takes language to be translate to
    translatedLanguage = '#';
    // takes the text 2 be translated
    translatedText = '#';
}); // end of input retrieval

// sign in or create profile or anonymous profile

// sign in ==> input username and password

// create profile ==> set username and password, and set language

// anonymous ==> set language

// on.click submit to translator as well as submit text to chat

// giphy stuff from last project in a scroll menu to choose from

// gif post into the chatroom

//language dropdown option
var langOptions = supportedLanguages;
var mySelect = $('#langSelect');
$.each(langOptions, function (val, text) {
    mySelect.append(
        $('<option></option>').val(val).html(text)
    );
});
// console.log(langOptions);