/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var beehuhn;
(function (beehuhn) {
    class Honeybee extends beehuhn.Bee {
        constructor(_x, _y) {
            super(_x, _y);
            this.nectar = 0;
        }
        move() {
            if (this.nectar > 0) {
                beehuhn.crc.beginPath();
                beehuhn.crc.fillStyle = "#FFC20F";
                beehuhn.crc.arc(this.x, this.y + 5, this.nectar * 0.5, 0, 2 * Math.PI, false);
                beehuhn.crc.fill();
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
                        this.y = this.y + beehuhn.getRndNumber(-2, 2);
                        this.x = (this.x + beehuhn.getRndNumber(-3, 1));
                    }
                    else {
                        this.y = this.y + beehuhn.getRndNumber(-2, 2);
                        this.x = (this.x + beehuhn.getRndNumber(-1, 3));
                    }
                    break;
                case "targeting":
                    if (this.flyToTarget()) {
                        this.status = "gathering";
                    }
                    break;
                case "gathering":
                    if (this.nectar <= 10 && beehuhn.flowers[this.targetIndex].nectar > 0.03) {
                        beehuhn.flowers[this.targetIndex].nectar = (beehuhn.flowers[this.targetIndex].nectar) - 0.02;
                        this.nectar = this.nectar + 0.02;
                    }
                    else {
                        beehuhn.flowers[this.targetIndex].nectar = Math.round(beehuhn.flowers[this.targetIndex].nectar);
                        this.nectar = Math.round(this.nectar);
                        this.status = "idle";
                    }
                    break;
                case "returning":
                    this.target[0] = beehuhn.beehive.x;
                    this.target[1] = beehuhn.beehive.y;
                    if (this.flyToTarget()) {
                        if (this.nectar > 0.05) {
                            this.nectar = this.nectar - 0.05;
                            beehuhn.beehive.nectar = beehuhn.beehive.nectar + 0.05;
                        }
                        else {
                            this.nectar = Math.round(this.nectar);
                            beehuhn.beehive.nectar = Math.round(beehuhn.beehive.nectar);
                            this.status = "idle";
                        }
                    }
                    break;
                case "energy":
                    if (Math.round(this.energy) == 0) {
                        this.status = "dying";
                    }
                    this.target[0] = beehuhn.beehive.x;
                    this.target[1] = beehuhn.beehive.y;
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
                this.y = beehuhn.canvas.height - 1;
            }
            if (this.y >= beehuhn.canvas.height) {
                this.y = 0 + 1;
            }
            if (this.x <= 0) {
                this.x = beehuhn.canvas.width - 1;
            }
            if (this.x >= beehuhn.canvas.width) {
                this.x = 0 + 1;
            }
        }
    }
    beehuhn.Honeybee = Honeybee;
})(beehuhn || (beehuhn = {}));
//# sourceMappingURL=Honeybee.js.map