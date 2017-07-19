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

            let img: HTMLImageElement;
            img = <HTMLImageElement>document.getElementById("tower");
            crc.drawImage(img, this.x - 50, this.y - 120, 79.5, 147.5);

            crc.beginPath();
            crc.fillStyle = "red";
            crc.fillRect(this.x - 75, this.y-150, (this.currentHealth / this.maxHealth) * 100, 7);
        }

        move(): void {
            if (this.y <= 270) {
                this.y = this.y + 2;
            }

        }

    }
}
