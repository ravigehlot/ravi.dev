function getStylesheet() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 5) {
        document.write("<link rel='stylesheet' href='css/themes/green-white.css' type='text/css'>");
    }
    if (5 <= currentTime && currentTime < 8) {
        document.write("<link rel='stylesheet' href='css/themes/grey-white.css' type='text/css'>");
    }
    if (8 <= currentTime && currentTime < 11) {
        document.write("<link rel='stylesheet' href='css/themes/indigo-white.css' type='text/css'>");
    }
    if (11 <= currentTime && currentTime < 13) {
        document.write("<link rel='stylesheet' href='css/themes/red-white.css' type='text/css'>");
    }
    if (13 <= currentTime && currentTime < 16) {
        document.write("<link rel='stylesheet' href='css/themes/white-blue.css' type='text/css'>");
    }
    if (16 <= currentTime && currentTime < 19) {
        document.write("<link rel='stylesheet' href='css/themes/white-grey.css' type='text/css'>");
    }
    if (19 <= currentTime && currentTime < 22) {
        document.write("<link rel='stylesheet' href='css/themes/white-indigo.css' type='text/css'>");
    }
    if (22 <= currentTime && currentTime < 23) {
        document.write("<link rel='stylesheet' href='css/themes/white-red.css' type='text/css'>");
    }
    if (23 <= currentTime && currentTime <= 24) {
        document.write("<link rel='stylesheet' href='css/themes/yellow-black.css' type='text/css'>");
    }
}

getStylesheet();