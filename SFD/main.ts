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
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let saveBG: ImageData;
    export let sword: Sword = new Sword();
    export let enemies: Enemy[] = [];
    export let game: Game = new Game();
    export let clicks: number = 0;
    window.addEventListener("load", init);



    function init(): void {



        canvas = <HTMLCanvasElement>(document.getElementById("game"));
        canvas.addEventListener("click", manipulateRotation);
        crc = canvas.getContext("2d");
        document.getElementById("damageUp").addEventListener("click", addUpgradeLevel);
        buildBackground();

        let saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save");
        saveButton.addEventListener("click", game.reset);

        saveBG = crc.getImageData(0, 0, canvas.width, canvas.height);
        console.log(saveBG);
        //spawnEnemy("minion", game.creepHealth, game.creepValue);
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


        updateUpgrades();
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

    function spawnEnemy(_type: string, _maxH: number, _value: number): void {
        let health: number;
        let value: number;
        switch (_type) {

            case "minion":

                for (let x: number = 0; x < 10; x++) {
                    if (game.wave > 1) {
                        health = (((_maxH / game.wave) * ((game.wave - 1) * 2)) + 10);
                    }
                    else {
                        health = _maxH / game.wave;
                    }
                    value = Math.round((game.creepValue * 1.6) * 10) / 10;
                    let nMinion: Enemy = new Minion(health, value);
                    enemies.push(nMinion);
                }
                game.creepHealth = health;
                game.creepValue = value;
                console.log(health);
                console.log(value);
                break;

            case "tower":
                health = _maxH * 14;
                value = Math.round((game.creepValue * 13) * 10) / 10;
                let nTower: Enemy = new Tower(health, value);
                enemies.push(nTower);
                game.creepHealth = health;
                game.creepValue = value;
                console.log(game.creepHealth);
                console.log(game.creepValue);
                break;
            case "nexus":
                break;

        }
    }

    function updateUpgrades(): void {
        document.getElementById("damageUp").lastChild.textContent = "" + (game.swordlvl).toString();
        document.getElementById("rotationUp").lastChild.textContent = "" + (game.rotationlvl).toString();

        //
    }

    function addUpgradeLevel(_event: Event): void {
        switch (_event.target.id) {
            case "damageUp":
                let cost: number = (5 * Math.pow(1.15, (game.swordlvl)));
                if (game.gold >= cost) {
                    game.gold = game.gold - cost;
                    game.swordlvl++;
                }
                break;


        }
    }



    function manageGame(): void {

        //MINION

        if (game.wave < 4) {
            if (enemies.length == 0) {
                game.wave++;
                console.log(game.wave);
                spawnEnemy("minion", game.creepHealth, game.creepValue);
            }
        }

        //TOWER

        if (game.wave > 3) {

            if (game.wave > 4 && enemies.length == 0) {
                game.level++;
                game.wave = 0;
                game.creepValue = game.creepValue / 7;
                game.creepHealth = game.creepHealth / 7;
            }

            if (enemies.length == 0 && game.wave == 4) {
                spawnEnemy("tower", game.creepHealth, game.creepValue);
                game.wave++;
            }




        }



    }

    export function resetWave(): void {
        game.wave--;
        enemies.splice(0);

    }


    function showInfo(): void {
        document.getElementById("status").innerHTML = "";
        document.getElementById("status").innerHTML = "Wave " + game.wave + "<br>" + "Level " + game.level + "<br>" + "Game " + game.game + "<br>" + "User " + game.accountUser + "<br>" + "Gold " + game.gold;
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