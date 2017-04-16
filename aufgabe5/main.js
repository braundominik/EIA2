/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a5;
(function (a5) {
    window.addEventListener("load", init);
    let crc;
    function init() {
        let canvas;
        canvas = document.createElement("canvas");
        canvas.height = 450;
        canvas.width = 700;
        document.body.appendChild(canvas);
        crc = canvas.getContext("2d");
        crc.fillStyle = "#a9c5f2";
        crc.fillRect(0, 0, canvas.width, canvas.height);
        flower1(200, 200);
    }
    function flower1(x, y) {
        crc.fillStyle = "red";
        crc.fillRect(5, 5, 5, -5);
        crc.beginPath();
        crc.fillStyle = "green";
        crc.fillRect(x, y, 4, -40);
        crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "white";
        for (let i = 0; i < 6; i++) {
            crc.ellipse(x + 2, y - 45, 3, 15, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "yellow";
        crc.arc(x + 2, y - 45, 5, 0, 2 * Math.PI);
        crc.fill();
    }
})(a5 || (a5 = {}));
//# sourceMappingURL=main.js.map