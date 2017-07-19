/*
Aufgabe: Aufgabe 7
Name: Braun Dominik
Matrikel: 254901
Datum: 21.05.2017
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
    window.addEventListener("load", init);
    let img;
    function init() {
        sfd.canvas = (document.getElementById("game"));
        sfd.canvas.addEventListener("click", manipulateRotation);
        sfd.crc = sfd.canvas.getContext("2d");
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
        console.log(saveBG);
        //spawnEnemy("minion", game.creepHealth, game.creepValue);
        setTimeout(animate);
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
        document.getElementById("damageUp").lastChild.textContent = "" + (sfd.game.swordlvl).toString();
        document.getElementById("rotationUp").lastChild.textContent = "" + (sfd.game.rotationlvl).toString();
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
        infoString += "Wave " + sfd.game.wave + "<br>";
        infoString += "Level " + sfd.game.level + "<br>";
        infoString += "Game " + sfd.game.game + "<br>";
        infoString += "Nexus Cores (Deactivated) " + sfd.game.nexusCoresDeactivated + "<br>";
        infoString += "Nexus Cores (Activated) " + sfd.game.nexusCoresActivated + "<br>";
        infoString += "Gold " + sfd.game.gold + "<br>";
        infoString += "User " + sfd.game.accountUser + "<br>";
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