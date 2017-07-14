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
    class Minion extends sfd.Enemy {
        constructor(_h) {
            super(_h);
            let temp = sfd.getPosIn(50, -1000, 350, -100);
            this.x = temp[0];
            this.y = temp[1];
        }
        draw() {
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "black";
            sfd.crc.ellipse(this.x, this.y, 10, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
            sfd.crc.fill();
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "red";
            sfd.crc.fillRect(this.x - 10, this.y - 15, (this.currentHealth / this.maxHealth) * 20, 2);
        }
        move() {
            if (this.y <= sfd.canvas.height) {
                this.y = this.y + 3;
            }
            else {
                this.y = 0;
            }
        }
    }
    sfd.Minion = Minion;
})(sfd || (sfd = {}));
//# sourceMappingURL=minion.js.map