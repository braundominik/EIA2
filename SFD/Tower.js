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
    class Tower extends sfd.Enemy {
        constructor(_h, _v) {
            super(_h, _v);
            this.x = 200;
            this.y = -200;
        }
        draw() {
            let img;
            img = document.getElementById("tower");
            sfd.crc.drawImage(img, this.x - 50, this.y - 120, 79.5, 147.5);
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "red";
            sfd.crc.fillRect(this.x - 75, this.y - 150, (this.currentHealth / this.maxHealth) * 100, 7);
        }
        move() {
            if (this.y <= 270) {
                this.y = this.y + 2;
            }
        }
    }
    sfd.Tower = Tower;
})(sfd || (sfd = {}));
//# sourceMappingURL=Tower.js.map