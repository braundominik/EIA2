/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a9;
(function (a9) {
    window.addEventListener("load", init);
    let flavours = ["Kirsche", "Erdbeere", "Vanille", "Banane", "Schokolade", "Zitrone"];
    function init() {
        addFlavours();
    }
    function addFlavours() {
        for (let i = 0; i < flavours.length; i++) {
            let div = document.createElement("div");
            let input = document.createElement("input");
            let label = document.createElement("label");
            document.getElementById("flavours").appendChild(div);
            input.type = "checkbox";
            input.name = "Checkbox" + i + 1;
            input.value = "check" + i + 1;
            div.appendChild(input);
            label.htmlFor = "check" + i + 1;
            label.innerText = flavours[i];
            div.appendChild(label);
        }
    }
})(a9 || (a9 = {}));
//# sourceMappingURL=main.js.map