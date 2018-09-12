var translatedNames = ["Afrikaans", "shqiptar", "አማርኛ", "عربى", "հայերեն", "български", "čeština", "Euskal", "dansk", "Nederlands", "中國傳統的）", "English", "Català", "简体中文）", "Corsu", "Hrvatski", "বাঙালি", "עִברִית", "Deutsche", "français", "Suomalainen", "Galego", "Ελληνικά", "ગુજરાતી", "Kreyòl Ayisyen", "ʻŌlelo Hawaiʻi", "हिंदी", "Magyar", "ქართული", "Hmoob", "беларускі", "Gaeilge", "Íslensku", "bahasa Indonesia", "italiano", "한국어", "Қазақша", "日本語", "ភាសាខ្មែរ", "ລາວ", "Kurdî", "Lietuviškai", "Latine", "Malagasy", "lëtzebuergesch", "Кыргызча", "norsk", "മലയാളം", "Malti", "नेपाली", "Maori", "Polskie", "فارسی", "پښتو", "русский", "Română", "မြန်မာ (ဗမာ)", "Српски", "سنڌي", "Somali", "svenska", "Español", "தமிழ்", "Kiswahili", "Türk", "ไทย", "Slovenščina", "తెలుగు", "اردو", "Українська", "O'zbek", "Tiếng Việt", "Sunda", "isiXhosa", "Cymraeg", "slovenský", "ייִדיש", "Esperanto", "ಕನ್ನಡ", "Hausa", "Igbo", "Samoa", "Azeerbaijani", "සිංහල (සිංහල)", "Македонски", "Frysk", "Gàidhlig na h-Alba", "Tagalog (Filipino)", "Bosanski", "Shona", "Nyanja (Chichewa)", "Sesotho", "Zulu", "Тоҷикӣ", "Yorùbá", "Melayu", "Монгол хэл", "Wong Jawa", "Cebuano", "मराठी","ਪੰਜਾਬੀ","Português (Portugal, Brasil)","Latviešu","Eesti keel"];

$(document).ready(function(){
    lang();
});

// for loop to put these languages into the language options
function lang() {
    console.log("Languages Added");
    for (var i = 0; i < translatedNames.length; i++) {
        //console.log(supportedLanguages[i].languageNames);
        var options = $("<option>").text(translatedNames[i]);
        $("#languageList").append(options);
    };
};