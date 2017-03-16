/*
Aufgabe: Aufgabe 1
Name: Braun Dominik
Matrikel: 254901
Datum: 15.03.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/


document.addEventListener('DOMContentLoaded', function() {

    var name: string;
    name = prompt("Bitte gebe deinen Namen ein");

    if (name != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Hallo " + name;
    }


});