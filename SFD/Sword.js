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
    class Sword {
        constructor() {
            this.rotSpeed = 1;
            this.rotation = 0;
            this.damage = 1;
        }
        update() {
            this.damage = 0.1 + (sfd.game.swordlvl / 3);
            this.damageMod = this.damage + (this.damage * (this.rotSpeed / 5));
            this.rotSpeed = 1 + sfd.clicks + (sfd.game.rotationlvl / 10);
            this.rotation = this.rotation + this.rotSpeed;
            this.draw();
        }
        draw() {
            let x = sfd.canvas.width / 2;
            let y = sfd.canvas.height / 2;
            //            crc.beginPath();
            //            crc.fillStyle = "blue";
            //            crc.fillRect(x - 150, y - 150, 300, 300);
            //
            //            crc.fill();
            //
            //            crc.beginPath();
            //            crc.fillStyle = "red";
            //            crc.strokeStyle = "red";
            //            crc.fillRect(x - 50, y - 50, 100, 100);
            //            crc.fill();
            let img;
            img = document.getElementById("warrior");
            sfd.crc.save();
            x = 0;
            y = -50;
            sfd.crc.translate(sfd.canvas.width / 2, sfd.canvas.height / 2);
            sfd.crc.rotate(this.rotation * Math.PI / 180);
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "yellow";
            sfd.crc.lineTo(x, y);
            sfd.crc.lineTo(x + 6, y - 5);
            sfd.crc.lineTo(x, y - 10);
            sfd.crc.lineTo(x - 6, y - 5);
            sfd.crc.fill();
            //ausgang: 46 96
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "brown";
            sfd.crc.lineTo(x + 3, y - 8);
            sfd.crc.lineTo(x + 2, y - 30);
            sfd.crc.lineTo(x - 2, y - 30);
            sfd.crc.lineTo(x - 3, y - 8);
            sfd.crc.fill();
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "yellow";
            sfd.crc.lineTo(x + 2, y - 30);
            sfd.crc.lineTo(x + 9, y - 33);
            sfd.crc.lineTo(x + 13, y - 41);
            sfd.crc.lineTo(x + 9, y - 44);
            sfd.crc.lineTo(x + 3, y - 37);
            sfd.crc.lineTo(x - 3, y - 37);
            sfd.crc.lineTo(x - 9, y - 44);
            sfd.crc.lineTo(x - 13, y - 41);
            sfd.crc.lineTo(x - 9, y - 33);
            sfd.crc.lineTo(x - 2, y - 30);
            sfd.crc.fill();
            sfd.crc.beginPath();
            sfd.crc.fillStyle = "grey";
            sfd.crc.lineTo(x + 3, y - 37);
            sfd.crc.lineTo(x + 6, y - 50);
            sfd.crc.lineTo(x + 3, y - 80);
            sfd.crc.lineTo(x + 5, y - 86);
            sfd.crc.lineTo(x, y - 93);
            sfd.crc.lineTo(x - 5, y - 86);
            sfd.crc.lineTo(x - 3, y - 80);
            sfd.crc.lineTo(x - 6, y - 50);
            sfd.crc.lineTo(x - 3, y - 37);
            sfd.crc.fill();
            sfd.crc.drawImage(img, x - 25, y - 20);
            sfd.crc.restore();
        }
    }
    sfd.Sword = Sword;
})(sfd || (sfd = {}));
//# sourceMappingURL=Sword.js.map