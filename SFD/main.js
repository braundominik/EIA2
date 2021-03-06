/*
Aufgabe: SPINNING
Name: Braun Dominik
Matrikel: 254901
Datum: 21.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var sfd;
(function (sfd) {
    let saveBG;
    sfd.sword = new sfd.Sword();
    sfd.enemies = [];
    sfd.game = new sfd.Game();
    sfd.clicks = 0;
    window.addEventListener("load", intro);
    let img;
    let introPlaying = true;
    let audio;
    function intro() {
        document.getElementById("muteaudio").addEventListener("change", muteAudio);
        audio = document.getElementsByTagName("audio");
        audio[0].volume = 0.1;
        sfd.canvas = (document.getElementById("game"));
        sfd.crc = sfd.canvas.getContext("2d");
        sfd.canvas.addEventListener("click", init);
        let spinning = [
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
        let sequence = 0;
        let introminion = [];
        for (let m = 0; m < 200; m++) {
            let myMinion = new sfd.Minion(1, 1);
            let temp;
            temp = sfd.getPosIn(0, -1000, 400, -100);
            myMinion.x = temp[0];
            myMinion.y = temp[1];
            introminion.push(myMinion);
        }
        IntroSequence();
        function IntroSequence() {
            if (introPlaying) {
                sequence++;
                sfd.crc.fillStyle = "white";
                //crc.fillRect(0, 0, 400, 800);
                for (let s = 0; s < introminion.length; s++) {
                    introminion[s].move();
                    introminion[s].draw();
                }
                if (sequence < 400) {
                    setTimeout(IntroSequence, 20);
                }
                else {
                    sfd.crc.fillStyle = "black";
                    sfd.crc.fillRect(0, 0, 400, 800);
                    animateLogo();
                }
            }
        }
        let flicker = 0;
        function animateLogo() {
            if (introPlaying) {
                let rnd = Math.floor(Math.random() * (spinning.length - 3));
                if ((rnd % 4) == 0) {
                    sfd.crc.fillStyle = "white";
                    sfd.crc.fillRect(spinning[rnd], spinning[rnd + 1], spinning[rnd + 2], spinning[rnd + 3]);
                    spinning.splice(rnd, 4);
                    flicker++;
                    flicker = (flicker % 20);
                    if (flicker > 10) {
                        sfd.crc.fillStyle = "black";
                        sfd.crc.strokeStyle = "black";
                    }
                    sfd.crc.font = "30px Arial";
                    sfd.crc.fillText("Click to Play", 120, 400);
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
    function init() {
        audio[0].src = "bitrush.mp3";
        introPlaying = false;
        sfd.canvas.removeEventListener("click", init);
        sfd.canvas.addEventListener("click", manipulateRotation);
        document.getElementById("damageUp").addEventListener("click", addUpgradeLevel);
        document.getElementById("rotationUp").addEventListener("click", addUpgradeLevel);
        let resetButton = document.getElementById("hardReset");
        resetButton.addEventListener("click", sfd.game.hardReset);
        let softResetButton = document.getElementById("softReset");
        softResetButton.addEventListener("click", sfd.game.softReset);
        sfd.freeze = document.getElementById("checkFreeze");
        sfd.freeze.checked = false;
        buildBackground();
        saveBG = sfd.crc.getImageData(0, 0, sfd.canvas.width, sfd.canvas.height);
        setTimeout(animate);
    }
    function muteAudio(_event) {
        let e = _event.target;
        if (e.checked) {
            audio[0].volume = 0;
        }
        if (!e.checked) {
            audio[0].volume = 0.1;
        }
    }
    let count = 0;
    function animate() {
        count++;
        if (count == 50) {
            count = 0;
            sfd.clicks = sfd.clicks / 1.3;
            if (sfd.clicks < 0.3) {
                sfd.clicks = 0;
            }
        }
        updateUpgrades();
        manageGame();
        sfd.sword.damageMod = sfd.sword.damage;
        sfd.crc.putImageData(saveBG, 0, 0);
        for (let x = 0; x < sfd.enemies.length; x++) {
            if (sfd.enemies[x].damaged) {
                sfd.sword.damageMod = sfd.sword.damageMod * 0.9;
            }
            sfd.enemies[x].update();
        }
        sfd.sword.update();
        showInfo();
        setTimeout(animate, 20);
    }
    function spawnEnemy(_type, _maxH) {
        let health;
        let value;
        switch (_type) {
            case "minion":
                for (let x = 0; x < 10; x++) {
                    if (sfd.freeze.checked) {
                        health = _maxH;
                        value = sfd.game.creepValue;
                    }
                    else {
                        sfd.game.lastHealth = _maxH;
                        sfd.game.lastValue = sfd.game.creepValue;
                        if (sfd.game.wave > 1) {
                            health = (((_maxH / sfd.game.wave) * ((sfd.game.wave - 1) * 2)) + 10);
                        }
                        else {
                            health = _maxH / sfd.game.wave;
                        }
                        value = Math.round((sfd.game.creepValue * 1.6) * 10) / 10;
                    }
                    let nMinion = new sfd.Minion(health, value);
                    sfd.enemies.push(nMinion);
                }
                sfd.game.creepHealth = health;
                sfd.game.creepValue = value;
                console.log(health);
                console.log(value);
                break;
            case "tower":
                sfd.game.lastHealth = _maxH;
                sfd.game.lastValue = sfd.game.creepValue;
                health = _maxH * 14;
                value = Math.round((sfd.game.creepValue * 13) * 10) / 10;
                let nTower = new sfd.Tower(health, value);
                sfd.enemies.push(nTower);
                sfd.game.creepHealth = health;
                sfd.game.creepValue = value;
                console.log(sfd.game.creepHealth);
                console.log(sfd.game.creepValue);
                break;
            case "nexus":
                sfd.game.lastHealth = _maxH;
                sfd.game.lastValue = sfd.game.creepValue;
                health = _maxH * 30;
                value = Math.round((sfd.game.creepValue * 25) * 10) / 10;
                let nNexus = new sfd.Nexus(health, value);
                sfd.enemies.push(nNexus);
                sfd.game.creepHealth = health;
                sfd.game.creepValue = value;
                console.log(sfd.game.creepHealth);
                console.log(sfd.game.creepValue);
                break;
        }
    }
    function updateUpgrades() {
        document.getElementById("damageUp").lastChild.textContent = "" + (sfd.game.swordlvl).toString() + " | " + (Math.round((5 * Math.pow(sfd.game.swordlvl, 1.4)) * 10) / 10) + " Gold";
        document.getElementById("rotationUp").lastChild.textContent = "" + (sfd.game.rotationlvl).toString() + " | " + (Math.round((5 * Math.pow(sfd.game.rotationlvl, 1.4)) * 10) / 10) + " Gold";
        //
    }
    function addUpgradeLevel(_event) {
        let cost;
        switch (_event.target.id) {
            case "damageUp":
                cost = (5 * Math.pow(sfd.game.swordlvl, 1.4));
                console.log("COST:" + cost);
                if (sfd.game.gold >= cost) {
                    sfd.game.gold = Math.round((sfd.game.gold - cost) * 10) / 10;
                    sfd.game.swordlvl++;
                }
                for (let i = 1; i < 100; i++) {
                    cost += (5 * Math.pow(sfd.game.swordlvl + i, 1.4));
                }
                if (sfd.game.gold >= cost) {
                    sfd.game.gold = Math.round((sfd.game.gold - cost) * 10) / 10;
                    sfd.game.swordlvl += 99;
                }
                break;
            case "rotationUp":
                cost = (5 * Math.pow(sfd.game.rotationlvl, 1.4));
                console.log("COSTROT:" + cost);
                if (sfd.game.gold >= cost) {
                    sfd.game.gold = Math.round((sfd.game.gold - cost) * 10) / 10;
                    sfd.game.rotationlvl++;
                }
                for (let i = 1; i < 100; i++) {
                    cost += (5 * Math.pow(sfd.game.rotationlvl + i, 1.4));
                }
                if (sfd.game.gold >= cost) {
                    sfd.game.gold = Math.round((sfd.game.gold - cost) * 10) / 10;
                    sfd.game.rotationlvl += 99;
                }
                break;
        }
    }
    function manageGame() {
        //MINION
        if (sfd.game.wave < 4) {
            if (sfd.enemies.length == 0) {
                if (!sfd.freeze.checked) {
                    sfd.game.wave++;
                }
                console.log(sfd.game.wave);
                spawnEnemy("minion", sfd.game.creepHealth);
            }
        }
        //TOWER
        console.log(sfd.game.tower);
        if (sfd.game.wave > 3) {
            if (sfd.freeze.checked) {
                if (sfd.enemies.length == 0) {
                    spawnEnemy("minion", sfd.game.creepHealth);
                }
            }
            else {
                if (sfd.game.tower) {
                    if (sfd.game.wave > 4 && sfd.enemies.length == 0) {
                        sfd.game.nexusCoresDeactivated = sfd.game.nexusCoresDeactivated + 1 * sfd.game.game;
                        sfd.game.game++;
                        sfd.game.level = 1;
                        sfd.game.wave = 0;
                        sfd.game.creepValue = sfd.game.creepValue / 20;
                        sfd.game.creepHealth = sfd.game.creepHealth / 20;
                        sfd.game.tower = false;
                    }
                    if (sfd.enemies.length == 0 && sfd.game.wave == 4) {
                        spawnEnemy("nexus", sfd.game.creepHealth);
                        sfd.game.wave++;
                    }
                }
                else {
                    if (sfd.game.wave > 4 && sfd.enemies.length == 0) {
                        sfd.game.level++;
                        sfd.game.wave = 0;
                        sfd.game.creepValue = sfd.game.creepValue / 10;
                        sfd.game.creepHealth = sfd.game.creepHealth / 7;
                        sfd.game.tower = true;
                    }
                    if (sfd.enemies.length == 0 && sfd.game.wave == 4) {
                        spawnEnemy("tower", sfd.game.creepHealth);
                        sfd.game.wave++;
                    }
                }
            }
        }
    }
    function resetWave() {
        sfd.game.wave--;
        sfd.enemies.splice(0);
    }
    sfd.resetWave = resetWave;
    function showInfo() {
        document.getElementById("status").innerHTML = "";
        let infoString = "";
        infoString += "Wave: " + sfd.game.wave + "<br>";
        infoString += "Level: " + sfd.game.level + "<br>";
        infoString += "Game: " + sfd.game.game + "<br>";
        infoString += "Deactivated Cores: " + sfd.game.nexusCoresDeactivated + "<br>";
        infoString += "Activated Cores: " + sfd.game.nexusCoresActivated + "<br>";
        infoString += "Gold: " + sfd.game.gold + "<br>";
        infoString += "User: " + sfd.game.accountUser + "<br>";
        document.getElementById("status").innerHTML = infoString;
    }
    function manipulateRotation() {
        sfd.clicks++;
    }
    function buildBackground() {
        //Wiese
        //        crc.fillStyle = "#32722c";
        //        crc.fillRect(0, 0, canvas.width, canvas.height);
        let img;
        img = document.getElementById("bg");
        sfd.crc.drawImage(img, 0, 0);
    }
    function getDistance(x1, y1, x2, y2) {
        let dtc = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
        return dtc;
    }
})(sfd || (sfd = {}));
//# sourceMappingURL=main.js.map