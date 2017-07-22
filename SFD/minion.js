/*
Aufgabe: SPINNING
Name: Braun Dominik
Matrikel: 254901
Datum: 21.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var sfd;
(function (sfd) {
    class Minion extends sfd.Enemy {
        constructor(_h, _v) {
            super(_h, _v);
            let temp;
            if (Math.random() > 0.5) {
                temp = sfd.getPosIn(50, -1000, 100, -100);
            }
            else {
                temp = sfd.getPosIn(300, -1000, 350, -100);
            }
            this.x = temp[0];
            this.y = temp[1];
        }
        draw() {
            let img;
            img = document.getElementById("minion");
            sfd.crc.drawImage(img, this.x - 20, this.y, 40, 80);
            //
            //            crc.beginPath();
            //            crc.fillStyle = "black";
            //            crc.ellipse(this.x, this.y, 10, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
            //            crc.fill();
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "red";
            sfd.crc.fillRect(this.x - 10, this.y - 10, (this.currentHealth / this.maxHealth) * 20, 2);
        }
        move() {
            if (this.y <= sfd.canvas.height) {
                this.y = this.y + 3;
            }
            else {
                this.y = -80;
            }
        }
    }
    sfd.Minion = Minion;
})(sfd || (sfd = {}));
//# sourceMappingURL=Minion.js.map