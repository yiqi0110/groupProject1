// anything we want to have happen before the page starts
//===========================================================================
//modal function call for login prompt
$(document).ready(function () {
    lang();
    $("#submitmsg").click(function (event) {
        event.preventDefault();
        var toAdd = $('#usermsg').val();
        console.log('Chat Box Clicked');
        $("#usermsg").val('');
        // here youd need to be reading your language that is selected and the language of the user that just sent the message to the chat group as well as there text itself

        // trans('en', 'ja', toAdd)
        //     .then(newTranslation => {
        //         console.log(newTranslation); // this comes back with the translation
        //         $("#chatbox").prepend(toAdd + "<br>");





        //     })
        //     .catch(error => console.error(error));
        for (var i = 0; i < supportedLanguages.length; i++) {
            trans('en', supportedLanguages[i].symbol, supportedLanguages[i].languageNames, i)
                .then(newTranslation => {
                    console.log(newTranslation); // this comes back with the translation
                })
                .catch(error => console.error(error));
        }
        console.log(supportedLanguages);
    });
    
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
});
$("#languageList").change(function () {

    var thing = $(this).val();
    console.log(thing);
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




// giphy api button stuff
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

function lang() {
    console.log("Languages Added");
    for (var i = 0; i < translatedNames.length; i++) {
        //console.log(supportedLanguages[i].languageNames);
        var options = $("<option>").text(supportedLanguages[i].languageNames);
        options.attr("value", supportedLanguages[i].symbol);
        $("#languageList").append(options);
    };
};

// translation section
function trans(selectedLanguage, translatedLanguage, translatedText, i) {
    return new Promise((resolve, reject) => {
        var translateURL = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + selectedLanguage + "&tl=" + translatedLanguage + "&dt=t&q=" + translatedText;
        //  + "&keyId=a3e4f0ff092a26cf340e750f92d988d05f3dacc8";        // maybe useful later

        $.ajax({
            url: translateURL,
            method: "POST",
        }).then(function (response) {
            console.log(response);
            var newTranslation = response[0][0][0];
            supportedLanguages[i].translation = newTranslation;
            resolve(newTranslation);
        }).catch(function (error) {
            reject(error);
        });
    })
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

// for (var i = 0; i < 2; i++) {
//     trans('en', supportedLanguages[i].symbol, supportedLanguages[i].languageNames)
//         .then(newTranslation => {
//             console.log(newTranslation); // this comes back with the translation
//             supportedLanguages[i].translation = newTranslation;
//             console.log(supportedLanguages[i]);

//         })
//         .catch(error => console.error(error));
// };


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


database.ref().on("value", function (snapshot) {
    if (snapshot.child("username").exists() && snapshot.child("password").exists()) {
        // Pull the variables equal to the stored values if they exist
        // Set the variables for username and language equal to the stored values if they exist
        username = snapshot.val().username;
        language = snapshot.val().language;

        console.log("username and password stored");
    } else {


        console.log("username and password NOT stored");
        console.log("username exists is: ");
        console.log(snapshot.child("username").exists());
        console.log("password exists is: ");
        console.log(snapshot.child("password").exists());

    }
});


database.ref().on("value", function (snapshot) {
    if (snapshot.child("username").exists() && snapshot.child("password").exists()) {
        // Pull the variables equal to the stored values if they exist
        // Set the variables for username and language equal to the stored values if they exist
        username = snapshot.val().username;
        language = snapshot.val().language;

        console.log("username and password stored");
    } else {


        console.log("username and password NOT stored");
        console.log("username exists is: ");
        console.log(snapshot.child("username").exists());
        console.log("password exists is: ");
        console.log(snapshot.child("password").exists());

    }
});


$("#SignUpButton").on("click", function(e) {
    e.preventDefault();

    console.log("Creating Profile as one was not found");
    //grab info from modal input boxes
    var username = $("#username").val();
    var password = $("#password").val();
    var email = $("#emailAddress").val();
    var location = $("#selectLocation").val();

    //set info to database
    // post new user info to firebase
    var newUser ={
        username: username,
        password: password,
        location: selectLocation,
        email: email
    };

    //push new user to database
    database.ref().push(newUser);

    console.log("added new user to database");
    //alert that user has been added - another modal?

    $("#username").val("");
    $("#password").val("");
    $("#emailAddress").val("");
    $("#se").val("");

});
    