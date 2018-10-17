// anything we want to have happen before the page starts
//===========================================================================
$("#chatSTUFF").hide();

var config = {
    apiKey: "#",
    authDomain: "global-chat-d7bc1.firebaseapp.com",
    databaseURL: "https://global-chat-d7bc1.firebaseio.com",
    projectId: "global-chat-d7bc1",
    storageBucket: "",
    messagingSenderId: "#"
};

firebase.initializeApp(config);

var database = firebase.database();

//modal function call for login prompt
var selectedLanguage;
var translatedLanguage;
var userName;

$(document).ready(function () {
    // adds languages to list
    languageADDED();
    
    $("#create-profile").click(function (e) {
        e.preventDefault();
        userName = $("#username").val().trim();
        console.log(userName);
        $("#chatSTUFF").show();
    
    });
    // on change of language select(choosing a language), pulls data from the database
    $("#languageList").change(function () {
        selectedLanguage = $(this).val();
        // console.log(selectedLanguage);
        translatesFromGlobalChat();
        gifFromGlobalChat();
    });

    // allows the send button to submit the input
    $("#submitmsg").click(function (event) {
        event.preventDefault();
        submitMSG();
    });

    // allows enter to submit the text from the input
    $("#usermsg").keypress(function (event) {
        // event.preventDefault();
        if (event.which == 13) {
            submitMSG();
        };
    });

    // sends gif data to database to then be retrieved into chatbox
    $("#gifButtonsView").click(function (event) {
        event.preventDefault();
        submitGIF();
    });

    // this stops the page from refreshing on enter key press
    $("form#msg").submit(function (e) {
        e.preventDefault();
    })

    $("#myBtn").click(function () {
        $("#myModal").modal();
    });

});

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

// to retrieve any dat from the database only if the language was selected
function translatesFromGlobalChat() {
    database.ref("/globalCHAT").limitToLast(3).on("child_added", function (snapshot) {
        // console.log(snapshot.val());
        trans(snapshot.val().lang, selectedLanguage, snapshot.val().text)
            .then(newTranslation => {
                console.log(newTranslation);
                var chatTEXT = $("<div>").addClass("chatTEXT").attr("value", snapshot.val().lang);
                // console.log(newTranslation); // this comes back with the translation
                // anything needing a translation must be sent through here, latency
                var span = $("<span>").addClass("user:" + snapshot.val().user).text("[" + snapshot.val().user + "]: ");
                span.append(newTranslation + "<br>");
                chatTEXT.append(span);
                $("#chatbox").prepend(chatTEXT).scrollTop(0);
                // checksNumOfItems();
            })
            .catch(error => console.error(error));
        // checks for number of items in chat
    });
};

// takes value from data base and displays a random gif on the page of same value
function gifFromGlobalChat() {
    database.ref("/gifs4CHAT").limitToLast(1).on("child_added", function (snapshot) {
        // Function that displays all of the gifs
        trans(snapshot.val().lang, 'en', snapshot.val().text)
            .then(newTranslation => {
                console.log(newTranslation);
                var gifSEARCH = newTranslation;
                // console.log(gifSEARCH);
                var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=4cK7PhqwwNF15DHlSkE0A2ttuyHL6uoX&tag=" + gifSEARCH;
                // console.log(queryURL); // displays the constructed url
                $.ajax({
                    url: queryURL,
                    method: 'GET'
                }).then(function (response) {
                    // console.log(response); // console test to make sure something returns
                    // $("#submitmsg").empty(); // erasing anything in this div id so that it doesnt keep any from the previous click
                    var results = response.data.images.fixed_height.url; //shows results of gifs
                    console.log(results);
                    var img = $("<img>").attr("src", results);
                    var div = $("<div>").addClass("chatGIF").attr("value", gifSEARCH);
                    var span = $("<span>").addClass("user:" + snapshot.val().user).text("[" + snapshot.val().user + "]: ");
                    div.append(span);
                    div.append(img);
                    $("#chatbox").prepend(div).scrollTop(0);
                }).fail(function () {
                    return false;
                });
            })
            .catch(error => console.error(error));
    });
};

