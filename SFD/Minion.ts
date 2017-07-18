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
    export class Minion extends Enemy {


        constructor(_h: number, _v: number) {
            super(_h, _v);
            let temp: number[];
            if (Math.random() > 0.5) {
                temp = getPosIn(50, -1000, 100, -100);
            }
            else {
                temp = getPosIn(300, -1000, 350, -100);
            }

            this.x = temp[0];
            this.y = temp[1];


        }




        draw(): void {
            let img: HTMLImageElement;
            img = document.createElement("img");
            img.src = "blueMinion.gif";
            crc.drawImage(img, this.x - 20, this.y, 40, 80);
            //
            //            crc.beginPath();
            //            crc.fillStyle = "black";
            //            crc.ellipse(this.x, this.y, 10, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
            //            crc.fill();

            crc.beginPath();
            crc.fillStyle = "red";
            crc.fillRect(this.x - 10, this.y - 10, (this.currentHealth / this.maxHealth) * 20, 2);
        }

        move(): void {
            if (this.y <= canvas.height) {
                this.y = this.y + 3;
            }

            else {
                this.y = -80;
            }

        }

    }
}

