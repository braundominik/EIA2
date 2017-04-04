window.onload = function(): void {
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
        var reisN: string = reis.toExponential(5);
        div.textContent = reisN;
        document.body.appendChild(div);
    }

    let myDiv: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
    for (let i: number = 0; i < 8; i++) {
        myDiv[i].addEventListener("click", markSquare);
    }

    function markSquare(_event: Event): void {
        let bDiv: HTMLDivElement = <HTMLDivElement>_event.target;
        bDiv.style.border = "5px solid black";
        console.log(_event);
    }

    //document.body.children[3].children[1].appendChild(document.createElement("div"));

}