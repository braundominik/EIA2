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
        wave: number;
        level: number;
        game: number;
        gold: number;
        dps: number;
        accountUser: string;
        accountPassword: string;


        constructor() {
            this.wave = 1;
            this.level = 1;
            this.game = 1;
            this.accountUser = "";
        }
    }
}
