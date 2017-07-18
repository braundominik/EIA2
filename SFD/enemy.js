/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var sfd;
(function (sfd) {
    class Enemy {
        constructor(_h, _v) {
            this.value = _v;
            this.damaged = false;
            this.maxHealth = _h;
            this.currentHealth = this.maxHealth;
        }
        update() {
            this.move();
            this.receiveDamage();
            this.draw();
        }
        draw() {
            //abstract
        }
        move() {
            //abstract
        }
        receiveDamage() {
            if (this.currentHealth <= 0) {
                sfd.game.gold = Math.round((sfd.game.gold + this.value) * 10) / 10;
                sfd.enemies.splice(sfd.enemies.indexOf(this), 1);
            }
            let x = sfd.canvas.width / 2;
            let y = sfd.canvas.height / 2;
            if (this.x > (x - 150) && this.x < (x + 150) && this.y > (y - 150) && this.y < y + 150) {
                this.damaged = true;
                this.currentHealth = this.currentHealth - (sfd.sword.damageMod * (1 + (sfd.game.nexusCoresActivated * 0.5)));
            }
        }
    }
    sfd.Enemy = Enemy;
})(sfd || (sfd = {}));
//# sourceMappingURL=Enemy.js.map