/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a7;
(function (a7) {
    class Flower {
        constructor(_x, _y, _style) {
            this.x = _x;
            this.y = _y;
            this.positionX = _x + 2;
            this.positionY = _y - 45;
            this.color = Math.random() * 359;
            this.ellipsevalue1 = Math.random() * (6 - 2) + 2;
            this.ellipsevalue2 = Math.random() * (18 - 12) + 12;
            this.dotcolor = Math.random() * (63 - 26) + 26;
            this.style = _style;
            this.nectar = 30;
        }
        draw() {
            switch (this.style) {
                case 0:
                    a7.crc.beginPath();
                    a7.crc.fillStyle = "rgba(53, 195, 40, 0.5)";
                    a7.crc.fillRect(this.x, this.y, 4, -40);
                    a7.crc.ellipse(this.x + 15, this.y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
                    a7.crc.ellipse(this.x - 10, this.y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
                    a7.crc.fill();
                    a7.crc.beginPath();
                    a7.crc.fillStyle = "rgba(219, 0, 7,0.8)";
                    a7.crc.ellipse(this.x + 2, this.y - 45, 11, 13, 1 * Math.PI / 180, 0, 1 * Math.PI);
                    a7.crc.fill();
                    a7.crc.beginPath();
                    a7.crc.fillStyle = "rgba(219, 0, 7,0.8)";
                    a7.crc.moveTo(this.x - 9, this.y - 50 + 5);
                    a7.crc.lineTo(this.x - 9, this.y - 50 - 5);
                    a7.crc.lineTo(this.x - 1, this.y - 50 + 5);
                    a7.crc.closePath();
                    a7.crc.fill();
                    a7.crc.beginPath();
                    a7.crc.lineTo(this.x - 4, this.y - 50 + 5);
                    a7.crc.lineTo(this.x + 2, this.y - 50 - 5);
                    a7.crc.lineTo(this.x + 7, this.y - 50 + 5);
                    a7.crc.closePath();
                    a7.crc.fill();
                    a7.crc.beginPath();
                    a7.crc.lineTo(this.x + 4, this.y - 50 + 5);
                    a7.crc.lineTo(this.x + 13, this.y - 50 - 5);
                    a7.crc.lineTo(this.x + 13, this.y - 50 + 5);
                    a7.crc.closePath();
                    a7.crc.fill();
                    break;
                case 1:
                    a7.crc.beginPath();
                    a7.crc.fillStyle = "rgba(53, 195, 40, 0.5)";
                    a7.crc.fillRect(this.x, this.y, 4, -40);
                    a7.crc.ellipse(this.x + 15, this.y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
                    a7.crc.ellipse(this.x - 10, this.y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
                    a7.crc.fill();
                    a7.crc.beginPath();
                    a7.crc.fillStyle = "hsla(" + this.color + ", 100%, 50%,0.8)";
                    for (let i = 0; i < 6; i++) {
                        a7.crc.ellipse(this.x + 2, this.y - 45, this.ellipsevalue1, this.ellipsevalue2, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
                    }
                    a7.crc.fill();
                    a7.crc.beginPath();
                    a7.crc.fillStyle = "hsla(" + this.dotcolor + ", 100%, 50%,0.8)";
                    a7.crc.arc(this.x + 2, this.y - 45, 5, 0, 2 * Math.PI);
                    a7.crc.fill();
            }
        }
    }
    a7.Flower = Flower;
})(a7 || (a7 = {}));
//# sourceMappingURL=Flower.js.map