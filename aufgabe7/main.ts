/*
Aufgabe: Aufgabe 5
Name: Braun Dominik
Matrikel: 254901
Datum: 30.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace a7 {
    window.addEventListener("load", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let bees: Bee[] = [];
    let stockposX: number = 320;
    let stockposY: number = 355;
    let saveBG: ImageData;
    let flowers: Flower[] = [];


    function init(): void {
        canvas = document.createElement("canvas");
        canvas.height = 450;
        canvas.width = 700;
        document.body.appendChild(canvas);
        crc = canvas.getContext("2d");

        buildBackground();

        //Blumenwiese
        placeFlowersIn(400, 300, 700, 450);

        //Save Background        
        saveBG = crc.getImageData(0, 0, canvas.width, canvas.height);
        console.log(saveBG);



        //Bienen
        for (let i: number = 0; i < 10; i++) {
            let bee: Bee = new Bee(stockposX, stockposY);
            bees.push(bee);

        }

        canvas.addEventListener("click", function(): void {
            bees.push(new Bee(stockposX, stockposY));
        });
        console.log(bees);

        for (let e: number = 0; e < 10; e++) {
            let position: number[] = getPosIn(400, 300, 700, 450);
            let rndType: number = Math.round(Math.random());
            flowers.push(new Flower(position[0], position[1], rndType));
        }

        animate();

    }

    function animate(): void {
        crc.putImageData(saveBG, 0, 0);
        for (let e: number = 0; e < flowers.length; e++) {
            flowers[e].draw();
        }
        for (let i: number = 0; i < bees.length; i++) {
            let bee: Bee = bees[i];
            bee.update();
        }
        bees[1].status = "targetting";
        bees[1].target[0] = flowers[2].positionX;
        bees[1].target[1] = flowers[2].positionY;
        console.log(bees[1].x);
        console.log(Math.round(bees[1].x));
        setTimeout(animate, 20);
    }

    export function getRndNumber(min: number, max: number): number {
        let x: number = Math.random() * (max - min) + min;
        return x;

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

        // Bienenkorb
        crc.beginPath();
        crc.fillStyle = "#FFCD0A";
        crc.ellipse(320, 355, 10, 60, 90 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(320, 340, 10, 56, 90 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(320, 325, 10, 45, 90 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(320, 310, 10, 40, 90 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(320, 295, 10, 30, 90 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(320, 280, 10, 20, 90 * Math.PI / 180, 0, 2 * Math.PI);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "black";
        crc.ellipse(320, 361, 10, 15, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc.fill()
        crc.beginPath();
        crc.fillStyle = "#FFCD0A";
        crc.ellipse(320, 370, 10, 62, 90 * Math.PI / 180, 0, 2 * Math.PI);
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
            new Flower(rndX, rndY, rndType).draw();

        }

    }

    function getPosIn(upperLeftx: number, upperLefty: number, lowerRightx: number, lowerRighty: number): number[] {
        let rndX: number = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
        let rndY: number = Math.random() * (lowerRighty - upperLefty) + upperLefty;
        return new Array(rndX, rndY);

    }

}