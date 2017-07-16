/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace sfd {
    export class Tower extends Enemy {


        constructor(_h: number, _v: number) {
            super(_h, _v);
            this.x = 200;
            this.y = -200;


        }




        draw(): void {

            crc.beginPath();
            crc.fillStyle = "black";
            crc.ellipse(this.x, this.y, 50, 50, 90 * Math.PI / 180, 0, 2 * Math.PI);
            crc.fill();

            crc.beginPath();
            crc.fillStyle = "red";
            crc.fillRect(this.x - 50, this.y - 70, (this.currentHealth / this.maxHealth) * 100, 7);
        }

        move(): void {
            if (this.y <= 270) {
                this.y = this.y + 2;
            }

        }

    }
}
