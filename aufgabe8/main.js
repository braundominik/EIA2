/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a8;
(function (a8) {
    window.addEventListener("load", init);
    let bees = [];
    let saveBG;
    a8.flowers = [];
    a8.beehive = new a8.Hive();
    let deathcount = 0;
    function init() {
        a8.canvas = document.createElement("canvas");
        a8.canvas.height = 450;
        a8.canvas.width = 700;
        document.body.prepend(a8.canvas);
        a8.crc = a8.canvas.getContext("2d");
        buildBackground();
        a8.beehive.draw();
        //Blumenwiese
        placeFlowersIn(400, 300, 700, 450);
        //Save Background        
        saveBG = a8.crc.getImageData(0, 0, a8.canvas.width, a8.canvas.height);
        console.log(saveBG);
        //Bienen
        for (let i = 0; i < 10; i++) {
            let bee;
            if (Math.round(Math.random())) {
                bee = new a8.Bee(a8.beehive.x, a8.beehive.y);
            }
            else {
                bee = new a8.Honeybee(a8.beehive.x, a8.beehive.y);
            }
            if (Math.round(Math.random())) {
                bee.richtung = true;
            }
            else {
                bee.richtung = false;
            }
            bees.push(bee);
        }
        document.getElementById("buybee").addEventListener("click", function () {
            if (a8.beehive.nectar > 3) {
                a8.beehive.nectar = a8.beehive.nectar - 3;
                bees.push(new a8.Honeybee(a8.beehive.x, a8.beehive.y));
            }
        });
        console.log(bees);
        for (let e = 0; e < 10; e++) {
            let position = getPosIn(400, 300, 700, 450);
            let rndType = Math.round(Math.random());
            switch (rndType) {
                case 0:
                    a8.flowers.push(new a8.Flower1(position[0], position[1], 1));
                    break;
                case 1:
                    a8.flowers.push(new a8.Flower2(position[0], position[1], 2));
                    break;
                default:
                    console.log(rndType);
                    break;
            }
        }
        console.log(a8.flowers);
        console.log(a8.flowers[1].constructor.name);
        //        bees[1].status = "targetting";
        //        bees[1].target[0] = flowers[2].positionX;
        //        bees[1].target[1] = flowers[2].positionY;
        animate();
    }
    let count = 0;
    function animate() {
        document.getElementById("status").innerHTML = "";
        a8.crc.putImageData(saveBG, 0, 0);
        for (let e = 0; e < a8.flowers.length; e++) {
            a8.flowers[e].draw();
            if (a8.flowers[e].nectar < 1) {
                a8.flowers[e].nectar = 30;
            }
        }
        for (let i = 0; i < bees.length; i++) {
            let bee = bees[i];
            showInfo(i);
            if (bees[i].status == "dead" && bees.length > 1) {
                bees.splice(i, 1);
                deathcount++;
            }
            document.getElementById("status").style.height = bees.length * 20 + 60 + "px";
            bee.update();
        }
        showInfo(666);
        //When count == 300 idling bees will randomly be selected to target a flower
        count++;
        if (count == 300) {
            for (let n = 0; n < bees.length; n++) {
                if (Math.round(Math.random())) {
                    if (bees[n].status == "idle" && bees[n].constructor.name == "Honeybee") {
                        let cFlower = Math.round(Math.random() * (a8.flowers.length - 1));
                        //The Flower needs to have enough nectar for a least 1 tick
                        if (a8.flowers[cFlower].nectar > 0.02) {
                            bees[n].targetIndex = cFlower;
                            bees[n].target[0] = a8.flowers[cFlower].positionX;
                            bees[n].target[1] = a8.flowers[cFlower].positionY;
                            bees[n].status = "targeting";
                        }
                    }
                    00;
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
    a8.getRndNumber = getRndNumber;
    function showInfo(x) {
        if (x == 666) {
            let flowernectar = 0;
            for (let e = 0; e < a8.flowers.length; e++) {
                flowernectar += a8.flowers[e].nectar;
            }
            document.getElementById("status").innerHTML += "Nectar Flowers = " + flowernectar.toFixed(2) + "<br>";
            document.getElementById("status").innerHTML += "Nectar Hive = " + (a8.beehive.nectar).toFixed(2) + "<br>";
            document.getElementById("status").innerHTML += "Dead = " + deathcount;
        }
        else {
            if (bees[x].constructor.name == "Honeybee") {
                document.getElementById("status").innerHTML += "Status Bee " + x + " &nbsp;= " + bees[x].status + "&nbsp;|&nbsp;";
                document.getElementById("status").innerHTML += "Energy Bee " + x + " = " + ((bees[x].energy) / 4).toFixed(0) + "&nbsp;|&nbsp;";
                document.getElementById("status").innerHTML += "Nectar Bee " + x + " = " + (bees[x].nectar).toFixed(0) + "<br>";
            }
            else {
                document.getElementById("status").innerHTML += "Status Bee " + x + " &nbsp;= " + bees[x].status + "&nbsp;|&nbsp;";
                document.getElementById("status").innerHTML += "Energy Bee " + x + " = " + ((bees[x].energy) / 4).toFixed(0) + "<br>";
            }
        }
    }
    function buildBackground() {
        //Himmel
        a8.crc.fillStyle = "#a9c5f2";
        a8.crc.fillRect(0, 0, a8.canvas.width, a8.canvas.height);
        //Berg
        a8.crc.beginPath();
        a8.crc.fillStyle = "grey";
        a8.crc.moveTo(0 - 10, 250 + 10);
        a8.crc.lineTo(200, 50 - 10);
        a8.crc.lineTo(500 + 10, 300 + 10);
        a8.crc.closePath();
        a8.crc.fill();
        a8.crc.beginPath();
        a8.crc.fillStyle = "white";
        a8.crc.moveTo(172 - 10, 70 + 10);
        a8.crc.lineTo(200, 50 - 10);
        a8.crc.lineTo(236 + 10, 70 + 10);
        a8.crc.closePath();
        a8.crc.fill();
        //Wolken
        drawCloud(400, 75);
        drawCloud(600, 90);
        drawCloud(510, 0);
        //Wiese
        a8.crc.fillStyle = "#32722c";
        a8.crc.fillRect(0, 300, 700, 150);
        a8.crc.beginPath();
        a8.crc.fillStyle = "#32722c";
        a8.crc.ellipse(100, 300, 350, 50, 3 * Math.PI / 180, 0, 2 * Math.PI);
        a8.crc.ellipse(600, 340, 200, 60, 5 * Math.PI / 180, 0, 2 * Math.PI);
        a8.crc.closePath();
        a8.crc.fill();
        //Baumstamm
        a8.crc.beginPath();
        a8.crc.fillStyle = "#7F5019";
        a8.crc.moveTo(50, 400);
        a8.crc.lineTo(100, 350);
        a8.crc.lineTo(150, 400);
        a8.crc.fillRect(80, 200, 40, 200);
        a8.crc.closePath();
        a8.crc.fill();
        //Baumkrone
        a8.crc.beginPath();
        a8.crc.fillStyle = "#277F00";
        a8.crc.arc(50, 200, 50, 0, 2 * Math.PI);
        a8.crc.arc(25, 150, 50, 0, 2 * Math.PI);
        a8.crc.arc(50, 100, 50, 0, 2 * Math.PI);
        a8.crc.arc(100, 75, 50, 0, 2 * Math.PI);
        a8.crc.arc(150, 100, 50, 0, 2 * Math.PI);
        a8.crc.arc(175, 150, 50, 0, 2 * Math.PI);
        a8.crc.arc(150, 200, 50, 0, 2 * Math.PI);
        a8.crc.arc(100, 150, 50, 0, 2 * Math.PI);
        a8.crc.closePath();
        a8.crc.fill();
    }
    function drawCloud(x, y) {
        a8.crc.beginPath();
        a8.crc.fillStyle = "white";
        a8.crc.arc(x, y, 35, 0, 2 * Math.PI);
        a8.crc.arc(x + 30, y + 5, 28, 0, 2 * Math.PI);
        a8.crc.arc(x, y + 15, 31, 0, 2 * Math.PI);
        a8.crc.arc(x - 30, y + 10, 25, 0, 2 * Math.PI);
        a8.crc.fill();
    }
    function placeFlowersIn(upperLeftx, upperLefty, lowerRightx, lowerRighty) {
        for (let f = 0; f < 5; f++) {
            let rndX = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
            let rndY = Math.random() * (lowerRighty - upperLefty) + upperLefty;
            let rndType = Math.round(Math.random());
            switch (rndType) {
                case 0:
                    new a8.Flower1(rndX, rndY, 1).draw();
                    break;
                case 1:
                    new a8.Flower2(rndX, rndY, 2).draw();
                    break;
                default:
                    console.log(rndType);
                    break;
            }
        }
    }
    function getPosIn(upperLeftx, upperLefty, lowerRightx, lowerRighty) {
        let rndX = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
        let rndY = Math.random() * (lowerRighty - upperLefty) + upperLefty;
        return new Array(rndX, rndY);
    }
})(a8 || (a8 = {}));
//# sourceMappingURL=main.js.map