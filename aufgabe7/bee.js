/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a7;
(function (a7) {
    class Bee {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.richtung = true;
            this.sizemulti = 1;
            this.nectar = 0;
            this.status = "idle";
            this.target = []; //coordinates of the targeted flower
            this.targetIndex = 0; //Index of the targeted flower
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //        crc.fillStyle = "black";
            //        crc.fillRect(x, y, 10, 10);
            a7.crc.beginPath();
            var grd = a7.crc.createLinearGradient(this.x - 5 * this.sizemulti, this.y, this.x + 5 * this.sizemulti, this.y);
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
            a7.crc.fillStyle = grd;
            a7.crc.ellipse(this.x, this.y, 5 * this.sizemulti, 6.25 * this.sizemulti, 90 * Math.PI / 180, 0, 2 * Math.PI);
            a7.crc.fill();
            if (this.nectar > 9) {
                a7.crc.beginPath();
                a7.crc.fillStyle = "#FFC20F";
                a7.crc.arc(this.x, this.y + 5, 3, 0, 2 * Math.PI, false);
                a7.crc.fill();
            }
        }
        move() {
            switch (this.status) {
                case "idle":
                    if (this.nectar > 0) {
                        this.status = "returning";
                    }
                    if (this.richtung) {
                        this.y = this.y + a7.getRndNumber(-2, 2);
                        this.x = (this.x + a7.getRndNumber(-3, 1));
                    }
                    else {
                        this.y = this.y + a7.getRndNumber(-2, 2);
                        this.x = (this.x + a7.getRndNumber(-1, 3));
                    }
                    break;
                case "targeting":
                    if (Math.round(this.x) == Math.round(this.target[0]) || (Math.round(this.x) - 1) == Math.round(this.target[0]) || (Math.round(this.x) + 1) == Math.round(this.target[0])) {
                        this.y = this.y + a7.getRndNumber(0, (this.target[1] - this.y) * 0.05);
                        if (Math.round(this.target[1]) == Math.round(this.y)) {
                            this.status = "gathering";
                        }
                    }
                    else {
                        if (this.richtung) {
                            this.y = this.y + a7.getRndNumber(0, (this.target[1] - this.y) * 0.05);
                            this.x = (this.x + a7.getRndNumber(-3, 1));
                        }
                        else {
                            this.y = this.y + a7.getRndNumber(0, (this.target[1] - this.y) * 0.05);
                            this.x = (this.x + a7.getRndNumber(-1, 3));
                        }
                    }
                    break;
                case "gathering":
                    if (this.nectar <= 10 && a7.flowers[this.targetIndex].nectar > 0.03) {
                        a7.flowers[this.targetIndex].nectar = (a7.flowers[this.targetIndex].nectar) - 0.02;
                        this.nectar = this.nectar + 0.02;
                    }
                    else {
                        this.nectar = Math.round(this.nectar);
                        this.status = "idle";
                    }
                    break;
                case "returning":
                    this.target[0] = a7.stockposX;
                    this.target[1] = a7.stockposY;
                    if (this.flyToTarget()) {
                        if (this.nectar > 0.05) {
                            this.nectar = this.nectar - 0.05;
                        }
                        else {
                            this.nectar = Math.round(this.nectar);
                            this.status = "idle";
                        }
                    }
            }
            if (this.y <= 0 || this.y >= a7.canvas.height) {
                this.y = a7.canvas.height - this.y;
            }
            if (this.x <= 0 || this.x >= a7.canvas.width) {
                this.x = a7.canvas.width - this.x;
            }
        }
        flyToTarget() {
            if (Math.round(this.x) == Math.round(this.target[0]) || (Math.round(this.x) - 1) == Math.round(this.target[0]) || (Math.round(this.x) + 1) == Math.round(this.target[0])) {
                this.y = this.y + a7.getRndNumber(0, (this.target[1] - this.y) * 0.05);
                if (Math.round(this.target[1]) == Math.round(this.y)) {
                    return true;
                }
                return false;
            }
            else {
                if (this.richtung) {
                    this.y = this.y + a7.getRndNumber(0, (this.target[1] - this.y) * 0.05);
                    this.x = (this.x + a7.getRndNumber(-3, 1));
                }
                else {
                    this.y = this.y + a7.getRndNumber(0, (this.target[1] - this.y) * 0.05);
                    this.x = (this.x + a7.getRndNumber(-1, 3));
                }
                return false;
            }
        }
    }
    a7.Bee = Bee;
})(a7 || (a7 = {}));
//# sourceMappingURL=Bee.js.map