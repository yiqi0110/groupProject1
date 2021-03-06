var translatedNames = ["Afrikaans", "shqiptar", "አማርኛ", "عربى", "հայերեն", "български", "čeština", "Euskal", "dansk", "Nederlands", "中國傳統的）", "English", "Català", "简体中文）", "Corsu", "Hrvatski", "বাঙালি", "עִברִית", "Deutsche", "français", "Suomalainen", "Galego", "Ελληνικά", "ગુજરાતી", "Kreyòl Ayisyen", "ʻŌlelo Hawaiʻi", "हिंदी", "Magyar", "ქართული", "Hmoob", "беларускі", "Gaeilge", "Íslensku", "bahasa Indonesia", "italiano", "한국어", "Қазақша", "日本語", "ភាសាខ្មែរ", "ລາວ", "Kurdî", "Lietuviškai", "Latine", "Malagasy", "lëtzebuergesch", "Кыргызча", "norsk", "മലയാളം", "Malti", "नेपाली", "Maori", "Polskie", "فارسی", "پښتو", "русский", "Română", "မြန်မာ (ဗမာ)", "Српски", "سنڌي", "Somali", "svenska", "Español", "தமிழ்", "Kiswahili", "Türk", "ไทย", "Slovenščina", "తెలుగు", "اردو", "Українська", "O'zbek", "Tiếng Việt", "Sunda", "isiXhosa", "Cymraeg", "slovenský", "ייִדיש", "Esperanto", "ಕನ್ನಡ", "Hausa", "Igbo", "Samoa", "Azeerbaijani", "සිංහල (සිංහල)", "Македонски", "Frysk", "Gàidhlig na h-Alba", "Tagalog (Filipino)", "Bosanski", "Shona", "Nyanja (Chichewa)", "Sesotho", "Zulu", "Тоҷикӣ", "Yorùbá", "Melayu", "Монгол хэл", "Wong Jawa", "Cebuano", "मराठी","ਪੰਜਾਬੀ","Português (Portugal, Brasil)","Latviešu","Eesti keel"];

// console.log(translatedNames.length);
// $(document).ready(function(){
//     lang();
// });