// stuff for submit of text into chat
function submitMSG() {
    var toAdd = $('#usermsg').val().trim();

    $("#usermsg").val('');
    var chatTEXT = {
        user: userName,
        text: toAdd,
        lang: selectedLanguage
    };
    database.ref("/globalCHAT").push(chatTEXT);
};

// submits gif to database
function submitGIF() {
    var toAdd = $('#usermsg').val().trim();
    $("#usermsg").val('');
    var chatTEXT = {
        user: userName,
        text: toAdd,
        lang: selectedLanguage
    };
    database.ref("/gifs4CHAT").push(chatTEXT);
};


// adds languages to page for selection
function languageADDED() {
    // console.log("Languages Added");
    for (var i = 0; i < translatedNames.length; i++) {
        //console.log(supportedLanguages[i].languageNames);
        var options = $("<option>").text(supportedLanguages[i].translation);
        options.attr("value", supportedLanguages[i].symbol);
        $("#languageList").append(options);
    };
};

// translates text and gif value to be implimented on page and database
function trans(selectedLanguage, translatedLanguage, translatedText, i) {
    return new Promise((resolve, reject) => {
        var translateURL = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + selectedLanguage + "&tl=" + translatedLanguage + "&dt=t&q=" + translatedText + "&key=AIzaSyCsSNo74cu1dunfe5Jg4PtdsbhXX0pLkKg"; // maybe useful later

        $.ajax({
            url: translateURL,
            method: "POST",
        }).then(function (response) {
            // console.log(response);
            var newTranslation = response[0][0][0];
            resolve(newTranslation);
            console.log($("#chatbox"));
            // makes sure there are no more than 25 msg or gifs in the chat
            if ($("#chatbox")[0].childElementCount === 25){
                $("#chatbox")[0].childNodes[24].remove();
            };
        }).catch(function (error) {
            reject(error);
        });
    })
};

// was going to add a on disconnect remove gifs and msg from user but didnt know how to tackle that monster


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for the userbox



// database.ref().on("value", function (snapshot) {
//     // console.log('Check if user name and password are stored');
//     if (snapshot.child("username").exists() && snapshot.child("password").exists()) {
//         // Pull the variables equal to the stored values if they exist
//         // Set the variables for username and language equal to the stored values if they exist
//         username = snapshot.val().username;
//         language = snapshot.val().language;
//         // console.log("username and password stored");
//     } else {
//         // console.log("username and password NOT stored");
//         // console.log("username exists is: ");
//         // console.log(snapshot.child("username").exists());
//         // console.log("password exists is: ");
//         // console.log(snapshot.child("password").exists());
//     }
// });
// database.ref().on("value", function (snapshot) {
//     // console.log("Check if user name exists before creating password");
//     if (snapshot.child("username").exists() && snapshot.child("password").exists()) {
//         // Pull the variables equal to the stored values if they exist
//         // Set the variables for username and language equal to the stored values if they exist
//         username = snapshot.val().username;
//         language = snapshot.val().language;
//         // console.log("username and password stored");
//     } else {
//         // console.log("username and password NOT stored");
//         // console.log("username exists is: ");
//         // console.log(snapshot.child("username").exists());
//         // console.log("password exists is: ");
//         // console.log(snapshot.child("password").exists());
//     }
// });
// $("#create-profile").on("click", function (e) {
//     // console.log("Create Profile Clicked");
//     e.preventDefault();
//     // console.log("Creating Profile as one was not found");
//     //grab info from modal input boxes
//     var username = $("#username").val();
//     var password = $("#password").val();
//     var email = $("#emailAddress").val();
//     var language = $("#languageList").val();
//     //set info to database
//     // post new user info to firebase
//     var newUser = {
//         username: username,
//         password: password,
//         languageList: language,
//         emailAddress: email,
//     };
//     //push new user to database
//     database.ref("/username-" + username).push(newUser);
//     // console.log("added new user to database");
//     //alert that user has been added - another modal?
//     $("#username").val("");
//     $("#password").val("");
//     $("#emailAddress").val("");
//     $("#languageList").val("");
// });
