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
    export class Game {
        swordlvl: number;
        rotationlvl: number;
        wave: number;
        level: number;
        game: number;
        gold: number;
        dps: number;
        creepHealth: number;
        lastHealth: number;
        creepValue: number;
        lastValue: number;
        accountUser: string;
        accountPassword: string;
        tower: boolean;
        nexusCoresDeactivated: number;
        nexusCoresActivated: number;


        constructor() {
            this.lastValue = 0;
            this.lastHealth = 0;
            this.nexusCoresDeactivated = 0;
            this.nexusCoresActivated = 0;
            this.tower = false;
            this.creepHealth = 10;
            this.creepValue = 0.3125;
            this.wave = 0;
            this.level = 1;
            this.game = 1;
            this.gold = 0;
            this.accountUser = "";
            this.swordlvl = 0;
            this.rotationlvl = 1;
        }

        hardReset(): void {
            enemies.splice(0);
            freeze.checked = false;
            game = new Game();
        }

        softReset(): void {
            enemies.splice(0);
            freeze.checked = false;
            let activatedCores: number = game.nexusCoresDeactivated + game.nexusCoresActivated;
            game = new Game();
            game.nexusCoresActivated = activatedCores;
        }

    }
}
