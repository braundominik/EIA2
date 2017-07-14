/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace sfd {
    window.addEventListener("load", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let saveBG: ImageData;
    export let sword: Sword = new Sword();
    export let enemies: Enemy[] = [];
    export let game: Game = new Game();
    export let clicks: number = 0;



    function init(): void {



        canvas = <HTMLCanvasElement>(document.getElementById("game"));
        canvas.addEventListener("click", manipulateRotation);
        crc = canvas.getContext("2d");

        buildBackground();

        saveBG = crc.getImageData(0, 0, canvas.width, canvas.height);
        console.log(saveBG);
        spawnEnemy("minion");
        animate();


    }

    let count: number = 0;

    function animate(): void {
        count++;
        if (count == 50) {
            count = 0;
            clicks = clicks / 1.3;
            if (clicks < 0.3) {
                clicks = 0;
            }
        }


        manageGame();
        sword.damageMod = sword.damage;
        crc.putImageData(saveBG, 0, 0);
        sword.update();
        for (let x: number = 0; x < enemies.length; x++) {
            if (enemies[x].damaged) {
                sword.damageMod = sword.damageMod * 0.9;
            }
            enemies[x].update();
        }
        showInfo();
        setTimeout(animate, 20);
    }

    function spawnEnemy(_type: string): void {

        switch (_type) {

            case "minion":
                for (let x: number = 0; x < 10; x++) {
                    let health: number = 250 * (Math.pow(2, game.wave));
                    let nMinion: Enemy = new Minion(health);
                    enemies.push(nMinion);
                    console.log(nMinion.maxHealth);
                }
                break;

            case "tower":
                break;
            case "nexus":
                break;

        }
    }

    function manageGame(): void {
        if (enemies.length == 0) {
            game.wave++;
            spawnEnemy("minion");
        }
    }

    export function resetWave(): void {
        game.wave--;
        enemies.splice(0);
        
    }


    function showInfo(): void {
        document.getElementById("status").innerHTML = "";
        document.getElementById("status").innerHTML = "Wave " + game.wave + "<br>" + "Level " + game.level + "<br>" + "Game " + game.game + "<br>" + "User " + game.accountUser + "<br>";
    }

    function manipulateRotation(): void {
        clicks++;
    }


    function buildBackground(): void {
        //Wiese
        crc.fillStyle = "#32722c";
        crc.fillRect(0, 0, canvas.width, canvas.height);
    }

    function getDistance(x1: number, y1: number, x2: number, y2: number): number {
        let dtc: number = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
        return dtc;
    }


}