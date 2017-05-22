/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 14.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace beehuhn {
    export class Flower {
        x: number;
        y: number;
        style: number;
        ellipsevalue1: number;
        ellipsevalue2: number;
        dotcolor: number;
        positionX: number;
        positionY: number;
        nectar: number;


        constructor(_x: number, _y: number, _style: number) {
            this.x = _x;
            this.y = _y;
            this.positionX = _x + 2;
            this.positionY = _y - 45;
            this.style = _style;
            this.nectar = 30;
        }

        draw(): void {
            //abstract
            }
        }



    }
}

