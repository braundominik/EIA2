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
    function getPosIn(upperLeftx, upperLefty, lowerRightx, lowerRighty) {
        let rndX = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
        let rndY = Math.random() * (lowerRighty - upperLefty) + upperLefty;
        return new Array(rndX, rndY);
    }
    sfd.getPosIn = getPosIn;
    function getRndNumber(min, max) {
        let x = Math.random() * (max - min) + min;
        return x;
    }
    sfd.getRndNumber = getRndNumber;
})(sfd || (sfd = {}));
//# sourceMappingURL=commonFunctions.js.map