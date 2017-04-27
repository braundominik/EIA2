/// <reference path="snowflake.ts"/>

namespace tut2 {
    window.addEventListener("load", init);
    let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    let x: number = 100;
    let y: number = 100;
    let radius: number = 10;

    let snowflakes: Snowflake[] = [];


    function init(): void {
        canvas = document.createElement("canvas");
        canvas.height = 450;
        canvas.width = 700;
        document.body.appendChild(canvas);
        crc = canvas.getContext("2d");
        createSnowflakes(200);
        animate();
    }

    function animate(): void {
        drawBackground();
        drawSnowflakes();
        updateSnowflakes();
        setTimeout(animate, 20);
    }

    function drawSnowflakes(): void {
        for (let i: number = 0; i < snowflakes.length; i++) {
            drawSnowflake(snowflakes[i].x, snowflakes[i].y);
        }
    }

    function drawSnowflake(x: number, y: number): void {

        crc.beginPath();
        crc.arc(x, y, 10, 0, 2 * Math.PI);
        crc.closePath();
        crc.fillStyle = "white";
        crc.fill();
        crc.stroke();
    }

    function updateSnowflakes(): void {
        for (let i: number = 0; i < snowflakes.length; i++) {
            snowflakes[i].y++;

            if (snowflakes[i].y > canvas.height) {
                snowflakes[i].y = 0 - radius;
            }
        }
    }


    function drawBackground(): void {

        crc.fillStyle = "black";
        crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);
    }

    function createSnowflakes(_amount: number): void {
        for (let i: number = 0; i < _amount; i++) {
            let x: number = Math.random() * crc.canvas.width;
            let y: number = Math.random() * crc.canvas.height;
            let snowflake: Snowflake = {
                x: x,
                y: y,
                radius: 10
            };
            snowflakes.push(snowflake);
        }
    }

}