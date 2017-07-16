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
    window.addEventListener("load", init);
    let saveBG;
    sfd.sword = new sfd.Sword();
    sfd.enemies = [];
    sfd.game = new sfd.Game();
    sfd.clicks = 0;
    function init() {
        sfd.canvas = (document.getElementById("game"));
        sfd.canvas.addEventListener("click", manipulateRotation);
        sfd.crc = sfd.canvas.getContext("2d");
        document.getElementById("damageUp").addEventListener("click", addUpgradeLevel);
        buildBackground();
        saveBG = sfd.crc.getImageData(0, 0, sfd.canvas.width, sfd.canvas.height);
        console.log(saveBG);
        spawnEnemy("minion", 5);
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
        sfd.sword.update();
        for (let x = 0; x < sfd.enemies.length; x++) {
            if (sfd.enemies[x].damaged) {
                sfd.sword.damageMod = sfd.sword.damageMod * 0.9;
            }
            sfd.enemies[x].update();
        }
        showInfo();
        setTimeout(animate, 20);
    }
    function spawnEnemy(_type, _maxH) {
        switch (_type) {
            case "minion":
                let health;
                for (let x = 0; x < 10; x++) {
                    //let health: number = 250 * (Math.pow(2, game.wave));
                    health = (_maxH + (Math.pow(2, sfd.game.level)) * (1 + (sfd.game.wave / 10)));
                    let nMinion = new sfd.Minion(health);
                    sfd.enemies.push(nMinion);
                    console.log(nMinion.maxHealth);
                }
                sfd.game.creepHealth = health;
                break;
            case "tower":
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
                sfd.game.swordlvl++;
                break;
        }
    }
    function manageGame() {
        if (sfd.game.wave < 5) {
            if (sfd.enemies.length == 0) {
                sfd.game.wave++;
                spawnEnemy("minion", sfd.game.creepHealth);
            }
        }
        else {
            sfd.game.level++;
            sfd.game.wave = 1;
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
        sfd.crc.fillStyle = "#32722c";
        sfd.crc.fillRect(0, 0, sfd.canvas.width, sfd.canvas.height);
    }
    function getDistance(x1, y1, x2, y2) {
        let dtc = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
        return dtc;
    }
})(sfd || (sfd = {}));
//# sourceMappingURL=main.js.map