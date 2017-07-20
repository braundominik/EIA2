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
    window.addEventListener("load", intro);
    let img: HTMLImageElement;
    export let freeze: HTMLInputElement;
    let introPlaying: boolean = true;
    let audio: any;

    function intro(): void {
        document.getElementById("muteaudio").addEventListener("change", muteAudio);
        audio = document.getElementsByTagName("audio");
        audio[0].volume = 0.1;
        canvas = <HTMLCanvasElement>(document.getElementById("game"));
        crc = canvas.getContext("2d");
        canvas.addEventListener("click", init);
        let spinning: number[] = [
            40, 220, 10, 10,
            30, 220, 10, 10,
            20, 220, 10, 10,
            20, 230, 10, 10,
            20, 240, 10, 10,
            20, 250, 10, 10,
            30, 250, 10, 10,
            40, 250, 10, 10,
            40, 260, 10, 10,
            40, 270, 10, 10,
            40, 280, 10, 10,
            40, 290, 10, 10,
            30, 290, 10, 10,
            20, 290, 10, 10,
            60, 290, 10, 10,
            60, 280, 10, 10,
            60, 270, 10, 10,
            60, 260, 10, 10,
            60, 250, 10, 10,
            60, 240, 10, 10,
            60, 230, 10, 10,
            60, 220, 10, 10,
            70, 220, 10, 10,
            80, 220, 10, 10,
            80, 230, 10, 10,
            80, 240, 10, 10,
            80, 250, 10, 10,
            70, 250, 10, 10,
            100, 220, 10, 10,
            100, 230, 10, 10,
            100, 240, 10, 10,
            100, 250, 10, 10,
            100, 260, 10, 10,
            100, 270, 10, 10,
            100, 280, 10, 10,
            100, 290, 10, 10,
            130, 290, 10, 10,
            130, 280, 10, 10,
            130, 270, 10, 10,
            130, 260, 10, 10,
            130, 250, 10, 10,
            130, 240, 10, 10,
            130, 230, 10, 10,
            130, 220, 10, 10,
            140, 230, 10, 10,
            140, 240, 10, 10,
            150, 250, 10, 10,
            150, 260, 10, 10,
            160, 270, 10, 10,
            160, 280, 10, 10,
            170, 290, 10, 10,
            170, 280, 10, 10,
            170, 270, 10, 10,
            170, 260, 10, 10,
            170, 250, 10, 10,
            170, 240, 10, 10,
            170, 230, 10, 10,
            170, 220, 10, 10,
            190, 290, 10, 10,
            190, 280, 10, 10,
            190, 270, 10, 10,
            190, 260, 10, 10,
            190, 250, 10, 10,
            190, 240, 10, 10,
            190, 230, 10, 10,
            190, 220, 10, 10,
            200, 230, 10, 10,
            200, 240, 10, 10,
            210, 250, 10, 10,
            210, 260, 10, 10,
            220, 270, 10, 10,
            220, 280, 10, 10,
            230, 290, 10, 10,
            230, 280, 10, 10,
            230, 270, 10, 10,
            230, 260, 10, 10,
            230, 250, 10, 10,
            230, 240, 10, 10,
            230, 230, 10, 10,
            230, 220, 10, 10,
            250, 220, 10, 10,
            250, 230, 10, 10,
            250, 240, 10, 10,
            250, 250, 10, 10,
            250, 260, 10, 10,
            250, 270, 10, 10,
            250, 280, 10, 10,
            250, 290, 10, 10,
            280, 290, 10, 10,
            280, 280, 10, 10,
            280, 270, 10, 10,
            280, 260, 10, 10,
            280, 250, 10, 10,
            280, 240, 10, 10,
            280, 230, 10, 10,
            280, 220, 10, 10,
            290, 230, 10, 10,
            290, 240, 10, 10,
            300, 250, 10, 10,
            300, 260, 10, 10,
            310, 270, 10, 10,
            310, 280, 10, 10,
            320, 290, 10, 10,
            320, 280, 10, 10,
            320, 270, 10, 10,
            320, 260, 10, 10,
            320, 250, 10, 10,
            320, 240, 10, 10,
            320, 230, 10, 10,
            320, 220, 10, 10,
            370, 230, 10, 10,
            370, 220, 10, 10,
            360, 220, 10, 10,
            350, 220, 10, 10,
            340, 220, 10, 10,
            340, 230, 10, 10,
            340, 240, 10, 10,
            340, 250, 10, 10,
            340, 260, 10, 10,
            340, 270, 10, 10,
            340, 280, 10, 10,
            340, 290, 10, 10,
            350, 290, 10, 10,
            360, 290, 10, 10,
            370, 290, 10, 10,
            370, 280, 10, 10,
            370, 270, 10, 10,
            370, 260, 10, 10,
            360, 260, 10, 10
        ];

        let sequence: number = 0;
        let introminion: Enemy[] = [];
        for (let m: number = 0; m < 200; m++) {
            let myMinion: Enemy = new Minion(1, 1);
            let temp: number[];
            temp = getPosIn(0, -1000, 400, -100);
            myMinion.x = temp[0];
            myMinion.y = temp[1];
            introminion.push(myMinion);
        }

        IntroSequence();
        function IntroSequence(): void {
            if (introPlaying) {
                sequence++;
                crc.fillStyle = "white";
                //crc.fillRect(0, 0, 400, 800);
                for (let s: number = 0; s < introminion.length; s++) {
                    introminion[s].move();
                    introminion[s].draw();
                }

                if (sequence < 400) {
                    setTimeout(IntroSequence, 20);
                }
                else {
                    crc.fillStyle = "black";
                    crc.fillRect(0, 0, 400, 800);
                    animateLogo();
                }
            }
        }




        let flicker: number = 0;
        function animateLogo(): void {
            if (introPlaying) {
                let rnd: number = Math.floor(Math.random() * (spinning.length - 3));
                if ((rnd % 4) == 0) {
                    crc.fillStyle = "white";
                    crc.fillRect(spinning[rnd], spinning[rnd + 1], spinning[rnd + 2], spinning[rnd + 3]);
                    spinning.splice(rnd, 4);

                    flicker++;
                    flicker = (flicker % 20);
                    if (flicker > 10) {
                        crc.fillStyle = "black";
                        crc.strokeStyle = "black";
                    }

                    crc.font = "30px Arial";
                    crc.fillText("Click to Play", 120, 400);

                    if (spinning.length > 0) {
                        setTimeout(animateLogo, 50);
                        console.log("splicing");
                        console.log(spinning.length);
                    }
                }
                else {
                    animateLogo();
                }
            }
        }

        //S

        //            crc.fillRect(60, 220, 10, 10),
        //            crc.fillRect(50, 220, 10, 10),
        //            crc.fillRect(40, 220, 10, 10),
        //            crc.fillRect(40, 230, 10, 10),
        //            crc.fillRect(40, 240, 10, 10),
        //            crc.fillRect(40, 250, 10, 10),
        //            crc.fillRect(50, 250, 10, 10),
        //            crc.fillRect(60, 250, 10, 10),
        //            crc.fillRect(60, 260, 10, 10),
        //            crc.fillRect(60, 270, 10, 10),
        //            crc.fillRect(60, 280, 10, 10),
        //            crc.fillRect(60, 290, 10, 10),
        //            crc.fillRect(50, 290, 10, 10),
        //            crc.fillRect(40, 290, 10, 10)

        //P
        //        crc.fillRect(80, 290, 10, 10),
        //        crc.fillRect(80, 280, 10, 10),
        //        crc.fillRect(80, 270, 10, 10),
        //        crc.fillRect(80, 260, 10, 10),
        //        crc.fillRect(80, 250, 10, 10),
        //        crc.fillRect(80, 240, 10, 10),
        //        crc.fillRect(80, 230, 10, 10),
        //        crc.fillRect(80, 220, 10, 10),
        //        crc.fillRect(90, 220, 10, 10),
        //        crc.fillRect(100, 220, 10, 10),
        //        crc.fillRect(100, 230, 10, 10),
        //        crc.fillRect(100, 240, 10, 10),
        //        crc.fillRect(100, 250, 10, 10),
        //        crc.fillRect(90, 250, 10, 10),
        //
        //I
        //        crc.fillRect(120, 220, 10, 10),
        //        crc.fillRect(120, 230, 10, 10),
        //        crc.fillRect(120, 240, 10, 10),
        //        crc.fillRect(120, 250, 10, 10),
        //        crc.fillRect(120, 260, 10, 10),
        //        crc.fillRect(120, 270, 10, 10),
        //        crc.fillRect(120, 280, 10, 10),
        //        crc.fillRect(120, 290, 10, 10),
        //
        //N
        //        crc.fillRect(150, 290, 10, 10),
        //        crc.fillRect(150, 280, 10, 10),
        //        crc.fillRect(150, 270, 10, 10),
        //        crc.fillRect(150, 260, 10, 10),
        //        crc.fillRect(150, 250, 10, 10),
        //        crc.fillRect(150, 240, 10, 10),
        //        crc.fillRect(150, 230, 10, 10),
        //        crc.fillRect(150, 220, 10, 10),
        //
        //        crc.fillRect(160, 230, 10, 10),
        //        crc.fillRect(160, 240, 10, 10),
        //        crc.fillRect(170, 250, 10, 10),
        //        crc.fillRect(170, 260, 10, 10),
        //        crc.fillRect(180, 270, 10, 10),
        //        crc.fillRect(180, 280, 10, 10),
        //
        //        crc.fillRect(190, 290, 10, 10),
        //        crc.fillRect(190, 280, 10, 10),
        //        crc.fillRect(190, 270, 10, 10),
        //        crc.fillRect(190, 260, 10, 10),
        //        crc.fillRect(190, 250, 10, 10),
        //        crc.fillRect(190, 240, 10, 10),
        //        crc.fillRect(190, 230, 10, 10),
        //        crc.fillRect(190, 220, 10, 10),
        //
        //N
        //        crc.fillRect(210, 290, 10, 10),
        //        crc.fillRect(210, 280, 10, 10),
        //        crc.fillRect(210, 270, 10, 10),
        //        crc.fillRect(210, 260, 10, 10),
        //        crc.fillRect(210, 250, 10, 10),
        //        crc.fillRect(210, 240, 10, 10),
        //        crc.fillRect(210, 230, 10, 10),
        //        crc.fillRect(210, 220, 10, 10),
        //
        //        crc.fillRect(220, 230, 10, 10),
        //        crc.fillRect(220, 240, 10, 10),
        //        crc.fillRect(230, 250, 10, 10),
        //        crc.fillRect(230, 260, 10, 10),
        //        crc.fillRect(240, 270, 10, 10),
        //        crc.fillRect(240, 280, 10, 10),
        //
        //        crc.fillRect(250, 290, 10, 10),
        //        crc.fillRect(250, 280, 10, 10),
        //        crc.fillRect(250, 270, 10, 10),
        //        crc.fillRect(250, 260, 10, 10),
        //        crc.fillRect(250, 250, 10, 10),
        //        crc.fillRect(250, 240, 10, 10),
        //        crc.fillRect(250, 230, 10, 10),
        //        crc.fillRect(250, 220, 10, 10),
        //
        //I
        //        crc.fillRect(270, 220, 10, 10),
        //        crc.fillRect(270, 230, 10, 10),
        //        crc.fillRect(270, 240, 10, 10),
        //        crc.fillRect(270, 250, 10, 10),
        //        crc.fillRect(270, 260, 10, 10),
        //        crc.fillRect(270, 270, 10, 10),
        //        crc.fillRect(270, 280, 10, 10),
        //        crc.fillRect(270, 290, 10, 10),
        //
        //N
        //        crc.fillRect(300, 290, 10, 10),
        //        crc.fillRect(300, 280, 10, 10),
        //        crc.fillRect(300, 270, 10, 10),
        //        crc.fillRect(300, 260, 10, 10),
        //        crc.fillRect(300, 250, 10, 10),
        //        crc.fillRect(300, 240, 10, 10),
        //        crc.fillRect(300, 230, 10, 10),
        //        crc.fillRect(300, 220, 10, 10),
        //
        //        crc.fillRect(310, 230, 10, 10),
        //        crc.fillRect(310, 240, 10, 10),
        //        crc.fillRect(320, 250, 10, 10),
        //        crc.fillRect(320, 260, 10, 10),
        //        crc.fillRect(330, 270, 10, 10),
        //        crc.fillRect(330, 280, 10, 10),
        //
        //        crc.fillRect(340, 290, 10, 10),
        //        crc.fillRect(340, 280, 10, 10),
        //        crc.fillRect(340, 270, 10, 10),
        //        crc.fillRect(340, 260, 10, 10),
        //        crc.fillRect(340, 250, 10, 10),
        //        crc.fillRect(340, 240, 10, 10),
        //        crc.fillRect(340, 230, 10, 10),
        //crc.fillRect(340, 220, 10, 10),
        //        
        //G
        //        crc.fillRect(390, 230, 10, 10),
        //        crc.fillRect(390, 220, 10, 10),
        //        crc.fillRect(380, 220, 10, 10),
        //        crc.fillRect(370, 220, 10, 10),
        //        crc.fillRect(360, 220, 10, 10),
        //        crc.fillRect(360, 230, 10, 10),
        //        crc.fillRect(360, 240, 10, 10),
        //        crc.fillRect(360, 250, 10, 10),
        //        crc.fillRect(360, 260, 10, 10),
        //        crc.fillRect(360, 270, 10, 10),
        //        crc.fillRect(360, 280, 10, 10),
        //        crc.fillRect(360, 290, 10, 10),
        //        crc.fillRect(370, 290, 10, 10),
        //        crc.fillRect(380, 290, 10, 10),
        //        crc.fillRect(390, 290, 10, 10),
        //        crc.fillRect(390, 280, 10, 10),
        //        crc.fillRect(390, 270, 10, 10),
        //      crc.fillRect(390, 260, 10, 10),
        //        crc.fillRect(380, 260, 10, 10),
        //        


    }


    function init(): void {

        audio[0].src = "bitrush.mp3";
        introPlaying = false;
        canvas.removeEventListener("click", init);
        canvas.addEventListener("click", manipulateRotation);
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
        setTimeout(animate);
    }

    function muteAudio(_event: Event): void {
        let e: HTMLInputElement = <HTMLInputElement>_event.target;
        if (e.checked) {
            audio[0].volume = 0;
        }
        if (!e.checked) {
            audio[0].volume = 0.1;
        }
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
                        game.lastHealth = _maxH;
                        game.lastValue = game.creepValue;
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
                game.lastHealth = _maxH;
                game.lastValue = game.creepValue;
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
                game.lastHealth = _maxH;
                game.lastValue = game.creepValue;
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

        document.getElementById("damageUp").lastChild.textContent = "" + (game.swordlvl).toString() + " | " + (Math.round((5 * Math.pow(game.swordlvl, 1.4)) * 10) / 10) + " Gold";
        document.getElementById("rotationUp").lastChild.textContent = "" + (game.rotationlvl).toString() + " | " + (Math.round((5 * Math.pow(game.rotationlvl, 1.4)) * 10) / 10) + " Gold";

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
        infoString += "Wave: " + game.wave + "<br>";
        infoString += "Level: " + game.level + "<br>";
        infoString += "Game: " + game.game + "<br>";
        infoString += "Deactivated Cores: " + game.nexusCoresDeactivated + "<br>";
        infoString += "Activated Cores: " + game.nexusCoresActivated + "<br>";
        infoString += "Gold: " + game.gold + "<br>";
        infoString += "User: " + game.accountUser + "<br>";

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