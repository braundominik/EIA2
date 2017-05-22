/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var beehuhn;
(function (beehuhn) {
    class Flower1 extends beehuhn.Flower {
        constructor(_x, _y, _style) {
            super(_x, _y, _style);
        }
        draw() {
            beehuhn.crc.beginPath();
            beehuhn.crc.fillStyle = "rgba(53, 195, 40, 0.5)";
            beehuhn.crc.fillRect(this.x, this.y, 4, -40);
            beehuhn.crc.ellipse(this.x + 15, this.y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
            beehuhn.crc.ellipse(this.x - 10, this.y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
            beehuhn.crc.fill();
            beehuhn.crc.beginPath();
            beehuhn.crc.fillStyle = "rgba(219, 0, 7,0.8)";
            beehuhn.crc.ellipse(this.x + 2, this.y - 45, 11, 13, 1 * Math.PI / 180, 0, 1 * Math.PI);
            beehuhn.crc.fill();
            beehuhn.crc.beginPath();
            beehuhn.crc.fillStyle = "rgba(219, 0, 7,0.8)";
            beehuhn.crc.moveTo(this.x - 9, this.y - 50 + 5);
            beehuhn.crc.lineTo(this.x - 9, this.y - 50 - 5);
            beehuhn.crc.lineTo(this.x - 1, this.y - 50 + 5);
            beehuhn.crc.closePath();
            beehuhn.crc.fill();
            beehuhn.crc.beginPath();
            beehuhn.crc.lineTo(this.x - 4, this.y - 50 + 5);
            beehuhn.crc.lineTo(this.x + 2, this.y - 50 - 5);
            beehuhn.crc.lineTo(this.x + 7, this.y - 50 + 5);
            beehuhn.crc.closePath();
            beehuhn.crc.fill();
            beehuhn.crc.beginPath();
            beehuhn.crc.lineTo(this.x + 4, this.y - 50 + 5);
            beehuhn.crc.lineTo(this.x + 13, this.y - 50 - 5);
            beehuhn.crc.lineTo(this.x + 13, this.y - 50 + 5);
            beehuhn.crc.closePath();
            beehuhn.crc.fill();
        }
    }
    beehuhn.Flower1 = Flower1;
})(beehuhn || (beehuhn = {}));
//# sourceMappingURL=Flower1.js.map