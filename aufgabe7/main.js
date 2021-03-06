/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a7;
(function (a7) {
    window.addEventListener("load", init);
    let bees = [];
    let saveBG;
    a7.flowers = [];
    a7.beehive = new a7.Hive();
    function init() {
        a7.canvas = document.createElement("canvas");
        a7.canvas.height = 450;
        a7.canvas.width = 700;
        document.body.appendChild(a7.canvas);
        a7.crc = a7.canvas.getContext("2d");
        buildBackground();
        a7.beehive.draw();
        //Blumenwiese
        placeFlowersIn(400, 300, 700, 450);
        //Save Background        
        saveBG = a7.crc.getImageData(0, 0, a7.canvas.width, a7.canvas.height);
        console.log(saveBG);
        //Bienen
        for (let i = 0; i < 10; i++) {
            let bee = new a7.Bee(a7.beehive.x, a7.beehive.y);
            bees.push(bee);
        }
        a7.canvas.addEventListener("click", function () {
            bees.push(new a7.Bee(a7.beehive.x, a7.beehive.y));
        });
        console.log(bees);
        for (let e = 0; e < 10; e++) {
            let position = getPosIn(400, 300, 700, 450);
            a7.flowers.push(new a7.Flower(position[0], position[1], 1));
        }
        console.log(a7.flowers);
        //        bees[1].status = "targetting";
        //        bees[1].target[0] = flowers[2].positionX;
        //        bees[1].target[1] = flowers[2].positionY;
        animate();
    }
    let count = 0;
    function animate() {
        document.getElementsByTagName("div")[0].innerHTML = "";
        a7.crc.putImageData(saveBG, 0, 0);
        for (let e = 0; e < a7.flowers.length; e++) {
            a7.flowers[e].draw();
        }
        for (let i = 0; i < bees.length; i++) {
            let bee = bees[i];
            showInfo(i);
            bee.update();
        }
        showInfo(666);
        //When count == 300 idling bees will randomly be selected to target a flower
        count++;
        if (count == 300) {
            for (let n = 0; n < bees.length; n++) {
                if (Math.round(Math.random())) {
                    if (bees[n].status == "idle") {
                        let cFlower = Math.round(Math.random() * (a7.flowers.length - 1));
                        //The Flower needs to have enough nectar for a least 1 tick
                        if (a7.flowers[cFlower].nectar > 0.02) {
                            bees[n].targetIndex = cFlower;
                            bees[n].target[0] = a7.flowers[cFlower].positionX;
                            bees[n].target[1] = a7.flowers[cFlower].positionY;
                            bees[n].status = "targeting";
                        }
                    }
                }
            }
            count = 0;
        }
        setTimeout(animate, 20);
    }
    function getRndNumber(min, max) {
        let x = Math.random() * (max - min) + min;
        return x;
    }
    a7.getRndNumber = getRndNumber;
    function showInfo(x) {
        if (x == 666) {
            let flowernectar = 0;
            for (let e = 0; e < a7.flowers.length; e++) {
                flowernectar += a7.flowers[e].nectar;
            }
            document.getElementsByTagName("div")[0].innerHTML += "Nectar Flowers = " + flowernectar.toFixed(2) + "<br>";
            document.getElementsByTagName("div")[0].innerHTML += "Nectar Hive = " + (a7.beehive.nectar).toFixed(2);
        }
        else {
            document.getElementsByTagName("div")[0].innerHTML += "Status Bee " + x + " &nbsp;= " + bees[x].status + "<br>";
            document.getElementsByTagName("div")[0].innerHTML += "Nectar Bee " + x + " = " + (bees[x].nectar).toFixed(2) + "<br>";
        }
    }
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
    function placeFlowersIn(upperLeftx, upperLefty, lowerRightx, lowerRighty) {
        for (let f = 0; f < 5; f++) {
            let rndX = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
            let rndY = Math.random() * (lowerRighty - upperLefty) + upperLefty;
            let rndType = Math.round(Math.random());
            new a7.Flower(rndX, rndY, rndType).draw();
        }
    }
    function getPosIn(upperLeftx, upperLefty, lowerRightx, lowerRighty) {
        let rndX = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
        let rndY = Math.random() * (lowerRighty - upperLefty) + upperLefty;
        return new Array(rndX, rndY);
    }
})(a7 || (a7 = {}));
//# sourceMappingURL=main.js.map