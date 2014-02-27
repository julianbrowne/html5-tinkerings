function log(text) {
    var logDiv = document.getElementById("log");
    var newcontent = document.createElement("p");
    newcontent.innerHTML = text;
    logDiv.appendChild(newcontent);
};