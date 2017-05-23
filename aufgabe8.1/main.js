/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var beehuhn;
(function (beehuhn) {
    window.addEventListener("load", init);
    let bees = [];
    let saveBG;
    beehuhn.flowers = [];
    beehuhn.beehive = new beehuhn.Hive();
    let deathcount = 0;
    function init() {
        beehuhn.canvas = document.createElement("canvas");
        beehuhn.canvas.height = 450;
        beehuhn.canvas.width = 700;
        document.body.prepend(beehuhn.canvas);
        beehuhn.crc = beehuhn.canvas.getContext("2d");
        beehuhn.canvas.style.cursor = `url("crosshair.png"), auto`;
        beehuhn.canvas.addEventListener("click", killBee);
        buildBackground();
        beehuhn.beehive.draw();
        //Blumenwiese
        placeFlowersIn(400, 300, 700, 450);
        //Save Background        
        saveBG = beehuhn.crc.getImageData(0, 0, beehuhn.canvas.width, beehuhn.canvas.height);
        console.log(saveBG);
        //Bienen
        for (let i = 0; i < 10; i++) {
            let bee;
            if (Math.round(Math.random())) {
                bee = new beehuhn.Bee(beehuhn.beehive.x, beehuhn.beehive.y);
            }
            else {
                bee = new beehuhn.Honeybee(beehuhn.beehive.x, beehuhn.beehive.y);
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
            if (beehuhn.beehive.nectar > 3) {
                let bee = new beehuhn.Honeybee(beehuhn.beehive.x, beehuhn.beehive.y);
                beehuhn.beehive.nectar = beehuhn.beehive.nectar - 3;
                if (Math.round(Math.random())) {
                    bee.richtung = true;
                }
                else {
                    bee.richtung = false;
                }
                bees.push(bee);
            }
        });
        console.log(bees);
        for (let e = 0; e < 10; e++) {
            let position = getPosIn(400, 300, 700, 450);
            let rndType = Math.round(Math.random());
            switch (rndType) {
                case 0:
                    beehuhn.flowers.push(new beehuhn.Flower1(position[0], position[1], 1));
                    break;
                case 1:
                    beehuhn.flowers.push(new beehuhn.Flower2(position[0], position[1], 2));
                    break;
                default:
                    console.log(rndType);
                    break;
            }
        }
        console.log(beehuhn.flowers);
        console.log(beehuhn.flowers[1].constructor.name);
        //        bees[1].status = "targetting";
        //        bees[1].target[0] = flowers[2].positionX;
        //        bees[1].target[1] = flowers[2].positionY;
        animate();
    }
    let count = 0;
    function animate() {
        document.getElementById("status").innerHTML = "";
        beehuhn.crc.putImageData(saveBG, 0, 0);
        for (let e = 0; e < beehuhn.flowers.length; e++) {
            beehuhn.flowers[e].draw();
            if (beehuhn.flowers[e].nectar < 1) {
                beehuhn.flowers[e].nectar = 30;
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
                        let cFlower = Math.round(Math.random() * (beehuhn.flowers.length - 1));
                        //The Flower needs to have enough nectar for a least 1 tick
                        if (beehuhn.flowers[cFlower].nectar > 0.02) {
                            bees[n].targetIndex = cFlower;
                            bees[n].target[0] = beehuhn.flowers[cFlower].positionX;
                            bees[n].target[1] = beehuhn.flowers[cFlower].positionY;
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
    beehuhn.getRndNumber = getRndNumber;
    function showInfo(x) {
        if (x == 666) {
            let flowernectar = 0;
            for (let e = 0; e < beehuhn.flowers.length; e++) {
                flowernectar += beehuhn.flowers[e].nectar;
            }
            document.getElementById("status").innerHTML += "Nectar Flowers = " + flowernectar.toFixed(2) + "<br>";
            document.getElementById("status").innerHTML += "Nectar Hive = " + (beehuhn.beehive.nectar).toFixed(2) + "<br>";
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
        beehuhn.crc.fillStyle = "#a9c5f2";
        beehuhn.crc.fillRect(0, 0, beehuhn.canvas.width, beehuhn.canvas.height);
        //Berg
        beehuhn.crc.beginPath();
        beehuhn.crc.fillStyle = "grey";
        beehuhn.crc.moveTo(0 - 10, 250 + 10);
        beehuhn.crc.lineTo(200, 50 - 10);
        beehuhn.crc.lineTo(500 + 10, 300 + 10);
        beehuhn.crc.closePath();
        beehuhn.crc.fill();
        beehuhn.crc.beginPath();
        beehuhn.crc.fillStyle = "white";
        beehuhn.crc.moveTo(172 - 10, 70 + 10);
        beehuhn.crc.lineTo(200, 50 - 10);
        beehuhn.crc.lineTo(236 + 10, 70 + 10);
        beehuhn.crc.closePath();
        beehuhn.crc.fill();
        //Wolken
        drawCloud(400, 75);
        drawCloud(600, 90);
        drawCloud(510, 0);
        //Wiese
        beehuhn.crc.fillStyle = "#32722c";
        beehuhn.crc.fillRect(0, 300, 700, 150);
        beehuhn.crc.beginPath();
        beehuhn.crc.fillStyle = "#32722c";
        beehuhn.crc.ellipse(100, 300, 350, 50, 3 * Math.PI / 180, 0, 2 * Math.PI);
        beehuhn.crc.ellipse(600, 340, 200, 60, 5 * Math.PI / 180, 0, 2 * Math.PI);
        beehuhn.crc.closePath();
        beehuhn.crc.fill();
        //Baumstamm
        beehuhn.crc.beginPath();
        beehuhn.crc.fillStyle = "#7F5019";
        beehuhn.crc.moveTo(50, 400);
        beehuhn.crc.lineTo(100, 350);
        beehuhn.crc.lineTo(150, 400);
        beehuhn.crc.fillRect(80, 200, 40, 200);
        beehuhn.crc.closePath();
        beehuhn.crc.fill();
        //Baumkrone
        beehuhn.crc.beginPath();
        beehuhn.crc.fillStyle = "#277F00";
        beehuhn.crc.arc(50, 200, 50, 0, 2 * Math.PI);
        beehuhn.crc.arc(25, 150, 50, 0, 2 * Math.PI);
        beehuhn.crc.arc(50, 100, 50, 0, 2 * Math.PI);
        beehuhn.crc.arc(100, 75, 50, 0, 2 * Math.PI);
        beehuhn.crc.arc(150, 100, 50, 0, 2 * Math.PI);
        beehuhn.crc.arc(175, 150, 50, 0, 2 * Math.PI);
        beehuhn.crc.arc(150, 200, 50, 0, 2 * Math.PI);
        beehuhn.crc.arc(100, 150, 50, 0, 2 * Math.PI);
        beehuhn.crc.closePath();
        beehuhn.crc.fill();
    }
    function drawCloud(x, y) {
        beehuhn.crc.beginPath();
        beehuhn.crc.fillStyle = "white";
        beehuhn.crc.arc(x, y, 35, 0, 2 * Math.PI);
        beehuhn.crc.arc(x + 30, y + 5, 28, 0, 2 * Math.PI);
        beehuhn.crc.arc(x, y + 15, 31, 0, 2 * Math.PI);
        beehuhn.crc.arc(x - 30, y + 10, 25, 0, 2 * Math.PI);
        beehuhn.crc.fill();
    }
    function placeFlowersIn(upperLeftx, upperLefty, lowerRightx, lowerRighty) {
        for (let f = 0; f < 5; f++) {
            let rndX = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
            let rndY = Math.random() * (lowerRighty - upperLefty) + upperLefty;
            let rndType = Math.round(Math.random());
            switch (rndType) {
                case 0:
                    new beehuhn.Flower1(rndX, rndY, 1).draw();
                    break;
                case 1:
                    new beehuhn.Flower2(rndX, rndY, 2).draw();
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
    function killBee(_event) {
        console.log(_event);
        for (let i = 0; i < bees.length; i++) {
            let dist = getDistance(bees[i].x, bees[i].y, _event.layerX + 25, _event.layerY + 25);
            if (dist < 6) {
                bees[i].status = "dying";
            }
        }
    }
    function getDistance(x1, y1, x2, y2) {
        let dtc = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
        return dtc;
    }
})(beehuhn || (beehuhn = {}));
//# sourceMappingURL=main.js.map