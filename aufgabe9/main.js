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
    let toppings = ["Sahne", "Streusel", "Karamellso�e", "Schokoso�e"];
    function init() {
        addFlavours();
        addCups();
        addToppings();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    let cupPreis = 0;
    let topPreis = 0;
    function handleChange(_event) {
        let addPreis = 0;
        let target = _event.target;
        console.log(_event);
        //        let sele: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sel" + );
        console.log(target);
        if (target.type == "checkbox") {
            let cNum = parseInt(target.value.slice(5));
            var e = document.getElementById("sel" + (cNum - 1));
            var strUser = Number(e.options[e.selectedIndex].value); //remove Typecast and "Number" if not working
            //            console.log("check");
            if (target.checked && strUser == 0) {
                e.value = "1";
                e.style.visibility = "visible";
                e.disabled = false;
            }
            if (!target.checked) {
                e.value = "0";
                e.style.visibility = "hidden";
                e.disabled = true;
            }
        }
        if (target.name == "toppinggroup") {
            if (target.value == "radioTop1") {
                topPreis = 0.3;
            }
            if (target.value == "radioTop2") {
                topPreis = 0.2;
            }
            if (target.value == "radioTop3") {
                topPreis = 0.5;
            }
            if (target.value == "radioTop4") {
                topPreis = 0.4;
            }
            let tNum = parseInt(target.value.slice(8));
            document.getElementById("topping").innerText = "Zusatz: " + toppings[tNum - 1];
        }
        if (target.name == "Radiogroup") {
            for (let i = 0; i < toppings.length; i++) {
                (document.getElementById("radioTop" + (i + 1)).disabled) = false;
            }
            for (let i = 0; i < flavours.length; i++) {
                (document.getElementById("check" + (i + 1)).disabled) = false;
                if (target.value == "cone") {
                    cupPreis = 0.5;
                    document.getElementById("cup").innerText = "Beh�lter: Waffel";
                }
                if (target.value == "cup") {
                    cupPreis = 0.2;
                    document.getElementById("cup").innerText = "Beh�lter: Becher";
                }
            }
        }
        let sString = "";
        for (let i = 0; i < flavours.length; i++) {
            let preiszahl = Number(document.getElementById("sel" + (i)).value);
            if (preiszahl > 0) {
                sString += preiszahl + "x " + flavours[i] + "<br>";
            }
            addPreis = (preiszahl + addPreis);
        }
        document.getElementById("preis").innerText = (topPreis + cupPreis + addPreis).toString();
        document.getElementById("flavor").innerHTML = "Sorten: <br>" + sString;
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
        input.value = "cone";
        input2.value = "cup";
        input.style.display = "block";
        input2.style.display = "block";
        input.style.margin = "10% auto";
        input2.style.margin = "10% auto";
        div.appendChild(input);
        div2.appendChild(input2);
    }
    function addToppings() {
        for (let i = 0; i < toppings.length; i++) {
            let div = document.createElement("div");
            let input = document.createElement("input");
            let label = document.createElement("label");
            document.getElementById("toppings").appendChild(div);
            input.id = "radioTop" + (i + 1);
            input.type = "radio";
            input.name = "toppinggroup";
            input.value = "radioTop" + (i + 1);
            input.disabled = true;
            div.style.marginTop = "1vmax";
            div.appendChild(input);
            label.htmlFor = "radioTop" + (i + 1);
            label.innerText = toppings[i];
            div.appendChild(label);
        }
    }
})(a9 || (a9 = {}));
//# sourceMappingURL=main.js.map