/*
Aufgabe: SPINNING
Name: Braun Dominik
Matrikel: 254901
Datum: 21.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var sfd;
(function (sfd) {
    class Game {
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
            this.accountPassword = "";
            this.swordlvl = 0;
            this.rotationlvl = 1;
        }
        hardReset() {
            sfd.enemies.splice(0);
            sfd.freeze.checked = false;
            sfd.game = new Game();
        }
        softReset() {
            sfd.enemies.splice(0);
            sfd.freeze.checked = false;
            let activatedCores = sfd.game.nexusCoresDeactivated + sfd.game.nexusCoresActivated;
            sfd.game = new Game();
            sfd.game.nexusCoresActivated = activatedCores;
        }
    }
    sfd.Game = Game;
})(sfd || (sfd = {}));
//# sourceMappingURL=Game.js.map