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
    function init() {
        sfd.canvas = (document.getElementById("game"));
        sfd.canvas.addEventListener("click", manipulateRotation);
        sfd.crc = sfd.canvas.getContext("2d");
        document.getElementById("damageUp").addEventListener("click", addUpgradeLevel);
        buildBackground();
        let saveButton = document.getElementById("save");
        saveButton.addEventListener("click", sfd.game.reset);
        saveBG = sfd.crc.getImageData(0, 0, sfd.canvas.width, sfd.canvas.height);
        console.log(saveBG);
        //spawnEnemy("minion", game.creepHealth, game.creepValue);
        animate();
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
    function spawnEnemy(_type, _maxH, _value) {
        let health;
        let value;
        switch (_type) {
            case "minion":
                for (let x = 0; x < 10; x++) {
                    if (sfd.game.wave > 1) {
                        health = (((_maxH / sfd.game.wave) * ((sfd.game.wave - 1) * 2)) + 10);
                    }
                    else {
                        health = _maxH / sfd.game.wave;
                    }
                    value = Math.round((sfd.game.creepValue * 1.6) * 10) / 10;
                    let nMinion = new sfd.Minion(health, value);
                    sfd.enemies.push(nMinion);
                }
                sfd.game.creepHealth = health;
                sfd.game.creepValue = value;
                console.log(health);
                console.log(value);
                break;
            case "tower":
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
                break;
        }
    }
    function updateUpgrades() {
        document.getElementById("damageUp").lastChild.textContent = "" + (sfd.game.swordlvl).toString();
        document.getElementById("rotationUp").lastChild.textContent = "" + (sfd.game.rotationlvl).toString();
        //
    }
    function addUpgradeLevel(_event) {
        switch (_event.target.id) {
            case "damageUp":
                let cost = (5 * Math.pow(1.15, (sfd.game.swordlvl)));
                if (sfd.game.gold >= cost) {
                    sfd.game.gold = sfd.game.gold - cost;
                    sfd.game.swordlvl++;
                }
                break;
        }
    }
    function manageGame() {
        //MINION
        if (sfd.game.wave < 4) {
            if (sfd.enemies.length == 0) {
                sfd.game.wave++;
                console.log(sfd.game.wave);
                spawnEnemy("minion", sfd.game.creepHealth, sfd.game.creepValue);
            }
        }
        //TOWER
        if (sfd.game.wave > 3) {
            if (sfd.game.wave > 4 && sfd.enemies.length == 0) {
                sfd.game.level++;
                sfd.game.wave = 0;
                sfd.game.creepValue = sfd.game.creepValue / 7;
                sfd.game.creepHealth = sfd.game.creepHealth / 7;
            }
            if (sfd.enemies.length == 0 && sfd.game.wave == 4) {
                spawnEnemy("tower", sfd.game.creepHealth, sfd.game.creepValue);
                sfd.game.wave++;
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
        document.getElementById("status").innerHTML = "Wave " + sfd.game.wave + "<br>" + "Level " + sfd.game.level + "<br>" + "Game " + sfd.game.game + "<br>" + "User " + sfd.game.accountUser + "<br>" + "Gold " + sfd.game.gold;
    }
    function manipulateRotation() {
        sfd.clicks++;
    }
    function buildBackground() {
        //Wiese
        //        crc.fillStyle = "#32722c";
        //        crc.fillRect(0, 0, canvas.width, canvas.height);
        let img;
        img = document.createElement("img");
        img.src = "background.gif";
        sfd.crc.drawImage(img, 200, 200, 500, 500);
    }
    function getDistance(x1, y1, x2, y2) {
        let dtc = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
        return dtc;
    }
})(sfd || (sfd = {}));
//# sourceMappingURL=main.js.map