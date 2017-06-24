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
    let toppings = ["kein", "Sahne", "Streusel", "Karamellsosse", "Schokososse"];
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
        console.log(_event);
        let checkEven = true;
        let addPreis = 0;
        let target = _event.target;
        console.log(target.name);
        if (target.name == "address" || target.name == "lastname" || target.name == "prename" || target.name == "mail") {
            let inputs = document.getElementById("center").getElementsByTagName("input");
            let allFieldsFilled = true;
            document.getElementById("errors").innerText = "";
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value == "") {
                    allFieldsFilled = false;
                    document.getElementById("errors").innerHTML += "Bitte fuelle das Feld " + inputs[i].name + " aus" + "<br>";
                }
                if (inputs[i].name == "mail") {
                    if (target.validationMessage == "") {
                    }
                    else {
                        allFieldsFilled = false;
                        document.getElementById("errors").innerHTML += target.validationMessage + "<br>";
                    }
                }
            }
            if (allFieldsFilled == true) {
                document.getElementById("sendbutton").style.backgroundColor = "green";
            }
            else {
                document.getElementById("sendbutton").style.backgroundColor = "red";
            }
        }
        if (target.type == "checkbox") {
            let cNum = parseInt(target.id.slice(5));
            var e = document.getElementById("sel" + (cNum - 1));
            var strUser = Number(e.options[e.selectedIndex].value); //remove Typecast and "Number" if not working
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
        if (target.localName == "select") {
            let cNum = parseInt(target.id.slice(3));
            let e = document.getElementById("check" + (cNum + 1));
            console.log(target.selectedIndex);
            e.value += " " + (target.selectedIndex).toString();
            console.log(e.value);
        }
        if (target.name == "toppings") {
            if (target.value == "kein") {
                topPreis = 0.0;
            }
            if (target.value == "Sahne") {
                topPreis = 0.3;
            }
            if (target.value == "Streusel") {
                topPreis = 0.2;
            }
            if (target.value == "Karamellsosse") {
                topPreis = 0.5;
            }
            if (target.value == "Schokososse") {
                topPreis = 0.5;
            }
            let tNum = parseInt(target.value.slice(8));
            document.getElementById("topping").innerText = "Zusatz: " + toppings[tNum - 1];
        }
        if (target.name == "Behaelter") {
            for (let i = 0; i < toppings.length; i++) {
                (document.getElementById("radioTop" + (i + 1)).disabled) = false;
            }
            for (let i = 0; i < flavours.length; i++) {
                (document.getElementById("check" + (i + 1)).disabled) = false;
                if (target.value == "Waffel") {
                    cupPreis = 0.5;
                    document.getElementById("cup").innerText = "Beh�lter: Waffel";
                }
                if (target.value == "Becher") {
                    cupPreis = 0.2;
                    document.getElementById("cup").innerText = "Beh�lter: Becher";
                }
            }
        }
        let sString = "";
        for (let i = 0; i < flavours.length; i++) {
            let preiszahl = Number(document.getElementById("sel" + (i)).value);
            if (preiszahl > 0) {
                if (checkEven) {
                    sString += "<tr>" + "<td>" + preiszahl + "x " + flavours[i] + "</td>";
                }
                if (!checkEven) {
                    sString += "<td>" + preiszahl + "x " + flavours[i] + "</td>" + "</tr>";
                }
                checkEven = !checkEven;
                console.log(checkEven);
                console.log(sString);
            }
            addPreis = (preiszahl + addPreis);
        }
        document.getElementById("preis").innerText = (topPreis + cupPreis + addPreis).toString() + " Euro";
        document.getElementById("flavor").innerHTML = "Sorten: <br>" + "<table>" + sString + "</table>";
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
            input.name = "sorte";
            input.value = flavours[i];
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
            sel.name = "num" + flavours[i];
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
        input.name = "Behaelter";
        input2.name = "Behaelter";
        input.value = "Waffel";
        input2.value = "Becher";
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
            input.name = "toppings";
            input.value = toppings[i];
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