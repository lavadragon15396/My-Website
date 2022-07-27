window.onload = function() {
    function detectBrowser() {
        if (
            (navigator.userAgent.indexOf("Opera") ||
                navigator.userAgent.indexOf("OPR")) != -1
        ) {
            return "Opera";
        } else if (navigator.userAgent.indexOf("Chrome") != -1) {
            return "Chrome";
        } else if (navigator.userAgent.indexOf("Safari") != -1) {
            return "Safari";
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return "Firefox";
        } else if (
            navigator.userAgent.indexOf("MSIE") != -1 ||
            !!document.documentMode == true
        ) {
            return "IE"; //crap
        } else {
            return "Unknown";
        }
    }
    
    var userLanguage = window.navigator.userLanguage || window.navigator.language;
    var userLang = navigator.language || navigator.userLanguage;
    
    if (userLang == "pl") {
        document.getElementById("title").innerHTML = " Tadeusz Dufort";
        document.getElementById("line1").innerHTML = "Amatorski Programista, Fotograf I Artysta.";
        document.getElementById("line2").innerHTML = "Jeżdżę Na Nartach, Gram W Gry, Robię Sztukę (Rysunek, Malowanie, 3D I Fotografia), Technika, Programowanie, Historią I nauki ścisłe"
    }    
}