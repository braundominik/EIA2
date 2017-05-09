/*
Aufgabe: Aufgabe 5
Name: Braun Dominik
Matrikel: 254901
Datum: 30.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace a7 {
    export class Bee {
        x: number;
        y: number;
        richtung: boolean;
        sizemulti: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.richtung = true;
            this.sizemulti = 1;
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            //        crc.fillStyle = "black";
            //        crc.fillRect(x, y, 10, 10);
            crc.beginPath();
            var grd: CanvasGradient = crc.createLinearGradient(this.x - 5 * this.sizemulti, this.y, this.x + 5 * this.sizemulti, this.y);
            if (this.richtung) {
                grd.addColorStop(0.25, "black");
                grd.addColorStop(0.3, "yellow");
                grd.addColorStop(0.4, "yellow");
                grd.addColorStop(0.5, "black");
                grd.addColorStop(0.6, "black");
                grd.addColorStop(0.7, "yellow");
                grd.addColorStop(0.8, "yellow");
                grd.addColorStop(1, "black");
            }
            else {
                grd.addColorStop(0, "black");
                grd.addColorStop(0.1, "yellow");
                grd.addColorStop(0.3, "yellow");
                grd.addColorStop(0.4, "black");
                grd.addColorStop(0.55, "black");
                grd.addColorStop(0.55, "yellow");
                grd.addColorStop(0.74, "yellow");
                grd.addColorStop(0.75, "black");
            }
            crc.fillStyle = grd;
            crc.ellipse(this.x, this.y, 5 * this.sizemulti, 6.25 * this.sizemulti, 90 * Math.PI / 180, 0, 2 * Math.PI);
            crc.fill();

        }

        move(): void {

            if (this.richtung) {

                this.y = this.y + getRndNumber(-2, 2);
                this.x = (this.x + getRndNumber(-3, 1));


            }
            else {
                this.y = this.y + getRndNumber(-2, 2);
                this.x = (this.x + getRndNumber(-1, 3));

            }

            if (this.y <= 0 || this.y >= canvas.height) {
                this.y = canvas.height - this.y;
            }

            if (this.x <= 0 || this.x >= canvas.width) {
                this.x = canvas.width - this.x;
            }

        }

    }
}