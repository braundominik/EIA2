namespace sfd {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("create");
        let loginButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
        let saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save");
        insertButton.addEventListener("click", insert);
        loginButton.addEventListener("click", login);
        saveButton.addEventListener("click", save);
    }

    function insert(_event: Event): void {
        let user: HTMLInputElement = <HTMLInputElement>document.getElementById("createUser");
        let password: HTMLInputElement = <HTMLInputElement>document.getElementById("createPassword");
        game.accountUser = user.value;
        let query: string = "command=insert";
        query += "&user=" + user.value;
        query += "&password=" + password.value;
        query += "&wave=" + game.wave;
        query += "&level=" + game.level;
        query += "&game=" + game.game;
        query += "&gold=" + game.gold;
        query += "&swordlvl=" + game.swordlvl;
        query += "&rotationlvl=" + game.rotationlvl;
        query += "&creepHealth=" + game.creepHealth;
        query += "&lastHealth=" + game.lastHealth;
        query += "&creepValue=" + game.creepValue;
        query += "&lastValue=" + game.lastValue;
        query += "&tower=" + game.tower;
        query += "&ncDeactivated=" + game.nexusCoresDeactivated;
        query += "&ncActivated=" + game.nexusCoresActivated;

        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function login(_event: Event): void {
        let user: HTMLInputElement = <HTMLInputElement>document.getElementById("searchUser");
        let password: HTMLInputElement = <HTMLInputElement>document.getElementById("searchPassword");
        let query: string = "command=search";
        query += "&user=" + user.value;
        query += "&password=" + password.value;
        sendRequest(query, handleSearchResponse);
    }

    function save(_event: Event): void {
        if (game.accountUser != "") {
            let user: HTMLInputElement = <HTMLInputElement>document.getElementById("searchUser");
            let password: HTMLInputElement = <HTMLInputElement>document.getElementById("searchPassword");
            let query: string = "command=update";
            query += "&user=" + game.accountUser;
            query += "&password=" + password.value;
            query += "&wave=" + game.wave;
            query += "&level=" + game.level;
            query += "&game=" + game.game;
            query += "&gold=" + game.gold;
            query += "&swordlvl=" + game.swordlvl;
            query += "&rotationlvl=" + game.rotationlvl;
            query += "&creepHealth=" + game.creepHealth;
            query += "&lastHealth=" + game.lastHealth;
            query += "&creepValue=" + game.creepValue;
            query += "&lastValue=" + game.lastValue;
            query += "&tower=" + game.tower;
            query += "&ncDeactivated=" + game.nexusCoresDeactivated;
            query += "&ncActivated=" + game.nexusCoresActivated;
            sendRequest(query, handleUpdateResponse);
        }
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        //xhr.open("GET", "http://localhost:8100?" + _query, true);
        xhr.open("GET", "https://eia2heroku.herokuapp.com?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleUpdateResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleSearchResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);

            if (responseAsJson.length == 0) {
                game.accountUser = "";
            }

            else {
                game.accountUser = responseAsJson[0].user;
                alert("You logged in as: " + game.accountUser);
                game.wave = responseAsJson[0].wave;
                game.level = responseAsJson[0].level;
                game.game = responseAsJson[0].game;
                game.gold = responseAsJson[0].gold;
                game.swordlvl = responseAsJson[0].swordlvl;
                game.rotationlvl = responseAsJson[0].rotationlvl;
                game.creepHealth = responseAsJson[0].lastHealth;
                game.creepValue = responseAsJson[0].lastValue;
                game.accountPassword = responseAsJson[0].password;

                if (responseAsJson[0].tower == "false") {
                    game.tower = false;
                }

                else {
                    game.tower = true;
                }
                game.nexusCoresDeactivated = responseAsJson[0].ncDeactivated;
                game.nexusCoresActivated = responseAsJson[0].ncActivated;

                resetWave();


            }
        }
    }

}