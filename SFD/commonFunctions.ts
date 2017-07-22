/*
Aufgabe: SPINNING
Name: Braun Dominik
Matrikel: 254901
Datum: 21.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace sfd {

    export function getPosIn(upperLeftx: number, upperLefty: number, lowerRightx: number, lowerRighty: number): number[] {
        let rndX: number = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
        let rndY: number = Math.random() * (lowerRighty - upperLefty) + upperLefty;
        return new Array(rndX, rndY);

    }

    export function getRndNumber(min: number, max: number): number {
        let x: number = Math.random() * (max - min) + min;
        return x;

    }

}