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
    class Game {
        constructor() {
            this.creepHealth = 10;
            this.creepValue = 0.3125;
            this.wave = 0;
            this.level = 1;
            this.game = 1;
            this.gold = 0;
            this.accountUser = "";
            this.swordlvl = 0;
            this.rotationlvl = 0;
        }
        reset() {
            sfd.game = new Game();
        }
    }
    sfd.Game = Game;
})(sfd || (sfd = {}));
//# sourceMappingURL=Game.js.map