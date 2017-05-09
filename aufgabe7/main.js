/*
Aufgabe: Aufgabe 5
Name: Braun Dominik
Matrikel: 254901
Datum: 30.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a7;
(function (a7) {
    window.addEventListener("load", init);
    let bees = [];
    let stockposX = 320;
    let stockposY = 355;
    let saveBG;
    function init() {
        a7.canvas = document.createElement("canvas");
        a7.canvas.height = 450;
        a7.canvas.width = 700;
        document.body.appendChild(a7.canvas);
        a7.crc = a7.canvas.getContext("2d");
        buildBackground();
        //Manuelle Blumen
        drawRandomFlower(45, 320);
        drawRandomFlower(10, 440);
        drawRandomFlower(200, 370);
        //Blumenwiese
        placeFlowersIn(400, 300, 700, 450);
        //Save Background        
        saveBG = a7.crc.getImageData(0, 0, a7.canvas.width, a7.canvas.height);
        console.log(saveBG);
        //Biene
        for (let i = 0; i < 10; i++) {
            let bee = new a7.Bee(stockposX, stockposY);
            bees.push(bee);
        }
        a7.canvas.addEventListener("click", function () {
            bees.push(new a7.Bee(stockposX, stockposY));
        });
        console.log(bees);
        animate();
    }
    function animate() {
        a7.crc.putImageData(saveBG, 0, 0);
        for (let i = 0; i < bees.length; i++) {
            let bee = bees[i];
            bee.update();
        }
        setTimeout(animate, 20);
    }
    function getRndNumber(min, max) {
        let x = Math.random() * (max - min) + min;
        return x;
    }
    a7.getRndNumber = getRndNumber;
    function buildBackground() {
        //Himmel
        a7.crc.fillStyle = "#a9c5f2";
        a7.crc.fillRect(0, 0, a7.canvas.width, a7.canvas.height);
        //Berg
        a7.crc.beginPath();
        a7.crc.fillStyle = "grey";
        a7.crc.moveTo(0 - 10, 250 + 10);
        a7.crc.lineTo(200, 50 - 10);
        a7.crc.lineTo(500 + 10, 300 + 10);
        a7.crc.closePath();
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.fillStyle = "white";
        a7.crc.moveTo(172 - 10, 70 + 10);
        a7.crc.lineTo(200, 50 - 10);
        a7.crc.lineTo(236 + 10, 70 + 10);
        a7.crc.closePath();
        a7.crc.fill();
        //Wolken
        drawCloud(400, 75);
        drawCloud(600, 90);
        drawCloud(510, 0);
        //Wiese
        a7.crc.fillStyle = "#32722c";
        a7.crc.fillRect(0, 300, 700, 150);
        a7.crc.beginPath();
        a7.crc.fillStyle = "#32722c";
        a7.crc.ellipse(100, 300, 350, 50, 3 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.ellipse(600, 340, 200, 60, 5 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.closePath();
        a7.crc.fill();
        //Baumstamm
        a7.crc.beginPath();
        a7.crc.fillStyle = "#7F5019";
        a7.crc.moveTo(50, 400);
        a7.crc.lineTo(100, 350);
        a7.crc.lineTo(150, 400);
        a7.crc.fillRect(80, 200, 40, 200);
        a7.crc.closePath();
        a7.crc.fill();
        //Baumkrone
        a7.crc.beginPath();
        a7.crc.fillStyle = "#277F00";
        a7.crc.arc(50, 200, 50, 0, 2 * Math.PI);
        a7.crc.arc(25, 150, 50, 0, 2 * Math.PI);
        a7.crc.arc(50, 100, 50, 0, 2 * Math.PI);
        a7.crc.arc(100, 75, 50, 0, 2 * Math.PI);
        a7.crc.arc(150, 100, 50, 0, 2 * Math.PI);
        a7.crc.arc(175, 150, 50, 0, 2 * Math.PI);
        a7.crc.arc(150, 200, 50, 0, 2 * Math.PI);
        a7.crc.arc(100, 150, 50, 0, 2 * Math.PI);
        a7.crc.closePath();
        a7.crc.fill();
        // Bienenkorb
        a7.crc.beginPath();
        a7.crc.fillStyle = "#FFCD0A";
        a7.crc.ellipse(320, 355, 10, 60, 90 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.ellipse(320, 340, 10, 56, 90 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.ellipse(320, 325, 10, 45, 90 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.ellipse(320, 310, 10, 40, 90 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.ellipse(320, 295, 10, 30, 90 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.ellipse(320, 280, 10, 20, 90 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.fillStyle = "black";
        a7.crc.ellipse(320, 361, 10, 15, 0 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.fillStyle = "#FFCD0A";
        a7.crc.ellipse(320, 370, 10, 62, 90 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.fill();
    }
    function drawCloud(x, y) {
        a7.crc.beginPath();
        a7.crc.fillStyle = "white";
        a7.crc.arc(x, y, 35, 0, 2 * Math.PI);
        a7.crc.arc(x + 30, y + 5, 28, 0, 2 * Math.PI);
        a7.crc.arc(x, y + 15, 31, 0, 2 * Math.PI);
        a7.crc.arc(x - 30, y + 10, 25, 0, 2 * Math.PI);
        a7.crc.fill();
    }
    //Einfache Variante von drawFlower3
    function drawflower1(x, y) {
        a7.crc.beginPath();
        a7.crc.fillStyle = "green";
        a7.crc.fillRect(x, y, 4, -40);
        a7.crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.fillStyle = "white";
        for (let i = 0; i < 6; i++) {
            a7.crc.ellipse(x + 2, y - 45, 3, 15, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
        }
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.fillStyle = "yellow";
        a7.crc.arc(x + 2, y - 45, 5, 0, 2 * Math.PI);
        a7.crc.fill();
    }
    //Rote Blume
    function drawflower2(x, y) {
        a7.crc.beginPath();
        a7.crc.fillStyle = "rgba(53, 195, 40, 0.5)";
        a7.crc.fillRect(x, y, 4, -40);
        a7.crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.fillStyle = "rgba(219, 0, 7,0.8)";
        a7.crc.ellipse(x + 2, y - 45, 11, 13, 1 * Math.PI / 180, 0, 1 * Math.PI);
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.fillStyle = "rgba(219, 0, 7,0.8)";
        a7.crc.moveTo(x - 9, y - 50 + 5);
        a7.crc.lineTo(x - 9, y - 50 - 5);
        a7.crc.lineTo(x - 1, y - 50 + 5);
        a7.crc.closePath();
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.lineTo(x - 4, y - 50 + 5);
        a7.crc.lineTo(x + 2, y - 50 - 5);
        a7.crc.lineTo(x + 7, y - 50 + 5);
        a7.crc.closePath();
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.lineTo(x + 4, y - 50 + 5);
        a7.crc.lineTo(x + 13, y - 50 - 5);
        a7.crc.lineTo(x + 13, y - 50 + 5);
        a7.crc.closePath();
        a7.crc.fill();
    }
    //Generiert eine Blume mit zuf�lligen Blumenkopf
    function drawflower3(x, y) {
        let rnd1 = Math.random() * (6 - 2) + 2;
        let rnd2 = Math.random() * (18 - 12) + 12;
        let rndColor = Math.random() * 359;
        let rndColorDot = Math.random() * (63 - 26) + 26;
        a7.crc.beginPath();
        a7.crc.fillStyle = "rgba(53, 195, 40, 0.5)";
        a7.crc.fillRect(x, y, 4, -40);
        a7.crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.fillStyle = "hsla(" + rndColor + ", 100%, 50%,0.8)";
        for (let i = 0; i < 6; i++) {
            a7.crc.ellipse(x + 2, y - 45, rnd1, rnd2, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
        }
        a7.crc.fill();
        a7.crc.beginPath();
        a7.crc.fillStyle = "hsla(" + rndColorDot + ", 100%, 50%,0.8)";
        a7.crc.arc(x + 2, y - 45, 5, 0, 2 * Math.PI);
        a7.crc.fill();
    }
    //Zeichnet eine Blume
    function drawRandomFlower(x, y) {
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
            drawRandomFlower(rndX, rndY);
        }
    }
})(a7 || (a7 = {}));
//# sourceMappingURL=main.js.map