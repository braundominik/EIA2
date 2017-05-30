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
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        //        let sele: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sel" + );
        //        console.log(_event);
        //        if (target.type == "checkbox") {
        //            console.log("check");
        //            if (target.checked && parseFloat(sele.value) == 0) {
        //               sele.value = "1";
        //            }
        //        }
    }
    function addFlavours() {
        for (let i = 0; i < flavours.length; i++) {
            let div = document.createElement("div");
            let div2 = document.createElement("div");
            let input = document.createElement("input");
            let label = document.createElement("label");
            let step = document.createElement("input");
            let sel = document.createElement("select");
            document.getElementById("flavours").appendChild(div);
            input.id = "check" + (i + 1);
            input.type = "checkbox";
            input.name = "Checkbox" + (i + 1);
            input.value = "check" + (i + 1);
            div.appendChild(input);
            label.htmlFor = "check" + (i + 1);
            label.innerText = flavours[i];
            div.appendChild(label);
            div2.style.cssFloat = "right";
            div2.style.width = "2vw";
            div.appendChild(div2);
            //            step.type = "number";
            //            step.name = "Stepper" + i + 1;
            //            step.value = "0";
            //            step.step = "1";
            //            step.min = "0";
            //            step.max = "10";
            //            step.style.width = "2vw";
            //            step.style.cssFloat = "right";
            //            step.disabled = true;
            //            div2.appendChild(step);
            sel.id = "sel" + i;
            div2.appendChild(sel);
            for (let x = 0; x < 6; x++) {
                let opt = document.createElement("option");
                opt.value = "" + x;
                opt.innerText = "" + x;
                sel.appendChild(opt);
            }
        }
    }
})(a9 || (a9 = {}));
//# sourceMappingURL=main.js.map