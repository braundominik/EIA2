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
    class Honeybee extends a8.Bee {
        constructor(_x, _y) {
            super(_x, _y);
            this.nectar = 0;
        }
        move() {
            if (this.nectar > 0) {
                a8.crc.beginPath();
                a8.crc.fillStyle = "#FFC20F";
                a8.crc.arc(this.x, this.y + 5, this.nectar * 0.5, 0, 2 * Math.PI, false);
                a8.crc.fill();
            }
            if (this.energy < (75 - this.boldness) && this.status != "dying" && this.status != "dead") {
                this.status = "energy";
            }
            switch (this.status) {
                case "idle":
                    if (this.nectar > 0) {
                        this.status = "returning";
                    }
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
                case "gathering":
                    if (this.nectar <= 10 && a8.flowers[this.targetIndex].nectar > 0.03) {
                        a8.flowers[this.targetIndex].nectar = (a8.flowers[this.targetIndex].nectar) - 0.02;
                        this.nectar = this.nectar + 0.02;
                    }
                    else {
                        a8.flowers[this.targetIndex].nectar = Math.round(a8.flowers[this.targetIndex].nectar);
                        this.nectar = Math.round(this.nectar);
                        this.status = "idle";
                    }
                    break;
                case "returning":
                    this.target[0] = a8.beehive.x;
                    this.target[1] = a8.beehive.y;
                    if (this.flyToTarget()) {
                        if (this.nectar > 0.05) {
                            this.nectar = this.nectar - 0.05;
                            a8.beehive.nectar = a8.beehive.nectar + 0.05;
                        }
                        else {
                            this.nectar = Math.round(this.nectar);
                            a8.beehive.nectar = Math.round(a8.beehive.nectar);
                            this.status = "idle";
                        }
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
    }
    a8.Honeybee = Honeybee;
})(a8 || (a8 = {}));
//# sourceMappingURL=Honeybee.js.map