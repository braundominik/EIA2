/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a8;
(function (a8) {
    class Flower {
        constructor(_x, _y, _style) {
            this.x = _x;
            this.y = _y;
            this.positionX = _x + 2;
            this.positionY = _y - 45;
            this.style = _style;
            this.nectar = 30;
        }
        draw() {
            //abstract
        }
    }
    a8.Flower = Flower;
})(a8 || (a8 = {}));
//# sourceMappingURL=Flower.js.map