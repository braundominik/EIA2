/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace a8 {
    export class Flower1 extends Flower {


        constructor(_x: number, _y: number, _style: number) {
            super(_x, _y, _style);
        }




        draw(): void {
            crc.beginPath();
            crc.fillStyle = "rgba(53, 195, 40, 0.5)";
            crc.fillRect(this.x, this.y, 4, -40);
            crc.ellipse(this.x + 15, this.y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
            crc.ellipse(this.x - 10, this.y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
            crc.fill();

            crc.beginPath();
            crc.fillStyle = "rgba(219, 0, 7,0.8)";
            crc.ellipse(this.x + 2, this.y - 45, 11, 13, 1 * Math.PI / 180, 0, 1 * Math.PI);
            crc.fill();

            crc.beginPath();
            crc.fillStyle = "rgba(219, 0, 7,0.8)";
            crc.moveTo(this.x - 9, this.y - 50 + 5);
            crc.lineTo(this.x - 9, this.y - 50 - 5);
            crc.lineTo(this.x - 1, this.y - 50 + 5);
            crc.closePath();
            crc.fill();

            crc.beginPath();
            crc.lineTo(this.x - 4, this.y - 50 + 5);
            crc.lineTo(this.x + 2, this.y - 50 - 5);
            crc.lineTo(this.x + 7, this.y - 50 + 5);
            crc.closePath();
            crc.fill();

            crc.beginPath();
            crc.lineTo(this.x + 4, this.y - 50 + 5);
            crc.lineTo(this.x + 13, this.y - 50 - 5);
            crc.lineTo(this.x + 13, this.y - 50 + 5);
            crc.closePath();
            crc.fill();
        }

    }
}

