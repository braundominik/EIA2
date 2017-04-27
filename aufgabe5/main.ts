/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

/// <reference path="bee.ts"/>

namespace a5 {
    window.addEventListener("load", init);
    let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let bees: Bee[] = [];
    let stockposX: number = 400;
    let stockposY: number = 200;
    let saveBG: ImageData;

    function init(): void {
        canvas = document.createElement("canvas");
        canvas.height = 450;
        canvas.width = 700;
        document.body.appendChild(canvas);
        crc = canvas.getContext("2d");

        buildBackground();

        //Manuelle Blumen
        drawRandomFlower(45, 320);
        drawRandomFlower(10, 440);
        drawRandomFlower(200, 370);

        //Blumenwiese
        placeFlowersIn(300, 300, 700, 450);

        //Save Background        
        saveBG = crc.getImageData(0, 0, canvas.width, canvas.height);
        console.log(saveBG);
        //Biene
        createBees(15);
        console.log(bees);
        animate();

    }

    function animate(): void {
        crc.putImageData(saveBG, 0, 0);
        drawBees();
        updateBees();
        setTimeout(animate, 20);
    }

    function updateBees(): void {
        for (let i: number = 0; i < bees.length; i++) {

            bees[i].y = bees[i].y + getRndNumber(1, 3);
            bees[i].x = (bees[i].x + getRndNumber(1, 3))-0.4;
        }
    }

    function getRndNumber(min: number, max: number): number {
        return Math.random() * (max - min) - min;
    }

    function drawBees(): void {
        for (let i: number = 0; i < bees.length; i++) {
            drawBee(bees[i].x, bees[i].y);
        }
    }

    function createBees(n: number): void {
        for (let i: number = 0; i < n; i++) {
            let bee: Bee = {
                x: stockposX,
                y: stockposY
            };
            bees.push(bee);
        }
    }

    function drawBee(x: number, y: number): void {
        crc.fillStyle = "black";
        crc.fillRect(x, y, 10, 10);

        //        var grd: CanvasGradient = crc.createLinearGradient(x - 40, y, x + 40, y);
        //        grd.addColorStop(0.25, "black");
        //        grd.addColorStop(0.3, "yellow");
        //        grd.addColorStop(0.4, "yellow");
        //        grd.addColorStop(0.5, "black");
        //        grd.addColorStop(0.6, "black");
        //        grd.addColorStop(0.7, "yellow");
        //        grd.addColorStop(0.8, "yellow");
        //        grd.addColorStop(1, "black");
        //        crc.fillStyle = grd;
        //       ipse(x, y, 40, 50, 90 * Math.PI / 180, 0, 2 * Math.PI);
        //        crc.fill();





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


    //Einfache Variante von drawFlower3
    function drawflower1(x: number, y: number): void {

        crc.beginPath();
        crc.fillStyle = "green";
        crc.fillRect(x, y, 4, -40);
        crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.fill();

        crc.beginPath();
        crc.fillStyle = "white";
        for (let i: number = 0; i < 6; i++) {
            crc.ellipse(x + 2, y - 45, 3, 15, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc.fill();


        crc.beginPath();
        crc.fillStyle = "yellow";
        crc.arc(x + 2, y - 45, 5, 0, 2 * Math.PI);

        crc.fill();

    }

    //Rote Blume
    function drawflower2(x: number, y: number): void {
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

    //Generiert eine Blume mit zufälligen Blumenkopf
    function drawflower3(x: number, y: number): void {

        let rnd1: number = Math.random() * (6 - 2) + 2;
        let rnd2: number = Math.random() * (18 - 12) + 12;
        let rndColor: number = Math.random() * 359;
        let rndColorDot: number = Math.random() * (63 - 26) + 26;


        crc.beginPath();
        crc.fillStyle = "rgba(53, 195, 40, 0.5)";
        crc.fillRect(x, y, 4, -40);
        crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.fill();

        crc.beginPath();
        crc.fillStyle = "hsla(" + rndColor + ", 100%, 50%,0.8)";
        for (let i: number = 0; i < 6; i++) {
            crc.ellipse(x + 2, y - 45, rnd1, rnd2, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc.fill();


        crc.beginPath();
        crc.fillStyle = "hsla(" + rndColorDot + ", 100%, 50%,0.8)";
        crc.arc(x + 2, y - 45, 5, 0, 2 * Math.PI);

        crc.fill();
    }

    //Zeichnet eine Blume
    function drawRandomFlower(x: number, y: number): void {
        let rnd: number = Math.random();
        if (rnd < 0.8) {
            drawflower3(x, y);
        }
        else {
            drawflower2(x, y);
        }

    }

    function placeFlowersIn(upperLeftx: number, upperLefty: number, lowerRightx: number, lowerRighty: number): void {
        for (let f: number = 0; f < 20; f++) {
            let rndX: number = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
            let rndY: number = Math.random() * (lowerRighty - upperLefty) + upperLefty;
            drawRandomFlower(rndX, rndY);
        }

    }

}  