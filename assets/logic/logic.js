// anything we want to have happen before the page starts
//===========================================================================
//modal function call for login prompt
$(document).ready(function () {
    lang();
    var selectedLanguage;
    $("#languageList").change(function () {
        selectedLanguage = $(this).val();
        console.log(selectedLanguage);
    });
    $("#submitmsg").click(function (event) {
        event.preventDefault();
        var toAdd = $('#usermsg').val();
        console.log('Chat Box Clicked');
        $("#usermsg").val('');
        // here youd need to be reading your language that is selected and the language of the user that just sent the message to the chat group as well as there text itself
        trans(selectedLanguage, 'en', toAdd)
            .then(newTranslation => {
                console.log(newTranslation); // this comes back with the translation
                $("#chatbox").prepend(toAdd + "<br>");
                // anything needing a translation must be sent through here, latency

            })
            .catch(error => console.error(error));
    });

    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
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

var supportedLanguages = [
    {
        languageNames: "Afrikaans",
        symbol: "af",
        translation: "Afrikaans"
    },
    {
        languageNames: "Albanian",
        symbol: "sq",
        translation: "shqiptar"
    },
    {
        languageNames: "Amharic",
        symbol: "am",
        translation: "አማርኛ"
    },
    {
        languageNames: "Arabic",
        symbol: "ar",
        translation: "عربى"
    },
    {
        languageNames: "Armenian",
        symbol: "hy",
        translation: "հայերեն"
    },
    {
        languageNames: "Azeerbaijani",
        symbol: "az",
        translation: "Azeerbaijani"
    },
    {
        languageNames: "Basque",
        symbol: "eu",
        translation: "Euskal"
    },
    {
        languageNames: "Belarusian",
        symbol: "be",
        translation: "беларускі"
    },
    {
        languageNames: "Bengali",
        symbol: "bn",
        translation: "বাঙালি"
    },
    {
        languageNames: "Bosnian",
        symbol: "bs",
        translation: "Bosanski"
    },
    {
        languageNames: "Bulgarian",
        symbol: "bg",
        translation: "български"
    },
    {
        languageNames: "Catalan",
        symbol: "ca",
        translation: "Català"
    },
    {
        languageNames: "Cebuano",
        symbol: "ceb",
        translation: "Cebuano"
    },
    {
        languageNames: "Chinese(Simplified)",
        symbol: "zh-CN",
        translation: "简体中文）"
    },
    {
        languageNames: "Chinese(Traditional)",
        symbol: "zh-TW",
        translation: "中國傳統的）"
    },
    {
        languageNames: "Corsican",
        symbol: "co",
        translation: "Corsu"
    },
    {
        languageNames: "Croatian",
        symbol: "hr",
        translation: "Hrvatski"
    },
    {
        languageNames: "Czech",
        symbol: "cs",
        translation: "čeština"
    },
    {
        languageNames: "Danish",
        symbol: "da",
        translation: "dansk"
    },
    {
        languageNames: "Dutch",
        symbol: "nl",
        translation: "Nederlands"
    },
    {
        languageNames: "English",
        symbol: "en",
        translation: "English"
    },
    {
        languageNames: "Esperanto",
        symbol: "eo",
        translation: "Esperanto"
    },
    {
        languageNames: "Estonian",
        symbol: "et",
        translation: "Eesti keel"
    },
    {
        languageNames: "Finnish",
        symbol: "fi",
        translation: "Suomalainen"
    },
    {
        languageNames: "French",
        symbol: "fr",
        translation: "français"
    },
    {
        languageNames: "Frisian",
        symbol: "fy",
        translation: "Frysk"
    },
    {
        languageNames: "Galician",
        symbol: "gl",
        translation: "Galego"
    },
    {
        languageNames: "Georgian",
        symbol: "ka",
        translation: "ქართული"
    },
    {
        languageNames: "German",
        symbol: "de",
        translation: "Deutsche"
    },
    {
        languageNames: "Greek",
        symbol: "el",
        translation: "Ελληνικά"
    },
    {
        languageNames: "Gujarati",
        symbol: "gu",
        translation: "ગુજરાતી"
    },
    {
        languageNames: "Haitian Creole",
        symbol: "ht",
        translation: "Kreyòl Ayisyen"
    },
    {
        languageNames: "Hausa",
        symbol: "ha",
        translation: "Hausa"
    },
    {
        languageNames: "Hawaiian",
        symbol: "haw",
        translation: "ʻŌlelo Hawaiʻi"
    },
    {
        languageNames: "Hebrew",
        symbol: "he",
        translation: "עִברִית"
    },
    {
        languageNames: "Hindi",
        symbol: "hi",
        translation: "हिंदी"
    },
    {
        languageNames: "Hmong",
        symbol: "hmn",
        translation: "Hmoob"
    },
    {
        languageNames: "Hungarian",
        symbol: "hu",
        translation: "Magyar"
    },
    {
        languageNames: "Icelandic",
        symbol: "is",
        translation: "Íslensku"
    },
    {
        languageNames: "Igbo",
        symbol: "ig",
        translation: "Igbo"
    },
    {
        languageNames: "Indonesian",
        symbol: "id",
        translation: "bahasa Indonesia"
    },
    {
        languageNames: "Irish",
        symbol: "ga",
        translation: "Gaeilge"
    },
    {
        languageNames: "Italian",
        symbol: "it",
        translation: "italiano"
    },
    {
        languageNames: "Japanese",
        symbol: "ja",
        translation: "日本語"
    },
    {
        languageNames: "Javanese",
        symbol: "jw",
        translation: "Wong Jawa"
    },
    {
        languageNames: "Kannada",
        symbol: "kn",
        translation: "ಕನ್ನಡ"
    },
    {
        languageNames: "Kazakh",
        symbol: "kk",
        translation: "Қазақша"
    },
    {
        languageNames: "Khmer",
        symbol: "km",
        translation: "ភាសាខ្មែរ"
    },
    {
        languageNames: "Korean",
        symbol: "ko",
        translation: "한국어"
    },
    {
        languageNames: "Kurdish",
        symbol: "ku",
        translation: "Kurdî"
    },
    {
        languageNames: "Kyrgyz",
        symbol: "ky",
        translation: "Кыргызча"
    },
    {
        languageNames: "Lao",
        symbol: "lo",
        translation: "ລາວ"
    },
    {
        languageNames: "Latin",
        symbol: "la",
        translation: "Latine"
    },
    {
        languageNames: "Latvian",
        symbol: "lv",
        translation: "Latviešu"
    },
    {
        languageNames: "Lithuanian",
        symbol: "lt",
        translation: "Lietuviškai"
    },
    {
        languageNames: "Luxembourgish",
        symbol: "lb",
        translation: "lëtzebuergesch"
    },
    {
        languageNames: "Macedonian",
        symbol: "mk",
        translation: "Македонски"
    },
    {
        languageNames: "Malagasy",
        symbol: "mg",
        translation: "Malagasy"
    },
    {
        languageNames: "Malay",
        symbol: "ms",
        translation: "Melayu"
    },
    {
        languageNames: "Malayalam",
        symbol: "ml",
        translation: "മലയാളം"
    },
    {
        languageNames: "Maltese",
        symbol: "mt",
        translation: "Malti"
    },
    {
        languageNames: "Maori",
        symbol: "mi",
        translation: "Maori"
    },
    {
        languageNames: "Marathi",
        symbol: "mr",
        translation: "मराठी"
    },
    {
        languageNames: "Mongolian",
        symbol: "mn",
        translation: "Монгол хэл"
    },
    {
        languageNames: "Myanmar(Burmese)",
        symbol: "my",
        translation: "မြန်မာ (ဗမာ)"
    },
    {
        languageNames: "Nepali",
        symbol: "ne",
        translation: "नेपाली"
    },
    {
        languageNames: "Norwegian",
        symbol: "no",
        translation: "norsk"
    },
    {
        languageNames: "Nyanja(Chichewa)",
        symbol: "ny",
        translation: "Nyanja (Chichewa)"
    },
    {
        languageNames: "Pashto",
        symbol: "ps",
        translation: "پښتو"
    },
    {
        languageNames: "Persian",
        symbol: "fa",
        translation: "فارسی"
    },
    {
        languageNames: "Polish",
        symbol: "pl",
        translation: "Polskie"
    },
    {
        languageNames: "Portuguese(Portugal, Brazil)",
        symbol: "pt",
        translation: "Português (Portugal, Brasil)"
    },
    {
        languageNames: "Punjabi",
        symbol: "pa",
        translation: "ਪੰਜਾਬੀ"
    },
    {
        languageNames: "Romanian",
        symbol: "ro",
        translation: "Română"
    },
    {
        languageNames: "Russian",
        symbol: "ru",
        translation: "русский"
    },
    {
        languageNames: "Samoan",
        symbol: "sm",
        translation: "Samoa"
    },
    {
        languageNames: "Scots Gaelic",
        symbol: "gd",
        translation: "Gàidhlig na h-Alba"
    },
    {
        languageNames: "Serbian",
        symbol: "sr",
        translation: "Српски"
    },
    {
        languageNames: "Sesotho",
        symbol: "st",
        translation: "Sesotho"
    },
    {
        languageNames: "Shona",
        symbol: "sn",
        translation: "Shona"
    },
    {
        languageNames: "Sindhi",
        symbol: "sd",
        translation: "سنڌي"
    },
    {
        languageNames: "Sinhala(Sinhalese)",
        symbol: "si",
        translation: "සිංහල (සිංහල)"
    },
    {
        languageNames: "Slovak",
        symbol: "sk",
        translation: "slovenský"
    },
    {
        languageNames: "Slovenian",
        symbol: "sl",
        translation: "Slovenščina"
    },
    {
        languageNames: "Somali",
        symbol: "so",
        translation: "Somali"
    },
    {
        languageNames: "Spanish",
        symbol: "es",
        translation: "Español"
    },
    {
        languageNames: "Sundanese",
        symbol: "su",
        translation: "Sunda"
    },
    {
        languageNames: "Swahili",
        symbol: "sw",
        translation: "Kiswahili"
    },
    {
        languageNames: "Swedish",
        symbol: "sv",
        translation: "svenska"
    },
    {
        languageNames: "Tagalog(Filipino)",
        symbol: "tl",
        translation: "Tagalog (Filipino)"
    },
    {
        languageNames: "Tajik",
        symbol: "tg",
        translation: "Тоҷикӣ"
    },
    {
        languageNames: "Tamil",
        symbol: "ta",
        translation: "தமிழ்"
    },
    {
        languageNames: "Telugu",
        symbol: "te",
        translation: "తెలుగు"
    },
    {
        languageNames: "Thai",
        symbol: "th",
        translation: "ไทย"
    },
    {
        languageNames: "Turkish",
        symbol: "tr",
        translation: "Türk"
    },
    {
        languageNames: "Ukrainian",
        symbol: "uk",
        translation: "Українська"
    },
    {
        languageNames: "Urdu",
        symbol: "ur",
        translation: "اردو"
    },
    {
        languageNames: "Uzbek",
        symbol: "uz",
        translation: "O'zbek"
    },
    {
        languageNames: "Vietnamese",
        symbol: "vi",
        translation: "Tiếng Việt"
    },
    {
        languageNames: "Welsh",
        symbol: "cy",
        translation: "Cymraeg"
    },
    {
        languageNames: "Xhosa",
        symbol: "xh",
        translation: "isiXhosa"
    },
    {
        languageNames: "Yiddish",
        symbol: "yi",
        translation: "ייִדיש"
    },
    {
        languageNames: "Yoruba",
        symbol: "yo",
        translation: "Yorùbá"
    },
    {
        languageNames: "Zulu",
        symbol: "zu",
        translation: "Zulu"
    }
];

database.ref().on("value", function (snapshot) {
    if (snapshot.child("userName").exists() && snapshot.child("password").exists()) {
        // Pull the variables equal to the stored values if they exist
        // Set the variables for userName and language equal to the stored values if they exist
        userName = snapshot.val().userName;
        language = snapshot.val().language;

        console.log("userName and password stored");
    } else {


        ("userName and password NOT stored");
        console.log("userName exists is: ");
        console.log(snapshot.child("userName").exists());
        console.log("password exists is: ");
        console.log(snapshot.child("password").exists());


        $("#create-profile").click(function () {

            console.log("Creating Profile as one was not found");
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

            console.log("added new user to database");
            //alert that user has been added - another modal?
        })
    };

});

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
        var options = $("<option>").text(supportedLanguages[i].translation);
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