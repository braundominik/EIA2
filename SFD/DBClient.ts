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
        let query: string = "command=insert";
        query += "&user=" + user.value;
        query += "&password=" + password.value;
        query += "&wave=" + game.wave;
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
            let query: string = "command=search";
            query += "&user=" + user.value;
            query += "&password=" + password.value;
            sendRequest(query, handleSearchResponse);
        }
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?" + _query, true);
        //xhr.open("GET", "https://eia2heroku.herokuapp.com?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
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
                resetWave();
            }
        }
    }


}