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
    export class Flower {
        x: number;
        y: number;
        color: string;
        flowerstyle: number;

        constructor(_x: number, _y: number, _color: string, _style: number) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.flowerstyle = _style;
        }

        drawflower2(): void {
            crc.beginPath();
            crc.fillStyle = "rgba(53, 195, 40, 0.5)";
            crc.fillRect(this.x, this.x, 4, -40);
            crc.ellipse(this.x + 15, this.x - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
            crc.ellipse(this.x - 10, this.x - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
            crc.fill();

            crc.beginPath();
            crc.fillStyle = "rgba(219, 0, 7,0.8)";
            crc.ellipse(this.x + 2, this.x - 45, 11, 13, 1 * Math.PI / 180, 0, 1 * Math.PI);
            crc.fill();

            crc.beginPath();
            crc.fillStyle = "rgba(219, 0, 7,0.8)";
            crc.moveTo(this.x - 9, this.x - 50 + 5);
            crc.lineTo(this.x - 9, this.x - 50 - 5);
            crc.lineTo(this.x - 1, this.x - 50 + 5);
            crc.closePath();
            crc.fill();

            crc.beginPath();
            crc.lineTo(this.x - 4, this.x - 50 + 5);
            crc.lineTo(this.x + 2, this.x - 50 - 5);
            crc.lineTo(this.x + 7, this.x - 50 + 5);
            crc.closePath();
            crc.fill();

            crc.beginPath();
            crc.lineTo(this.x + 4, this.x - 50 + 5);
            crc.lineTo(this.x + 13, this.x - 50 - 5);
            crc.lineTo(this.x + 13, this.x - 50 + 5);
            crc.closePath();
            crc.fill();
        }
       


}
}

