/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace beehuhn {
    export class Hive {
        nectar: number;
        x: number;
        y: number;


        constructor() {
            this.nectar = 0;
            this.x = 320;
            this.y = 355;
        }


        draw(): void {
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
            crc.fill();
            crc.beginPath();
            crc.fillStyle = "#FFCD0A";
            crc.ellipse(320, 370, 10, 62, 90 * Math.PI / 180, 0, 2 * Math.PI);
            crc.fill();
        }





    }
}
