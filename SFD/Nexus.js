/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var sfd;
(function (sfd) {
    class Nexus extends sfd.Enemy {
        constructor(_h, _v) {
            super(_h, _v);
            this.x = 200;
            this.y = -200;
        }
        draw() {
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "black";
            sfd.crc.ellipse(this.x, this.y, 200, 200, 90 * Math.PI / 180, 0, 2 * Math.PI);
            sfd.crc.fill();
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "red";
            sfd.crc.fillRect(this.x - 50, this.y - 70, (this.currentHealth / this.maxHealth) * 100, 7);
        }
        move() {
            if (this.y <= 270) {
                this.y = this.y + 2;
            }
        }
    }
    sfd.Nexus = Nexus;
})(sfd || (sfd = {}));
//# sourceMappingURL=Nexus.js.map