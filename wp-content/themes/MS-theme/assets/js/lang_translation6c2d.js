let curr_lang = window.navigator.language;
if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", curr_lang);
}
else {
    curr_lang = localStorage.getItem("language");
}
localize();

function localize () {
    if (curr_lang == 'ru-RU') {
        set_language(curr_lang);
        localStorage.setItem("language", curr_lang);
        curr_lang = 'en-EN';
    }
    else {
        set_language(curr_lang);
        localStorage.setItem("language", curr_lang);
        curr_lang = 'ru-RU';
    }
}

function set_language (language) {
    let lang = ':lang(' + language + ')';
    let hide = '[lang]:not(' + lang + ')';
    let show = '[lang]' + lang;

    document.querySelectorAll(hide).forEach(function (node) {
        node.style.display = 'none';
    });
    document.querySelectorAll(show).forEach(function (node) {
        node.style.display = 'unset';
    });
}