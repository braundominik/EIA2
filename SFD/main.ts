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
    let img: HTMLImageElement;
    export let freeze: HTMLInputElement;


    function init(): void {



        canvas = <HTMLCanvasElement>(document.getElementById("game"));
        canvas.addEventListener("click", manipulateRotation);
        crc = canvas.getContext("2d");
        document.getElementById("damageUp").addEventListener("click", addUpgradeLevel);
        document.getElementById("rotationUp").addEventListener("click", addUpgradeLevel);
        let resetButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("hardReset");
        resetButton.addEventListener("click", game.hardReset);
        let softResetButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("softReset");
        softResetButton.addEventListener("click", game.softReset);

        freeze = <HTMLInputElement>document.getElementById("checkFreeze");
        freeze.checked = false;

        buildBackground();
        saveBG = crc.getImageData(0, 0, canvas.width, canvas.height);
        console.log(saveBG);

        //spawnEnemy("minion", game.creepHealth, game.creepValue);
        setTimeout(animate);
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
        for (let x: number = 0; x < enemies.length; x++) {
            if (enemies[x].damaged) {
                sword.damageMod = sword.damageMod * 0.9;
            }
            enemies[x].update();
        }
        sword.update();
        showInfo();
        setTimeout(animate, 20);
    }

    function spawnEnemy(_type: string, _maxH: number): void {
        let health: number;
        let value: number;
        switch (_type) {

            case "minion":

                for (let x: number = 0; x < 10; x++) {
                    if (freeze.checked) {
                        health = _maxH;
                        value = game.creepValue;
                    }
                    else {
                        if (game.wave > 1) {
                            health = (((_maxH / game.wave) * ((game.wave - 1) * 2)) + 10);
                        }
                        else {
                            health = _maxH / game.wave;
                        }

                        value = Math.round((game.creepValue * 1.6) * 10) / 10;
                    }
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

                health = _maxH * 30;
                value = Math.round((game.creepValue * 25) * 10) / 10;
                let nNexus: Enemy = new Nexus(health, value);
                enemies.push(nNexus);
                game.creepHealth = health;
                game.creepValue = value;
                console.log(game.creepHealth);
                console.log(game.creepValue);

                break;

        }
    }

    function updateUpgrades(): void {
        document.getElementById("damageUp").lastChild.textContent = "" + (game.swordlvl).toString();
        document.getElementById("rotationUp").lastChild.textContent = "" + (game.rotationlvl).toString();

        //
    }

    function addUpgradeLevel(_event: Event): void {
        let cost: number;
        switch (_event.target.id) {
            case "damageUp":
                cost = (5 * Math.pow(game.swordlvl, 1.4));
                console.log("COST:" + cost);
                if (game.gold >= cost) {
                    game.gold = Math.round((game.gold - cost) * 10) / 10;
                    game.swordlvl++;
                }

                for (let i: number = 1; i < 100; i++) {
                    cost += (5 * Math.pow(game.swordlvl + i, 1.4));
                }

                if (game.gold >= cost) {
                    game.gold = Math.round((game.gold - cost) * 10) / 10;
                    game.swordlvl += 99;
                }

                break;

            case "rotationUp":
                cost = (5 * Math.pow(game.rotationlvl, 1.4));
                console.log("COSTROT:" + cost);
                if (game.gold >= cost) {
                    game.gold = Math.round((game.gold - cost) * 10) / 10;
                    game.rotationlvl++;
                }

                for (let i: number = 1; i < 100; i++) {
                    cost += (5 * Math.pow(game.rotationlvl + i, 1.4));
                }

                if (game.gold >= cost) {
                    game.gold = Math.round((game.gold - cost) * 10) / 10;
                    game.rotationlvl += 99;
                }
                break;


        }
    }



    function manageGame(): void {

        //MINION

        if (game.wave < 4) {
            if (enemies.length == 0) {

                if (!freeze.checked) {
                    game.wave++;
                }
                console.log(game.wave);
                spawnEnemy("minion", game.creepHealth);
            }
        }

        //TOWER
        console.log(game.tower);

        if (game.wave > 3) {

            if (freeze.checked) {

                if (enemies.length == 0) {
                    spawnEnemy("minion", game.creepHealth);
                }
            }

            else {

                if (game.tower) {

                    if (game.wave > 4 && enemies.length == 0) {
                        game.nexusCoresDeactivated = game.nexusCoresDeactivated + 1 * game.game;
                        game.game++;
                        game.level = 1;
                        game.wave = 0;
                        game.creepValue = game.creepValue / 20;
                        game.creepHealth = game.creepHealth / 20;
                        game.tower = false;
                    }

                    if (enemies.length == 0 && game.wave == 4) {
                        spawnEnemy("nexus", game.creepHealth);
                        game.wave++;
                    }

                }
                else {


                    if (game.wave > 4 && enemies.length == 0) {
                        game.level++;
                        game.wave = 0;
                        game.creepValue = game.creepValue / 10;
                        game.creepHealth = game.creepHealth / 7;
                        game.tower = true;
                    }

                    if (enemies.length == 0 && game.wave == 4) {
                        spawnEnemy("tower", game.creepHealth);
                        game.wave++;

                    }

                }
            }
        }

    }

    export function resetWave(): void {
        game.wave--;
        enemies.splice(0);

    }


    function showInfo(): void {
        document.getElementById("status").innerHTML = "";
        let infoString: string = "";
        infoString += "Wave " + game.wave + "<br>";
        infoString += "Level " + game.level + "<br>";
        infoString += "Game " + game.game + "<br>";
        infoString += "Nexus Cores (Deactivated) " + game.nexusCoresDeactivated + "<br>";
        infoString += "Nexus Cores (Activated) " + game.nexusCoresActivated + "<br>";
        infoString += "Gold " + game.gold + "<br>";
        infoString += "User " + game.accountUser + "<br>";

        document.getElementById("status").innerHTML = infoString;
    }

    function manipulateRotation(): void {
        clicks++;
    }

    function buildBackground(): void {
        //Wiese
        //        crc.fillStyle = "#32722c";
        //        crc.fillRect(0, 0, canvas.width, canvas.height);
        let img: HTMLImageElement;
        img = <HTMLImageElement>document.getElementById("bg");
        crc.drawImage(img, 0, 0);
    }









    function getDistance(x1: number, y1: number, x2: number, y2: number): number {
        let dtc: number = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
        return dtc;
    }


}