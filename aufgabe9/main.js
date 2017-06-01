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
    let flavours = ["Kirsche", "Erdbeere", "Vanille", "Banane", "Schokolade", "Zitrone", "Pistazie", "Joghurt", "Heidelbeere", "Mango", "Walnuss", "Haselnuss", "Himbeere"];
    function init() {
        addFlavours();
        addCups();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        let preis = 0;
        let target = _event.target;
        console.log(_event);
        //        let sele: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sel" + );
        console.log(target);
        if (target.type == "checkbox") {
            let cNum = parseInt(target.value.slice(5));
            var e = document.getElementById("sel" + (cNum - 1));
            var strUser = e.options[e.selectedIndex].value;
            //            console.log("check");
            if (target.checked && strUser == 0) {
                e.value = "1";
                e.style.visibility = "visible";
                e.disabled = false;
            }
            if (!target.checked && strUser > 0) {
                e.value = "0";
                e.style.visibility = "hidden";
                e.disabled = true;
            }
        }
        if (target.name == "Radiogroup") {
            for (let i = 0; i < flavours.length; i++) {
                (document.getElementById("check" + (i + 1)).disabled) = false;
            }
        }
        for (let i = 0; i < flavours.length; i++) {
            let preiszahl = Number(document.getElementById("sel" + (i)).value);
            preis = (preiszahl + preis);
            console.log(preis);
        }
        document.getElementById("preis").innerText = preis.toString();
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
            input.disabled = true;
            div.style.marginTop = "1vmax";
            div.appendChild(input);
            label.htmlFor = "check" + (i + 1);
            label.innerText = flavours[i];
            div.appendChild(label);
            div2.style.cssFloat = "right";
            div2.style.width = "2vw";
            div.appendChild(div2);
            sel.style.visibility = "hidden";
            sel.disabled = true;
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
    function addCups() {
        let img = new Image();
        let img2 = new Image();
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let input = document.createElement("input");
        let label = document.createElement("label");
        let input2 = document.createElement("input");
        let label2 = document.createElement("label");
        //        label.htmlFor = "check" + (i + 1);
        //        label.innerText = flavours[i];
        //        div.appendChild(label);
        //        div2.style.cssFloat = "right";
        //        div2.style.width = "2vw";
        //        div.appendChild(div2);
        //
        //        sel.style.visibility = "hidden";
        //        sel.disabled = true;
        //        sel.id = "sel" + i;
        label.htmlFor = "radio1";
        label2.htmlFor = "radio2";
        document.getElementById("cups").appendChild(label);
        document.getElementById("cups").appendChild(label2);
        div.style.position = "relative";
        div.style.cssFloat = "left";
        div.style.left = "1vw";
        div.style.top = "10vh";
        div.appendChild(img);
        img.style.height = "13vmax";
        img.src = "cone.png";
        div2.style.position = "relative";
        div2.style.cssFloat = "left";
        div2.style.left = "3vw";
        div2.style.top = "10vh";
        div2.appendChild(img2);
        img2.style.height = "13vmax";
        img2.src = "cup.png";
        label.appendChild(div);
        label2.appendChild(div2);
        input.id = "radio1";
        input2.id = "radio2";
        input.type = "radio";
        input2.type = "radio";
        input.name = "Radiogroup";
        input2.name = "Radiogroup";
        input.value = "radio1";
        input2.value = "radio2";
        input.style.display = "block";
        input2.style.display = "block";
        input.style.margin = "10% auto";
        input2.style.margin = "10% auto";
        div.appendChild(input);
        div2.appendChild(input2);
    }
})(a9 || (a9 = {}));
//# sourceMappingURL=main.js.map