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
        var reisN = reis.toExponential(5);
        div.textContent = reisN;
        document.body.appendChild(div);
    }
    let myDiv = document.getElementsByTagName("div");
    for (let i = 0; i < 8; i++) {
        myDiv[i].addEventListener("click", markSquare);
    }
    var checkLast = true;
    var lastSquare = null;
    function markSquare(_event) {
        let bDiv = _event.target;
        if (bDiv.style.border == "") {
            bDiv.style.border = "0.5vmin solid orange";
            bDiv.style.height = "10vmin";
            bDiv.style.width = "10vmin";
            bDiv.style.lineHeight = "10vmin";
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
    function elFollow(_event) {
        console.log(_event);
    }
    //document.body.children[3].children[1].appendChild(document.createElement("div"));
};
//# sourceMappingURL=main.js.map