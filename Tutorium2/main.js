/// <reference path="snowflake.ts"/>
var tut2;
(function (tut2) {
    window.addEventListener("load", init);
    let crc;
    let canvas;
    let x = 100;
    let y = 100;
    let radius = 10;
    let snowflakes = [];
    function init() {
        canvas = document.createElement("canvas");
        canvas.height = 450;
        canvas.width = 700;
        document.body.appendChild(canvas);
        crc = canvas.getContext("2d");
        createSnowflakes(200);
        animate();
    }
    function animate() {
        drawBackground();
        drawSnowflakes();
        updateSnowflakes();
        setTimeout(animate, 20);
    }
    function drawSnowflakes() {
        for (let i = 0; i < snowflakes.length; i++) {
            drawSnowflake(snowflakes[i].x, snowflakes[i].y);
        }
    }
    function drawSnowflake(x, y) {
        crc.beginPath();
        crc.arc(x, y, 10, 0, 2 * Math.PI);
        crc.closePath();
        crc.fillStyle = "white";
        crc.fill();
        crc.stroke();
    }
    function updateSnowflakes() {
        for (let i = 0; i < snowflakes.length; i++) {
            snowflakes[i].y++;
            if (snowflakes[i].y > canvas.height) {
                snowflakes[i].y = 0 - radius;
            }
        }
    }
    function drawBackground() {
        crc.fillStyle = "black";
        crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);
    }
    function createSnowflakes(_amount) {
        for (let i = 0; i < _amount; i++) {
            let x = Math.random() * crc.canvas.width;
            let y = Math.random() * crc.canvas.height;
            let snowflake = {
                x: x,
                y: y,
                radius: 10
            };
            snowflakes.push(snowflake);
        }
    }
})(tut2 || (tut2 = {}));
//# sourceMappingURL=main.js.map