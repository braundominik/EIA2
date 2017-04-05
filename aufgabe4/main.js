window.onload = function () {
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
        var test = 15;
        var reisN = reis.toString(16);
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
    function markSquare(_event) {
        let bDiv = _event.target;
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
    let alterDiv = null;
    function elFollow(_event) {
        let neuerDiv = document.createElement("div");
        document.body.appendChild(neuerDiv);
        if (alterDiv != null) {
            document.body.removeChild(alterDiv);
        }
        alterDiv = neuerDiv;
        console.log(_event.screenX);
        let s = neuerDiv.style;
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
        neuerDiv.textContent = reisDiv;
    }
    //document.body.children[3].children[1].appendChild(document.createElement("div"));
};
//# sourceMappingURL=main.js.map