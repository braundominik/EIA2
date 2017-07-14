var sfd;
(function (sfd) {
    window.addEventListener("load", init);
    function init(_event) {
        let insertButton = document.getElementById("create");
        let loginButton = document.getElementById("login");
        let saveButton = document.getElementById("save");
        insertButton.addEventListener("click", insert);
        loginButton.addEventListener("click", login);
        saveButton.addEventListener("click", save);
    }
    function insert(_event) {
        let user = document.getElementById("createUser");
        let password = document.getElementById("createPassword");
        let query = "command=insert";
        query += "&user=" + user.value;
        query += "&password=" + password.value;
        query += "&wave=" + sfd.game.wave;
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
        xhr.open("GET", "http://localhost:8100?" + _query, true);
        //xhr.open("GET", "https://eia2heroku.herokuapp.com?" + _query, true);
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
                sfd.resetWave();
            }
        }
    }
})(sfd || (sfd = {}));
//# sourceMappingURL=DBClient.js.map