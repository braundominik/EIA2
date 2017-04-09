/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
window.onload = function () {
    let alterDiv = null;
    var evenRow = true;
    for (let i = 0; i < 64; i++) {
        var div = document.createElement("div");
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
        var reis = Math.pow(2, i);
        var reisN = reis.toString();
        div.textContent = reisN;
        document.body.appendChild(div);
    }
    let myDiv = document.getElementsByTagName("div");
    for (let i = 0; i < 8; i++) {
        myDiv[i].addEventListener("click", markSquare);
    }
    var checkLast = true;
    var lastSquare = null;
    var reisDiv = "nicht";
    let activeCount = 0;
    function markSquare(_event) {
        let bDiv = _event.target;
        if (bDiv.style.border == "") {
            bDiv.style.border = "0.55vmin solid orange";
            bDiv.style.height = "10vmin";
            bDiv.style.width = "10vmin";
            bDiv.style.lineHeight = "10vmin";
            reisDiv = bDiv.textContent;
            document.addEventListener("mousemove", elFollow);
            activeCount++;
        }
        else {
            bDiv.style.border = "";
            bDiv.style.height = "11vmin";
            bDiv.style.width = "11vmin";
            bDiv.style.lineHeight = "11vmin";
            alterDiv = null;
            activeCount--;
            let delDiv = document.getElementById("displaydiv");
            for (let i = 0; i < 8; i++) {
                if (activeCount == 0) {
                    delDiv.parentElement.removeChild(delDiv);
                    document.removeEventListener("mousemove", elFollow);
                }
                else {
                    delDiv.parentElement.removeChild(delDiv);
                }
            }
        }
        // Code der nicht ben�tigt wird
        //        if (lastSquare != null && bDiv != lastSquare) {
        //            lastSquare.style.border = "";
        //            lastSquare.style.height = "11vmin";
        //            lastSquare.style.width = "11vmin";
        //            lastSquare.style.lineHeight = "11vmin";
        //        }
        //
        //      
        //        if (bDiv != lastSquare) {
        //            console.log("NICHT");
        //            console.log(bDiv);
        //            console.log(lastSquare);
        //        }
        //
        //        if (bDiv == lastSquare) {
        //            console.log("JA");
        //            console.log(bDiv);
        //            console.log(lastSquare);
        //        }
        //
        //        lastSquare = bDiv;
    }
    function elFollow(_event) {
        let neuerDiv = document.createElement("div");
        neuerDiv.id = "displaydiv";
        document.body.appendChild(neuerDiv);
        if (alterDiv != null) {
            document.body.removeChild(alterDiv);
        }
        alterDiv = neuerDiv;
        let s = neuerDiv.style;
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
        let zahl = 0;
        for (let i = 0; i < 8; i++) {
            if (myDiv[i].style.border != "") {
                zahl += Number(myDiv[i].textContent);
            }
        }
        let reisHex = zahl.toString(16);
        neuerDiv.textContent = "Dec: " + zahl + " Hex: " + reisHex;
    }
};
//# sourceMappingURL=main.js.map