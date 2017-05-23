/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace beehuhn {
    window.addEventListener("load", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let bees: Bee[] = [];
    let saveBG: ImageData;
    export let flowers: Flower[] = [];
    export let beehive: Hive = new Hive();
    let deathcount: number = 0;



    function init(): void {

        canvas = document.createElement("canvas");
        canvas.height = 450;
        canvas.width = 700;
        document.body.prepend(canvas);
        crc = canvas.getContext("2d");
        canvas.style.cursor = `url("crosshair.png"), auto`;
        canvas.addEventListener("click", killBee);

        buildBackground();
        beehive.draw();

        //Blumenwiese
        placeFlowersIn(400, 300, 700, 450);

        //Save Background        
        saveBG = crc.getImageData(0, 0, canvas.width, canvas.height);
        console.log(saveBG);




        //Bienen
        for (let i: number = 0; i < 10; i++) {
            let bee: Bee;
            if (Math.round(Math.random())) {
                bee = new Bee(beehive.x, beehive.y);
            }

            else {
                bee = new Honeybee(beehive.x, beehive.y);
            }

            if (Math.round(Math.random())) {
                bee.richtung = true;
            }
            else {
                bee.richtung = false;
            }


            bees.push(bee);

        }



        document.getElementById("buybee").addEventListener("click", function(): void {
            if (beehive.nectar > 3) {
                let bee: Bee = new Honeybee(beehive.x, beehive.y);
                beehive.nectar = beehive.nectar - 3;

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

        for (let e: number = 0; e < 10; e++) {
            let position: number[] = getPosIn(400, 300, 700, 450);

            let rndType: number = Math.round(Math.random());
            switch (rndType) {
                case 0:
                    flowers.push(new Flower1(position[0], position[1], 1));
                    break;
                case 1:
                    flowers.push(new Flower2(position[0], position[1], 2));
                    break;
                default:
                    console.log(rndType);
                    break;

            }

        }
        console.log(flowers);
        console.log(flowers[1].constructor.name);

        //        bees[1].status = "targetting";
        //        bees[1].target[0] = flowers[2].positionX;
        //        bees[1].target[1] = flowers[2].positionY;

        animate();

    }

    let count: number = 0;

    function animate(): void {
        document.getElementById("status").innerHTML = "";
        crc.putImageData(saveBG, 0, 0);
        for (let e: number = 0; e < flowers.length; e++) {
            flowers[e].draw();
            if (flowers[e].nectar < 1) {
                flowers[e].nectar = 30;
            }
        }

        for (let i: number = 0; i < bees.length; i++) {
            let bee: Bee = bees[i];
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
            for (let n: number = 0; n < bees.length; n++) {
                if (Math.round(Math.random())) {
                    if (bees[n].status == "idle" && bees[n].constructor.name == "Honeybee") {

                        let cFlower: number = Math.round(Math.random() * (flowers.length - 1));

                        //The Flower needs to have enough nectar for a least 1 tick
                        if (flowers[cFlower].nectar > 0.02) {
                            bees[n].targetIndex = cFlower;
                            bees[n].target[0] = flowers[cFlower].positionX;
                            bees[n].target[1] = flowers[cFlower].positionY;
                            bees[n].status = "targeting";
                        }
                    }
                }
            }
            count = 0;
        }
        setTimeout(animate, 20);
    }

    export function getRndNumber(min: number, max: number): number {
        let x: number = Math.random() * (max - min) + min;
        return x;

    }


    function showInfo(x: number): void {

        if (x == 666) {
            let flowernectar: number = 0;
            for (let e: number = 0; e < flowers.length; e++) {
                flowernectar += flowers[e].nectar;
            }
            document.getElementById("status").innerHTML += "Nectar Flowers = " + flowernectar.toFixed(2) + "<br>";
            document.getElementById("status").innerHTML += "Nectar Hive = " + (beehive.nectar).toFixed(2) + "<br>";
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




    function buildBackground(): void {


        //Himmel
        crc.fillStyle = "#a9c5f2";
        crc.fillRect(0, 0, canvas.width, canvas.height);

        //Berg
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

        //Wolken
        drawCloud(400, 75);
        drawCloud(600, 90);
        drawCloud(510, 0);

        //Wiese
        crc.fillStyle = "#32722c";
        crc.fillRect(0, 300, 700, 150);

        crc.beginPath();
        crc.fillStyle = "#32722c";
        crc.ellipse(100, 300, 350, 50, 3 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(600, 340, 200, 60, 5 * Math.PI / 180, 0, 2 * Math.PI);
        crc.closePath();
        crc.fill();

        //Baumstamm
        crc.beginPath();
        crc.fillStyle = "#7F5019";
        crc.moveTo(50, 400);
        crc.lineTo(100, 350);
        crc.lineTo(150, 400);
        crc.fillRect(80, 200, 40, 200);
        crc.closePath();
        crc.fill();

        //Baumkrone
        crc.beginPath();
        crc.fillStyle = "#277F00";
        crc.arc(50, 200, 50, 0, 2 * Math.PI);
        crc.arc(25, 150, 50, 0, 2 * Math.PI);
        crc.arc(50, 100, 50, 0, 2 * Math.PI);
        crc.arc(100, 75, 50, 0, 2 * Math.PI);
        crc.arc(150, 100, 50, 0, 2 * Math.PI);
        crc.arc(175, 150, 50, 0, 2 * Math.PI);
        crc.arc(150, 200, 50, 0, 2 * Math.PI);
        crc.arc(100, 150, 50, 0, 2 * Math.PI);
        crc.closePath();
        crc.fill();



    }

    function drawCloud(x: number, y: number): void {

        crc.beginPath();
        crc.fillStyle = "white";
        crc.arc(x, y, 35, 0, 2 * Math.PI);
        crc.arc(x + 30, y + 5, 28, 0, 2 * Math.PI);
        crc.arc(x, y + 15, 31, 0, 2 * Math.PI);
        crc.arc(x - 30, y + 10, 25, 0, 2 * Math.PI);
        crc.fill();

    }

    function placeFlowersIn(upperLeftx: number, upperLefty: number, lowerRightx: number, lowerRighty: number): void {
        for (let f: number = 0; f < 5; f++) {
            let rndX: number = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
            let rndY: number = Math.random() * (lowerRighty - upperLefty) + upperLefty;
            let rndType: number = Math.round(Math.random());
            switch (rndType) {
                case 0:
                    new Flower1(rndX, rndY, 1).draw();
                    break;
                case 1:
                    new Flower2(rndX, rndY, 2).draw();
                    break;
                default:
                    console.log(rndType);
                    break;

            }

        }
    }

    function getPosIn(upperLeftx: number, upperLefty: number, lowerRightx: number, lowerRighty: number): number[] {
        let rndX: number = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
        let rndY: number = Math.random() * (lowerRighty - upperLefty) + upperLefty;
        return new Array(rndX, rndY);

    }

    function killBee(_event: Event): void {
        console.log(_event);
        for (let i: number = 0; i < bees.length; i++) {
            let dist: number = getDistance(bees[i].x, bees[i].y, _event.layerX+25, _event.layerY+25);
            if (dist < 6) {
                bees[i].status = "dying";
            }

        }

    }

    function getDistance(x1: number, y1: number, x2: number, y2: number): number {
        let dtc: number = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
        return dtc;
    }


}