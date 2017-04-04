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
    function markSquare(_event) {
        console.log(_event);
    }
    //document.body.children[3].children[1].appendChild(document.createElement("div"));
};
//# sourceMappingURL=main.js.map