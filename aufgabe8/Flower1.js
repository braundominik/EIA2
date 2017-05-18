/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a8;
(function (a8) {
    class Flower1 extends a8.Flower {
        constructor(_x, _y, _style) {
            super(_x, _y, _style);
        }
        draw() {
            a8.crc.beginPath();
            a8.crc.fillStyle = "rgba(53, 195, 40, 0.5)";
            a8.crc.fillRect(this.x, this.y, 4, -40);
            a8.crc.ellipse(this.x + 15, this.y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
            a8.crc.ellipse(this.x - 10, this.y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
            a8.crc.fill();
            a8.crc.beginPath();
            a8.crc.fillStyle = "rgba(219, 0, 7,0.8)";
            a8.crc.ellipse(this.x + 2, this.y - 45, 11, 13, 1 * Math.PI / 180, 0, 1 * Math.PI);
            a8.crc.fill();
            a8.crc.beginPath();
            a8.crc.fillStyle = "rgba(219, 0, 7,0.8)";
            a8.crc.moveTo(this.x - 9, this.y - 50 + 5);
            a8.crc.lineTo(this.x - 9, this.y - 50 - 5);
            a8.crc.lineTo(this.x - 1, this.y - 50 + 5);
            a8.crc.closePath();
            a8.crc.fill();
            a8.crc.beginPath();
            a8.crc.lineTo(this.x - 4, this.y - 50 + 5);
            a8.crc.lineTo(this.x + 2, this.y - 50 - 5);
            a8.crc.lineTo(this.x + 7, this.y - 50 + 5);
            a8.crc.closePath();
            a8.crc.fill();
            a8.crc.beginPath();
            a8.crc.lineTo(this.x + 4, this.y - 50 + 5);
            a8.crc.lineTo(this.x + 13, this.y - 50 - 5);
            a8.crc.lineTo(this.x + 13, this.y - 50 + 5);
            a8.crc.closePath();
            a8.crc.fill();
        }
    }
    a8.Flower1 = Flower1;
})(a8 || (a8 = {}));
//# sourceMappingURL=Flower1.js.map