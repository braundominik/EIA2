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
    class Hive {
        constructor() {
            this.nectar = 0;
            this.x = 320;
            this.y = 355;
        }
        draw() {
            // Bienenkorb
            a7.crc.beginPath();
            a7.crc.fillStyle = "#FFCD0A";
            a7.crc.ellipse(320, 355, 10, 60, 90 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.ellipse(320, 340, 10, 56, 90 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.ellipse(320, 325, 10, 45, 90 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.ellipse(320, 310, 10, 40, 90 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.ellipse(320, 295, 10, 30, 90 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.ellipse(320, 280, 10, 20, 90 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.fill();
            a7.crc.beginPath();
            a7.crc.fillStyle = "black";
            a7.crc.ellipse(320, 361, 10, 15, 0 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.fill();
            a7.crc.beginPath();
            a7.crc.fillStyle = "#FFCD0A";
            a7.crc.ellipse(320, 370, 10, 62, 90 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.fill();
        }
    }
    a7.Hive = Hive;
})(a7 || (a7 = {}));
//# sourceMappingURL=hive.js.map