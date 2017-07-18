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
    export class Enemy {
        maxHealth: number;
        currentHealth: number;
        x: number;
        y: number;
        damaged: boolean;
        value: number;


        constructor(_h: number, _v: number) {
            this.value = _v;
            this.damaged = false;
            this.maxHealth = _h;
            this.currentHealth = this.maxHealth;
        }

        update(): void {
            this.move();
            this.receiveDamage();
            this.draw();
        }

        draw(): void {
            //abstract
        }

        move(): void {
            //abstract
        }

        receiveDamage(): void {
            if (this.currentHealth <= 0) {
                game.gold = Math.round((game.gold + this.value) * 10) / 10;
                enemies.splice(enemies.indexOf(this), 1);
            }

            let x: number = canvas.width / 2;
            let y: number = canvas.height / 2;

            if (this.x > (x - 150) && this.x < (x + 150) && this.y > (y - 150) && this.y < y + 150) {
                this.damaged = true;
                this.currentHealth = this.currentHealth - (sword.damageMod * (1 + (game.nexusCoresActivated * 0.5)));
            }
        }




    }
}

