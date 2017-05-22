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
    export class Flower2 extends Flower {
        color: number;
        ellipsevalue1: number;
        ellipsevalue2: number;
        dotcolor: number;


        constructor(_x: number, _y: number, _style: number) {
            super(_x, _y, _style);
            this.color = Math.random() * 359;
            this.ellipsevalue1 = Math.random() * (6 - 2) + 2;
            this.ellipsevalue2 = Math.random() * (18 - 12) + 12;
            this.dotcolor = Math.random() * (63 - 26) + 26;
        }




        draw(): void {
            crc.beginPath();
            crc.fillStyle = "rgba(53, 195, 40, 0.5)";
            crc.fillRect(this.x, this.y, 4, -40);
            crc.ellipse(this.x + 15, this.y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
            crc.ellipse(this.x - 10, this.y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
            crc.fill();

            crc.beginPath();
            crc.fillStyle = "hsla(" + this.color + ", 100%, 50%,0.8)";
            for (let i: number = 0; i < 6; i++) {
                crc.ellipse(this.x + 2, this.y - 45, this.ellipsevalue1, this.ellipsevalue2, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc.fill();


            crc.beginPath();
            crc.fillStyle = "hsla(" + this.dotcolor + ", 100%, 50%,0.8)";
            crc.arc(this.x + 2, this.y - 45, 5, 0, 2 * Math.PI);

            crc.fill();
        }

    }
}