// for loop to put these languages into the language options
// function lang() {
//     console.log("Languages Added");
//     for (var i = 0; i < translatedNames.length; i++) {
//         //console.log(supportedLanguages[i].languageNames);
//         var options = $("<option>").text(translatedNames[i]);
//         $("#languageList").append(options);
//     };
// };
var thing = [
{languageNames: "Afrikaans", symbol: "af", translation: "Afrikaans"},
{languageNames: "Albanian", symbol: "sq", translation: "shqiptar"},
{languageNames: "Amharic", symbol: "am", translation: "አማርኛ"},
{languageNames: "Arabic", symbol: "ar", translation: "عربى"},
{languageNames: "Armenian", symbol: "hy", translation: "հայերեն"},
{languageNames: "Azeerbaijani", symbol: "az", translation: "Azeerbaijani"},
{languageNames: "Basque", symbol: "eu", translation: "Euskal"},
{languageNames: "Belarusian", symbol: "be", translation: "беларускі"},
{languageNames: "Bengali", symbol: "bn", translation: "বাঙালি"},
{languageNames: "Bosnian", symbol: "bs", translation: "Bosanski"},
{languageNames: "Bulgarian", symbol: "bg", translation: "български"},
{languageNames: "Catalan", symbol: "ca", translation: "Català"},
{languageNames: "Cebuano", symbol: "ceb", translation: "Cebuano"},
{languageNames: "Chinese(Simplified)", symbol: "zh-CN", translation: "简体中文）"},
{languageNames: "Chinese(Traditional)", symbol: "zh-TW", translation: "中國傳統的）"},
{languageNames: "Corsican", symbol: "co", translation: "Corsu"},
{languageNames: "Croatian", symbol: "hr", translation: "Hrvatski"},
{languageNames: "Czech", symbol: "cs", translation: "čeština"},
{languageNames: "Danish", symbol: "da", translation: "dansk"},
{languageNames: "Dutch", symbol: "nl", translation: "Nederlands"},
{languageNames: "English", symbol: "en", translation: "English"},
{languageNames: "Esperanto", symbol: "eo", translation: "Esperanto"},
{languageNames: "Estonian", symbol: "et", translation: "Eesti keel"},
{languageNames: "Finnish", symbol: "fi", translation: "Suomalainen"},
{languageNames: "French", symbol: "fr", translation: "français"},
{languageNames: "Frisian", symbol: "fy", translation: "Frysk"},
{languageNames: "Galician", symbol: "gl", translation: "Galego"},
{languageNames: "Georgian", symbol: "ka", translation: "ქართული"},
{languageNames: "German", symbol: "de", translation: "Deutsche"},
{languageNames: "Greek", symbol: "el", translation: "Ελληνικά"},
{languageNames: "Gujarati", symbol: "gu", translation: "ગુજરાતી"},
{languageNames: "Haitian Creole", symbol: "ht", translation: "Kreyòl Ayisyen"},
{languageNames: "Hausa", symbol: "ha", translation: "Hausa"},
{languageNames: "Hawaiian", symbol: "haw", translation: "ʻŌlelo Hawaiʻi"},
{languageNames: "Hebrew", symbol: "he", translation: "עִברִית"},
{languageNames: "Hindi", symbol: "hi", translation: "हिंदी"},
{languageNames: "Hmong", symbol: "hmn", translation: "Hmoob"},
{languageNames: "Hungarian", symbol: "hu", translation: "Magyar"},
{languageNames: "Icelandic", symbol: "is", translation: "Íslensku"},
{languageNames: "Igbo", symbol: "ig", translation: "Igbo"},
{languageNames: "Indonesian", symbol: "id", translation: "bahasa Indonesia"},
{languageNames: "Irish", symbol: "ga", translation: "Gaeilge"},
{languageNames: "Italian", symbol: "it", translation: "italiano"},
{languageNames: "Japanese", symbol: "ja", translation: "日本語"},
{languageNames: "Javanese", symbol: "jw", translation: "Wong Jawa"},
{languageNames: "Kannada", symbol: "kn", translation: "ಕನ್ನಡ"},
{languageNames: "Kazakh", symbol: "kk", translation: "Қазақша"},
{languageNames: "Khmer", symbol: "km", translation: "ភាសាខ្មែរ"},
{languageNames: "Korean", symbol: "ko", translation: "한국어"},
{languageNames: "Kurdish", symbol: "ku", translation: "Kurdî"},
{languageNames: "Kyrgyz", symbol: "ky", translation: "Кыргызча"},
{languageNames: "Lao", symbol: "lo", translation: "ລາວ"},
{languageNames: "Latin", symbol: "la", translation: "Latine"},
{languageNames: "Latvian", symbol: "lv", translation: "Latviešu"},
{languageNames: "Lithuanian", symbol: "lt", translation: "Lietuviškai"},
{languageNames: "Luxembourgish", symbol: "lb", translation: "lëtzebuergesch"},
{languageNames: "Macedonian", symbol: "mk", translation: "Македонски"},
{languageNames: "Malagasy", symbol: "mg", translation: "Malagasy"},
{languageNames: "Malay", symbol: "ms", translation: "Melayu"},
{languageNames: "Malayalam", symbol: "ml", translation: "മലയാളം"},
{languageNames: "Maltese", symbol: "mt", translation: "Malti"},
{languageNames: "Maori", symbol: "mi", translation: "Maori"},
{languageNames: "Marathi", symbol: "mr", translation: "मराठी"},
{languageNames: "Mongolian", symbol: "mn", translation: "Монгол хэл"},
{languageNames: "Myanmar(Burmese)", symbol: "my", translation: "မြန်မာ (ဗမာ)"},
{languageNames: "Nepali", symbol: "ne", translation: "नेपाली"},
{languageNames: "Norwegian", symbol: "no", translation: "norsk"},
{languageNames: "Nyanja(Chichewa)", symbol: "ny", translation: "Nyanja (Chichewa)"},
{languageNames: "Pashto", symbol: "ps", translation: "پښتو"},
{languageNames: "Persian", symbol: "fa", translation: "فارسی"},
{languageNames: "Polish", symbol: "pl", translation: "Polskie"},
{languageNames: "Portuguese(Portugal, Brazil)", symbol: "pt", translation: "Português (Portugal, Brasil)"},
{languageNames: "Punjabi", symbol: "pa", translation: "ਪੰਜਾਬੀ"},
{languageNames: "Romanian", symbol: "ro", translation: "Română"},
{languageNames: "Russian", symbol: "ru", translation: "русский"},
{languageNames: "Samoan", symbol: "sm", translation: "Samoa"},
{languageNames: "Scots Gaelic", symbol: "gd", translation: "Gàidhlig na h-Alba"},
{languageNames: "Serbian", symbol: "sr", translation: "Српски"},
{languageNames: "Sesotho", symbol: "st", translation: "Sesotho"},
{languageNames: "Shona", symbol: "sn", translation: "Shona"},
{languageNames: "Sindhi", symbol: "sd", translation: "سنڌي"},
{languageNames: "Sinhala(Sinhalese)", symbol: "si", translation: "සිංහල (සිංහල)"},
{languageNames: "Slovak", symbol: "sk", translation: "slovenský"},
{languageNames: "Slovenian", symbol: "sl", translation: "Slovenščina"},
{languageNames: "Somali", symbol: "so", translation: "Somali"},
{languageNames: "Spanish", symbol: "es", translation: "Español"},
{languageNames: "Sundanese", symbol: "su", translation: "Sunda"},
{languageNames: "Swahili", symbol: "sw", translation: "Kiswahili"},
{languageNames: "Swedish", symbol: "sv", translation: "svenska"},
{languageNames: "Tagalog(Filipino)", symbol: "tl", translation: "Tagalog (Filipino)"},
{languageNames: "Tajik", symbol: "tg", translation: "Тоҷикӣ"},
{languageNames: "Tamil", symbol: "ta", translation: "தமிழ்"},
{languageNames: "Telugu", symbol: "te", translation: "తెలుగు"},
{languageNames: "Thai", symbol: "th", translation: "ไทย"},
{languageNames: "Turkish", symbol: "tr", translation: "Türk"},
{languageNames: "Ukrainian", symbol: "uk", translation: "Українська"},
{languageNames: "Urdu", symbol: "ur", translation: "اردو"},
{languageNames: "Uzbek", symbol: "uz", translation: "O'zbek"},
{languageNames: "Vietnamese", symbol: "vi", translation: "Tiếng Việt"},
{languageNames: "Welsh", symbol: "cy", translation: "Cymraeg"},
{languageNames: "Xhosa", symbol: "xh", translation: "isiXhosa"},
{languageNames: "Yiddish", symbol: "yi", translation: "ייִדיש"},
{languageNames: "Yoruba", symbol: "yo", translation: "Yorùbá"},
{languageNames: "Zulu", symbol: "zu", translation: "Zulu"}
];


