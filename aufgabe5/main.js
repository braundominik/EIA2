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
    let canvas;
    function init() {
        canvas = document.createElement("canvas");
        canvas.height = 450;
        canvas.width = 700;
        document.body.appendChild(canvas);
        crc = canvas.getContext("2d");
        buildBackground();
        placeFlowersIn(200, 300, 700, 450);
    }
    function buildBackground() {
        crc.fillStyle = "#a9c5f2";
        crc.fillRect(0, 0, canvas.width, canvas.height);
        crc.beginPath();
        crc.fillStyle = "grey";
        crc.moveTo(0 - 10, 250 + 10);
        crc.lineTo(200, 50 - 10);
        crc.lineTo(500 + 10, 300 + 10);
        crc.closePath();
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "white";
        crc.moveTo(172 - 10, 70 + 10);
        crc.lineTo(200, 50 - 10);
        crc.lineTo(236 + 10, 70 + 10);
        crc.closePath();
        crc.fill();
        drawCloud(400, 75);
        drawCloud(600, 90);
        drawCloud(510, 0);
        crc.fillStyle = "#32722c";
        crc.fillRect(0, 300, 700, 150);
        crc.beginPath();
        crc.fillStyle = "#32722c";
        crc.ellipse(100, 300, 350, 50, 3 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(600, 340, 200, 60, 5 * Math.PI / 180, 0, 2 * Math.PI);
        crc.closePath();
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "brown";
        crc.moveTo(50 - 10, 350 + 10);
        crc.lineTo(100, 200 - 10);
        crc.lineTo(150 + 10, 350 + 10);
        crc.closePath();
        crc.fill();
    }
    function drawCloud(x, y) {
        crc.beginPath();
        crc.fillStyle = "white";
        crc.arc(x, y, 35, 0, 2 * Math.PI);
        crc.arc(x + 30, y + 5, 28, 0, 2 * Math.PI);
        crc.arc(x, y + 15, 31, 0, 2 * Math.PI);
        crc.arc(x - 30, y + 10, 25, 0, 2 * Math.PI);
        crc.fill();
    }
    function drawflower1(x, y) {
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
    function drawflower2(x, y) {
        crc.beginPath();
        crc.fillStyle = "rgba(53, 195, 40, 0.5)";
        crc.fillRect(x, y, 4, -40);
        crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "rgba(219, 0, 7,0.8)";
        crc.ellipse(x + 2, y - 45, 11, 13, 1 * Math.PI / 180, 0, 1 * Math.PI);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "rgba(219, 0, 7,0.8)";
        crc.moveTo(x - 9, y - 50 + 5);
        crc.lineTo(x - 9, y - 50 - 5);
        crc.lineTo(x - 1, y - 50 + 5);
        crc.closePath();
        crc.fill();
        crc.beginPath();
        crc.lineTo(x - 4, y - 50 + 5);
        crc.lineTo(x + 2, y - 50 - 5);
        crc.lineTo(x + 7, y - 50 + 5);
        crc.closePath();
        crc.fill();
        crc.beginPath();
        crc.lineTo(x + 4, y - 50 + 5);
        crc.lineTo(x + 13, y - 50 - 5);
        crc.lineTo(x + 13, y - 50 + 5);
        crc.closePath();
        crc.fill();
    }
    function drawflower3(x, y) {
        let rnd1 = Math.random() * (6 - 2) + 2;
        let rnd2 = Math.random() * (18 - 12) + 12;
        let rndColor = Math.random() * 359;
        let rndColorDot = Math.random() * (63 - 26) + 26;
        crc.beginPath();
        crc.fillStyle = "rgba(53, 195, 40, 0.5)";
        crc.fillRect(x, y, 4, -40);
        crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "hsla(" + rndColor + ", 100%, 50%,0.8)";
        for (let i = 0; i < 6; i++) {
            crc.ellipse(x + 2, y - 45, rnd1, rnd2, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "hsla(" + rndColorDot + ", 100%, 50%,0.8)";
        crc.arc(x + 2, y - 45, 5, 0, 2 * Math.PI);
        crc.fill();
    }
    function randomFlower(x, y) {
        let rnd = Math.random();
        if (rnd < 0.8) {
            drawflower3(x, y);
        }
        else {
            drawflower2(x, y);
        }
    }
    function placeFlowersIn(upperLeftx, upperLefty, lowerRightx, lowerRighty) {
        for (let f = 0; f < 20; f++) {
            let rndX = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
            let rndY = Math.random() * (lowerRighty - upperLefty) + upperLefty;
            randomFlower(rndX, rndY);
        }
    }
})(a5 || (a5 = {}));
//# sourceMappingURL=main.js.map