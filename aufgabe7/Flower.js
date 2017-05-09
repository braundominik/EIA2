/*
Aufgabe: Aufgabe 5
Name: Braun Dominik
Matrikel: 254901
Datum: 30.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a7;
(function (a7) {
    class Flower {
        constructor(_x, _y, _color, _style) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.flowerstyle = _style;
        }
        drawflower2() {
            a7.crc.beginPath();
            a7.crc.fillStyle = "rgba(53, 195, 40, 0.5)";
            a7.crc.fillRect(this.x, this.x, 4, -40);
            a7.crc.ellipse(this.x + 15, this.x - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.ellipse(this.x - 10, this.x - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.fill();
            a7.crc.beginPath();
            a7.crc.fillStyle = "rgba(219, 0, 7,0.8)";
            a7.crc.ellipse(this.x + 2, this.x - 45, 11, 13, 1 * Math.PI / 180, 0, 1 * Math.PI);
            a7.crc.fill();
            a7.crc.beginPath();
            a7.crc.fillStyle = "rgba(219, 0, 7,0.8)";
            a7.crc.moveTo(this.x - 9, this.x - 50 + 5);
            a7.crc.lineTo(this.x - 9, this.x - 50 - 5);
            a7.crc.lineTo(this.x - 1, this.x - 50 + 5);
            a7.crc.closePath();
            a7.crc.fill();
            a7.crc.beginPath();
            a7.crc.lineTo(this.x - 4, this.x - 50 + 5);
            a7.crc.lineTo(this.x + 2, this.x - 50 - 5);
            a7.crc.lineTo(this.x + 7, this.x - 50 + 5);
            a7.crc.closePath();
            a7.crc.fill();
            a7.crc.beginPath();
            a7.crc.lineTo(this.x + 4, this.x - 50 + 5);
            a7.crc.lineTo(this.x + 13, this.x - 50 - 5);
            a7.crc.lineTo(this.x + 13, this.x - 50 + 5);
            a7.crc.closePath();
            a7.crc.fill();
        }
    }
    a7.Flower = Flower;
})(a7 || (a7 = {}));
//# sourceMappingURL=Flower.js.map