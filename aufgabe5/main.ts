/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace a5 {
    window.addEventListener("load", init);
    let crc: CanvasRenderingContext2D;

    function init(): void {
        let canvas: HTMLCanvasElement;
        canvas = document.createElement("canvas");
        canvas.height = 450;
        canvas.width = 700;
        document.body.appendChild(canvas);
        crc = canvas.getContext("2d");

        crc.fillStyle = "#a9c5f2";
        crc.fillRect(0, 0, canvas.width, canvas.height);
        flower3(200, 200);
        flower2(300, 300);
    }

    function flower1(x: number, y: number): void {

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

    function flower2(x: number, y: number): void {
        crc.beginPath();
        crc.fillStyle = "green";
        crc.fillRect(x, y, 4, -40);
        crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.fill();

        crc.beginPath();
        crc.fillStyle = "red";
        crc.ellipse(x + 2, y - 45, 11, 13, 1 * Math.PI / 180, 0, 1 * Math.PI);
        crc.fill();

        crc.beginPath();
        crc.fillStyle = "red";
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

    function flower3(x: number, y: number): void {

        let rnd1: number = Math.random() * (6 - 2) + 2;
        let rnd2: number = Math.random() * (18 - 12) + 12;
        let rndColor: number = Math.random() * 359;


        crc.beginPath();
        crc.fillStyle = "green";
        crc.fillRect(x, y, 4, -40);
        crc.ellipse(x + 15, y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.ellipse(x - 10, y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
        crc.fill();

        crc.beginPath();
        crc.fillStyle = "hsl(" + rndColor + ", 100%, 76%)";
        for (let i: number = 0; i < 6; i++) {
            crc.ellipse(x + 2, y - 45, rnd1, rnd2, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc.fill();


        crc.beginPath();
        crc.fillStyle = "yellow";
        crc.arc(x + 2, y - 45, 5, 0, 2 * Math.PI);

        crc.fill();
    }

}  