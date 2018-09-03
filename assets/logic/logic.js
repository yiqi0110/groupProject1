// anything we want to have happen before the page starts
//===========================================================================


// variable declarations
//===========================================================================

// translator api stuff
var selectedLanguage = ""; // should be something like en, jp, etc. for reference look at google translate api
var translatedLanguage = ""; // same stuff from above
var translatedText = ""; // any text you want to translate from sl to tl . . .
var translation = "";   // the translated text

// function declarations
//===========================================================================

// firebase stuff

// api calls

// if no firebase data, prompt profile creation

// post new user info to firebase

// giphy api button stuff  
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

console.log(supportedLanguages.length);


function translateAPI(sl, tl, tt) {
    selectedLanguage = sl;
    translatedLanguage = tl;
    translatedText = tt;
    var translateURL = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + selectedLanguage + "&tl=" + translatedLanguage + "&dt=t&q=" + translatedText;
    $.ajax({
        url: translateURL,
        method: "GET"
    }).then(function (translator) {
        // console.log(translator[0][0][0]); // this is the tl response
        // console.log(translator[0][0][1]); // this is the sl response
        translation = translator[0][0][1];
    });
};


// function functionality
//===========================================================================

// for translating the languages into their languages, ya
for (var i = 0; i < supportedLanguages.length; i++) {
    var pickingYourLanguage = translateAPI("en", supportedLanguages[i].symbol, supportedLanguages[i].languageNames);
    console.log(translation);
    // Where we take in the users language as the variable
    var sl = $("select#languageList");
    sl.append($("<option>" + pickingYourLanguage + "</option>"));
}; // end of language select thing


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