// database.ref().on("value", function (snapshot) {
//     console.log("working");
//     if (snapshot.child("username").exists() && snapshot.child("password").exists()) {
//         // Pull the variables equal to the stored values if they exist
//         // Set the variables for userName and language equal to the stored values if they exist
//         userName = snapshot.val().userName;
//         language = snapshot.val().language;

//         console.log("username and password stored");
//     } else {


//         ("username and password NOT stored");
//         console.log("username exists is: ");
//         console.log(snapshot.child("username").exists());
//         console.log("password exists is: ");
//         console.log(snapshot.child("password").exists());


//         $("#create-profile").on("click", function () {
//             function Profile() {
//                 console.log("Creating Profile as one was not found");
//                 //grab info from modal input boxes
//                 userName = $("#username").val().trim;
//                 password = $("#password").val().trim;
//                 language = $("#language").val().trim;
//                 email = $("#emailAddress").val().trim;

//                 //set info to database
//                 // post new user info to firebase
//                 database.ref().set({
//                     userName: userName,
//                     password: password,
//                     language: setLanguage,
//                     email: email
//                 });

//                 //push new user to database
//                 database.ref().push(newUser);

//                 console.log("added new user to database");
//                 //alert that user has been added - another modal?
//             }
//             $(document).on("click", "#create-profile", Profile());
//         })
//     };
// });
