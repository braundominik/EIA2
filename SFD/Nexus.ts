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
    export class Nexus extends Enemy {


        constructor(_h: number) {
            super(_h);
            let temp: number[] = getPosIn(50, -1000, 350, -100);
            this.x = temp[0];
            this.y = temp[1];
            

        }




        draw(): void {

            crc.beginPath();
            crc.fillStyle = "black";
            crc.ellipse(this.x, this.y, 10, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
            crc.fill();

            crc.beginPath();
            crc.fillStyle = "red";
            crc.fillRect(this.x - 10, this.y - 15, (this.currentHealth / this.maxHealth) * 20, 2);
        }

        move(): void {
            if (this.y <= canvas.height) {
                this.y = this.y + 3;
            }

            else {
                this.y = 0;
            }

        }

    }
}
