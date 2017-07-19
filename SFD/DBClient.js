var sfd;
(function (sfd) {
    window.addEventListener("load", init);
    function init(_event) {
        let insertButton = document.getElementById("create");
        let loginButton = document.getElementById("login");
        let saveButton = document.getElementById("save");
        insertButton.addEventListener("click", insert);
        loginButton.addEventListener("click", login);
        //saveButton.addEventListener("click", save);
    }
    function insert(_event) {
        let user = document.getElementById("createUser");
        let password = document.getElementById("createPassword");
        let query = "command=insert";
        query += "&user=" + user.value;
        query += "&password=" + password.value;
        query += "&wave=" + sfd.game.wave;
        query += "&level=" + sfd.game.level;
        query += "&game=" + sfd.game.game;
        query += "&gold=" + sfd.game.gold;
        query += "&swordlvl=" + sfd.game.swordlvl;
        query += "&rotationlvl=" + sfd.game.rotationlvl;
        query += "&creepHealth=" + sfd.game.creepHealth;
        query += "&lastHealth=" + sfd.game.lastHealth;
        query += "&creepValue=" + sfd.game.creepValue;
        query += "&lastValue=" + sfd.game.lastValue;
        query += "&tower=" + sfd.game.tower;
        query += "&ncDeactivated=" + sfd.game.nexusCoresDeactivated;
        query += "&ncActivated=" + sfd.game.nexusCoresActivated;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function login(_event) {
        let user = document.getElementById("searchUser");
        let password = document.getElementById("searchPassword");
        let query = "command=search";
        query += "&user=" + user.value;
        query += "&password=" + password.value;
        sendRequest(query, handleSearchResponse);
    }
    function save(_event) {
        if (sfd.game.accountUser != "") {
            let user = document.getElementById("searchUser");
            let password = document.getElementById("searchPassword");
            let query = "command=search";
            query += "&user=" + user.value;
            query += "&password=" + password.value;
            sendRequest(query, handleSearchResponse);
        }
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        //xhr.open("GET", "http://localhost:8100?" + _query, true);
        xhr.open("GET", "https://eia2heroku.herokuapp.com?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleSearchResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
            if (responseAsJson.length == 0) {
                sfd.game.accountUser = "";
            }
            else {
                sfd.game.accountUser = responseAsJson[0].user;
                alert("You logged in as: " + sfd.game.accountUser);
                sfd.game.wave = responseAsJson[0].wave;
                sfd.game.level = responseAsJson[0].level;
                sfd.game.game = responseAsJson[0].game;
                sfd.game.gold = responseAsJson[0].gold;
                sfd.game.swordlvl = responseAsJson[0].swordlvl;
                sfd.game.rotationlvl = responseAsJson[0].rotationlvl;
                sfd.game.creepHealth = responseAsJson[0].lastHealth;
                sfd.game.creepValue = responseAsJson[0].lastValue;
                if (responseAsJson[0].tower == "false") {
                    sfd.game.tower = false;
                }
                else {
                    sfd.game.tower = true;
                }
                sfd.game.nexusCoresDeactivated = responseAsJson[0].ncDeactivated;
                sfd.game.nexusCoresActivated = responseAsJson[0].ncActivated;
                sfd.resetWave();
            }
        }
    }
})(sfd || (sfd = {}));
//# sourceMappingURL=DBClient.js.map