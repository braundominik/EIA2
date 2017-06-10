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
    let flavours: string[] = ["Kirsche", "Erdbeere", "Vanille", "Banane", "Schokolade", "Zitrone", "Pistazie", "Joghurt", "Heidelbeere", "Mango", "Walnuss", "Haselnuss", "Himbeere"];
    let toppings: string[] = ["Sahne", "Streusel", "Karamellsoße", "Schokosoße"];

    function init(): void {
        addFlavours();
        addCups();
        addToppings();

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

    }

    let cupPreis: number = 0;
    let topPreis: number = 0;
    function handleChange(_event: Event): void {
        let addPreis: number = 0;
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log(_event);
        //        let sele: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sel" + );
        console.log(target);
        if (target.type == "checkbox") {
            let cNum: number = parseInt(target.value.slice(5));
            var e: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sel" + (cNum - 1));
            var strUser: number = Number((<HTMLSelectElement>e.options[e.selectedIndex]).value); //remove Typecast and "Number" if not working
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

            let tNum: number = parseInt(target.value.slice(8));
            document.getElementById("topping").innerText = "Zusatz: " + toppings[tNum - 1];
        }

        if (target.name == "Radiogroup") {
            for (let i: number = 0; i < toppings.length; i++) {
                ((<HTMLInputElement>document.getElementById("radioTop" + (i + 1))).disabled) = false;
            }

            for (let i: number = 0; i < flavours.length; i++) {
                ((<HTMLInputElement>document.getElementById("check" + (i + 1))).disabled) = false;
                if (target.value == "cone") {
                    cupPreis = 0.5;
                    document.getElementById("cup").innerText = "Behälter: Waffel";
                }
                if (target.value == "cup") {
                    cupPreis = 0.2;
                    document.getElementById("cup").innerText = "Behälter: Becher";
                }
            }
        }

        let sString: string = "";
        for (let i: number = 0; i < flavours.length; i++) {

            let preiszahl: number = Number((<HTMLInputElement>document.getElementById("sel" + (i))).value);
            if (preiszahl > 0) {
                sString += preiszahl + "x " + flavours[i] + "<br>";
            }
            addPreis = (preiszahl + addPreis);
        }

        document.getElementById("preis").innerText = (topPreis + cupPreis + addPreis).toString();
        document.getElementById("flavor").innerHTML = "Sorten: <br>" + sString;

    }



    function addFlavours(): void {
        for (let i: number = 0; i < flavours.length; i++) {
            let div: HTMLDivElement = document.createElement("div");
            let div2: HTMLDivElement = document.createElement("div");
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
            let step: HTMLInputElement = document.createElement("input");
            let sel: HTMLSelectElement = document.createElement("select");
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
            for (let x: number = 0; x < 6; x++) {
                let opt: HTMLOptionElement = document.createElement("option");
                opt.value = "" + x;
                opt.innerText = "" + x;
                sel.appendChild(opt);
            }


        }
    }

    function addCups(): void {
        let img: HTMLImageElement = new Image();
        let img2: HTMLImageElement = new Image();
        let div: HTMLDivElement = document.createElement("div");
        let div2: HTMLDivElement = document.createElement("div");
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        let input2: HTMLInputElement = document.createElement("input");
        let label2: HTMLLabelElement = document.createElement("label");

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

    function addToppings(): void {
        for (let i: number = 0; i < toppings.length; i++) {
            let div: HTMLDivElement = document.createElement("div");
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
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


}