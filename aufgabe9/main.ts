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

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log(_event);
        //        let sele: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sel" + );
        console.log(target);
        if (target.type == "checkbox") {
            let cNum: number = parseInt(target.value.slice(5));
            var e: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sel" + (cNum-1));
            var strUser = e.options[e.selectedIndex].value;
            //            console.log("check");
            if (target.checked && strUser == 0) {
                e.value = "1";
            }
        }
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
            for (let x: number = 0; x < 6; x++) {
                let opt: HTMLOptionElement = document.createElement("option");
                opt.value = "" + x;
                opt.innerText = "" + x;
                sel.appendChild(opt);
            }


        }
    }


}