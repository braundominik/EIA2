/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a8;
(function (a8) {
    class Bee {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.richtung = true;
            this.sizemulti = 1;
            this.status = "idle";
            this.target = []; //coordinates of the targeted flower
            this.targetIndex = 0; //Index of the targeted flower
            this.energy = 400;
            this.boldness = Math.round(Math.random() * 40);
        }
        update() {
            this.manageEnergy();
            this.move();
            this.draw();
        }
        draw() {
            //        crc.fillStyle = "black";
            //        crc.fillRect(x, y, 10, 10);
            a8.crc.beginPath();
            var grd = a8.crc.createLinearGradient(this.x - 5 * this.sizemulti, this.y, this.x + 5 * this.sizemulti, this.y);
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
            a8.crc.fillStyle = grd;
            a8.crc.ellipse(this.x, this.y, 5 * this.sizemulti, 6.25 * this.sizemulti, 90 * Math.PI / 180, 0, 2 * Math.PI);
            a8.crc.fill();
        }
        //Bee moves depending on current status
        move() {
            if (this.energy < (75 - this.boldness) && this.status != "dying" && this.status != "dead") {
                this.status = "energy";
            }
            switch (this.status) {
                case "idle":
                    if (this.richtung) {
                        this.y = this.y + a8.getRndNumber(-2, 2);
                        this.x = (this.x + a8.getRndNumber(-3, 1));
                    }
                    else {
                        this.y = this.y + a8.getRndNumber(-2, 2);
                        this.x = (this.x + a8.getRndNumber(-1, 3));
                    }
                    break;
                case "targeting":
                    if (this.flyToTarget()) {
                        this.status = "gathering";
                    }
                    break;
                case "energy":
                    if (Math.round(this.energy) == 0) {
                        this.status = "dying";
                    }
                    this.target[0] = a8.beehive.x;
                    this.target[1] = a8.beehive.y;
                    if (this.flyToTarget() && this.energy <= 399.5) {
                        this.energy = this.energy + 0.5;
                    }
                    else {
                        if (this.energy > 0.1) {
                            this.energy = this.energy - 0.1;
                        }
                    }
                    if (this.energy > 399.5) {
                        this.boldness = this.boldness + 5;
                        this.status = "idle";
                    }
                    break;
                case "dying":
                    this.energy = 0;
                    if (this.y < 449) {
                        this.y = Math.round(this.y + 0.5);
                    }
                    else {
                        this.status = "dead";
                    }
            }
            if (this.y <= 0) {
                this.y = a8.canvas.height - 1;
            }
            if (this.y >= a8.canvas.height) {
                this.y = 0 + 1;
            }
            if (this.x <= 0) {
                this.x = a8.canvas.width - 1;
            }
            if (this.x >= a8.canvas.width) {
                this.x = 0 + 1;
            }
        }
        manageEnergy() {
            if (this.energy > 0 && this.status != "energy" && this.status != "dying") {
                this.energy = this.energy - 0.1;
            }
        }
        flyToTarget() {
            let dtc = Math.sqrt((Math.pow(this.target[0] - this.x, 2)) + (Math.pow(this.target[1] - this.y, 2)));
            if (dtc < 10) {
                return true;
            }
            else {
                if (this.x < dtc) {
                    this.x += ((this.x - this.target[0]) * 0.01);
                    this.y += (this.target[1] - this.y) * 0.01;
                }
                else {
                    this.x += ((this.target[0] - this.x) * 0.01);
                    this.y += (this.target[1] - this.y) * 0.01;
                    return false;
                }
            }
        }
    }
    a8.Bee = Bee;
})(a8 || (a8 = {}));
//# sourceMappingURL=Bee.js.map