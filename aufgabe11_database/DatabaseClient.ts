namespace DatabaseClient {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search");
        let deleteButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("delete");
        insertButton.addEventListener("click", insert);
        searchButton.addEventListener("click", login);
        deleteButton.addEventListener("click", deleteData);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=find";
        console.log(query);
        sendRequest(query, handleFindResponse);
    }

    function search(_event: Event): void {
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("searchName");
        let matrikel: HTMLInputElement = <HTMLInputElement>document.getElementById("searchMatrikel");
        let query: string = "command=search";
        query += "&name=" + name.value;
        query += "&matrikel=" + matrikel.value;
        sendRequest(query, handleSearchResponse);
    }

    function deleteData(_event: Event): void {
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("delName");
        let firstname: HTMLInputElement = <HTMLInputElement>document.getElementById("delFirstname");
        let matrikel: HTMLInputElement = <HTMLInputElement>document.getElementById("delMatrikel");
        let query: string = "command=del";
        query += "&name=" + name.value;
        query += "&firstname=" + firstname.value;
        query += "&matrikel=" + matrikel.value;
        sendRequest(query, handleDelResponse);
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

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }

    function handleSearchResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
    
        function handleDelResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    

}