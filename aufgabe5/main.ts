/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace a5 {
    window.addEventListener("load", init);
    let crc: CanvasRenderingContext2D;
    
    function init(): void {
        let canvas: HTMLCanvasElement;
        canvas = document.createElement("canvas");
        canvas.height = 1400;
        canvas.width = 900;
        document.body.appendChild(canvas);
        crc = canvas.getContext("2d");
        
        crc.fillStyle = "#0000ff";
        crc.fillRect(0,0,canvas.width,canvas.height);
    }
}  