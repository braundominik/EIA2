/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a9;
(function (a9) {
    class Cup extends a9.Stuff {
        constructor(_price, _name, _size) {
            super(_price, _name);
            this.size = _size;
        }
    }
    a9.Cup = Cup;
})(a9 || (a9 = {}));
//# sourceMappingURL=Cup.js.map