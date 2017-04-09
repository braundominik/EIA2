/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

window.onload = function(): void {
    let alterDiv: HTMLDivElement = null;
    var evenRow: boolean = true;
    for (let i: number = 0; i < 64; i++) {
        var div: HTMLDivElement = document.createElement("div");

        if (i % 8 == 0) {
            div.className += " floating";
            evenRow = !evenRow;
        }

        if ((i + 1) % 2 == 0 && !evenRow) {
            div.className += " black";
        }

        if (i % 2 == 0 && evenRow) {
            div.className += " black";
        }

        var reis: number = Math.pow(2, i);
        var reisN: string = reis.toString();

        div.textContent = reisN;
        document.body.appendChild(div);
    }

    let myDiv: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
    for (let i: number = 0; i < 8; i++) {
        myDiv[i].addEventListener("click", markSquare);
    }

    var checkLast: boolean = true;
    var lastSquare: HTMLDivElement = null;
    var reisDiv: string = "nicht";
    function markSquare(_event: Event): void {
        let bDiv: HTMLDivElement = <HTMLDivElement>_event.target;


        if (bDiv.style.border == "") {
            bDiv.style.border = "0.55vmin solid orange";
            bDiv.style.height = "10vmin";
            bDiv.style.width = "10vmin";
            bDiv.style.lineHeight = "10vmin";
            reisDiv = bDiv.textContent;
            document.addEventListener("mousemove", elFollow);
        }

        else {
            bDiv.style.border = "";
            bDiv.style.height = "11vmin";
            bDiv.style.width = "11vmin";
            bDiv.style.lineHeight = "11vmin";
            alterDiv = null;
            let delDiv: HTMLElement = document.getElementById("displaydiv");
            delDiv.parentElement.removeChild(delDiv);
            document.removeEventListener("mousemove", elFollow);


        }

        if (lastSquare != null && bDiv != lastSquare) {
            lastSquare.style.border = "";
            lastSquare.style.height = "11vmin";
            lastSquare.style.width = "11vmin";
            lastSquare.style.lineHeight = "11vmin";
        }



        //        if (lastSquare != null && lastSquare.style.border == "0.5vmin solid orange") {
        //            lastSquare.style.border = "";
        //            lastSquare.style.height = "11vmin";
        //            lastSquare.style.width = "11vmin";
        //            lastSquare.style.lineHeight = "11vmin";
        //        }        
        if (bDiv != lastSquare) {
            console.log("NICHT");
            console.log(bDiv);
            console.log(lastSquare);
        }

        if (bDiv == lastSquare) {
            console.log("JA");
            console.log(bDiv);
            console.log(lastSquare);
        }

        lastSquare = bDiv;

    }


    function elFollow(_event: MouseEvent): void {
        let neuerDiv: HTMLDivElement = document.createElement("div");
        neuerDiv.id = "displaydiv";
        document.body.appendChild(neuerDiv);

        if (alterDiv != null) {
            document.body.removeChild(alterDiv);
        }

        alterDiv = neuerDiv;

        console.log(_event.screenX);


        let s: CSSStyleDeclaration = neuerDiv.style;

        s.color = "black";
        s.borderStyle = "solid";
        s.borderColor = "green";
        s.borderWidth = "2px";
        s.position = "absolute";
        s.display = "inline-block";
        s.backgroundColor = "white";
        s.width = "100px";
        s.height = "20px";
        s.left = (_event.clientX + 10).toString() + "px";
        s.top = (_event.clientY + 10).toString() + "px";
        s.zIndex = "9999999";
        s.lineHeight = "20px";

        let reisHex: string = Number(reisDiv).toString(16);
        neuerDiv.textContent = "Dec: " + reisDiv + " Hex: " + reisHex;
    }

    //document.body.children[3].children[1].appendChild(document.createElement("div"));

};