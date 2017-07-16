/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace sfd {
    export class Sword {
        rotation: number;
        rotSpeed: number;
        damage: number;
        damageMod: number;

        constructor() {
            this.rotSpeed = 1;
            this.rotation = 0;
            this.damage = 1;
        }

        update(): void {
            this.damage = 0.01 + (game.swordlvl / 20);
            this.damageMod = this.damage + (this.damage * (this.rotSpeed / 5));
            this.rotSpeed = 1 + clicks;
            this.rotation = this.rotation + this.rotSpeed;
            this.draw();
        }

        draw(): void {
            let x: number = canvas.width / 2;
            let y: number = canvas.height / 2;

            crc.beginPath();
            crc.fillStyle = "blue";
            crc.fillRect(x - 150, y - 150, 300, 300);

            crc.fill();

            crc.beginPath();
            crc.fillStyle = "red";
            crc.strokeStyle = "red";
            crc.fillRect(x - 50, y - 50, 100, 100);
            crc.fill();

            crc.save();

            x = 0;
            y = -50;

            crc.translate(canvas.width / 2, canvas.height / 2);
            crc.rotate(this.rotation * Math.PI / 180);

            crc.beginPath();
            crc.fillStyle = "yellow";
            crc.lineTo(x, y);
            crc.lineTo(x + 6, y - 5);
            crc.lineTo(x, y - 10);
            crc.lineTo(x - 6, y - 5);
            crc.fill();
            //ausgang: 46 96
            crc.beginPath();
            crc.fillStyle = "brown";
            crc.lineTo(x + 3, y - 8);
            crc.lineTo(x + 2, y - 30);
            crc.lineTo(x - 2, y - 30);
            crc.lineTo(x - 3, y - 8);
            crc.fill();

            crc.beginPath();
            crc.fillStyle = "yellow";
            crc.lineTo(x + 2, y - 30);
            crc.lineTo(x + 9, y - 33);
            crc.lineTo(x + 13, y - 41);
            crc.lineTo(x + 9, y - 44);
            crc.lineTo(x + 3, y - 37);

            crc.lineTo(x - 3, y - 37);
            crc.lineTo(x - 9, y - 44);
            crc.lineTo(x - 13, y - 41);
            crc.lineTo(x - 9, y - 33);
            crc.lineTo(x - 2, y - 30);
            crc.fill();

            crc.beginPath();
            crc.fillStyle = "grey";
            crc.lineTo(x + 3, y - 37);
            crc.lineTo(x + 6, y - 50);
            crc.lineTo(x + 3, y - 80);
            crc.lineTo(x + 5, y - 86);
            crc.lineTo(x, y - 93);
            crc.lineTo(x - 5, y - 86);
            crc.lineTo(x - 3, y - 80);
            crc.lineTo(x - 6, y - 50);
            crc.lineTo(x - 3, y - 37);
            crc.fill();

            crc.restore();



        }
    }
}