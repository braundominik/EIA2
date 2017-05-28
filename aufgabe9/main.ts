/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace a9 {
    window.addEventListener("load", init);
    let flavours: string[] = ["Kirsche", "Erdbeere", "Vanille", "Banane", "Schokolade", "Zitrone"];


    function init(): void {



        addFlavours();


    }

    function addFlavours(): void {
        for (let i: number = 0; i < flavours.length; i++) {
            let div: HTMLDivElement = document.createElement("div");
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
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


}