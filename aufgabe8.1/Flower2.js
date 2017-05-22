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
    class Flower2 extends beehuhn.Flower {
        constructor(_x, _y, _style) {
            super(_x, _y, _style);
            this.color = Math.random() * 359;
            this.ellipsevalue1 = Math.random() * (6 - 2) + 2;
            this.ellipsevalue2 = Math.random() * (18 - 12) + 12;
            this.dotcolor = Math.random() * (63 - 26) + 26;
        }
        draw() {
            beehuhn.crc.beginPath();
            beehuhn.crc.fillStyle = "rgba(53, 195, 40, 0.5)";
            beehuhn.crc.fillRect(this.x, this.y, 4, -40);
            beehuhn.crc.ellipse(this.x + 15, this.y - 17, 4, 18, 45 * Math.PI / 180, 0, 2 * Math.PI);
            beehuhn.crc.ellipse(this.x - 10, this.y - 20, 4, 18, -45 * Math.PI / 180, 0, 2 * Math.PI);
            beehuhn.crc.fill();
            beehuhn.crc.beginPath();
            beehuhn.crc.fillStyle = "hsla(" + this.color + ", 100%, 50%,0.8)";
            for (let i = 0; i < 6; i++) {
                beehuhn.crc.ellipse(this.x + 2, this.y - 45, this.ellipsevalue1, this.ellipsevalue2, (i * 30) * Math.PI / 180, 0, 2 * Math.PI);
            }
            beehuhn.crc.fill();
            beehuhn.crc.beginPath();
            beehuhn.crc.fillStyle = "hsla(" + this.dotcolor + ", 100%, 50%,0.8)";
            beehuhn.crc.arc(this.x + 2, this.y - 45, 5, 0, 2 * Math.PI);
            beehuhn.crc.fill();
        }
    }
    beehuhn.Flower2 = Flower2;
})(beehuhn || (beehuhn = {}));
//# sourceMappingURL=Flower2.js.map