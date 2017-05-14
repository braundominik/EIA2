/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
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
        nectar: number;
        status: string;
        target: number[];
        targetIndex: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.richtung = true;
            this.sizemulti = 1;
            this.nectar = 0;
            this.status = "idle";
            this.target = []; //coordinates of the targeted flower
            this.targetIndex = 0; //Index of the targeted flower
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


            if (this.nectar > 0) {

                crc.beginPath();
                crc.fillStyle = "#FFC20F";
                crc.arc(this.x, this.y + 5, this.nectar * 0.5, 0, 2 * Math.PI, false);
                crc.fill();
            }

        }

        move(): void {
            switch (this.status) {

                case "idle":
                    if (this.nectar > 0) {
                        this.status = "returning";
                    }
                    if (this.richtung) {
                        this.y = this.y + getRndNumber(-2, 2);
                        this.x = (this.x + getRndNumber(-3, 1));
                    }
                    else {
                        this.y = this.y + getRndNumber(-2, 2);
                        this.x = (this.x + getRndNumber(-1, 3));

                    }
                    break;

                case "targeting":

                    if (Math.round(this.x) == Math.round(this.target[0]) || (Math.round(this.x) - 1) == Math.round(this.target[0]) || (Math.round(this.x) + 1) == Math.round(this.target[0])) {
                        this.y = this.y + getRndNumber(0, (this.target[1] - this.y) * 0.05);

                        if (Math.round(this.target[1]) == Math.round(this.y)) {

                            this.status = "gathering";
                        }

                    }
                    else {
                        if (this.richtung) {
                            this.y = this.y + getRndNumber(0, (this.target[1] - this.y) * 0.05);
                            this.x = (this.x + getRndNumber(-3, 1));
                        }
                        else {
                            this.y = this.y + getRndNumber(0, (this.target[1] - this.y) * 0.05);
                            this.x = (this.x + getRndNumber(-1, 3));

                        }
                    }
                    break;

                case "gathering":
                    if (this.nectar <= 10 && flowers[this.targetIndex].nectar > 0.03) {
                        flowers[this.targetIndex].nectar = (flowers[this.targetIndex].nectar) - 0.02;
                        this.nectar = this.nectar + 0.02;
                    }
                    else {
                        this.nectar = Math.round(this.nectar);
                        this.status = "idle";
                    }
                    break;

                case "returning":
                    this.target[0] = beehive.x;
                    this.target[1] = beehive.y;
                    if (this.flyToTarget()) {
                        if (this.nectar > 0.05) {
                            this.nectar = this.nectar - 0.05;
                            beehive.nectar = beehive.nectar + 0.05;
                        }
                        else {
                            this.nectar = Math.round(this.nectar);
                            beehive.nectar = Math.round(beehive.nectar);
                            this.status = "idle";
                        }
                    }

            }

            if (this.y <= 0 || this.y >= canvas.height) {
                this.y = canvas.height - this.y;
            }

            if (this.x <= 0 || this.x >= canvas.width) {
                this.x = canvas.width - this.x;
            }
        }

        flyToTarget(): boolean {

            if (Math.round(this.x) == Math.round(this.target[0]) || (Math.round(this.x) - 1) == Math.round(this.target[0]) || (Math.round(this.x) + 1) == Math.round(this.target[0])) {
                this.y = this.y + getRndNumber(0, (this.target[1] - this.y) * 0.05);

                if (Math.round(this.target[1]) == Math.round(this.y)) {

                    return true;
                }

                return false;

            }
            else {
                if (this.richtung) {
                    this.y = this.y + getRndNumber(0, (this.target[1] - this.y) * 0.05);
                    this.x = (this.x + getRndNumber(-3, 1));
                }
                else {
                    this.y = this.y + getRndNumber(0, (this.target[1] - this.y) * 0.05);
                    this.x = (this.x + getRndNumber(-1, 3));

                }
                return false;
            }

        }

    }
}