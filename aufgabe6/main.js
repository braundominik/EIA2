/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        // String Elements are saved into an array
        let sString = _input.split(",");
        //checks if every field is filled with a value
        let allFilled = true;
        for (let i = 0; i < 5; i++) {
            console.log(sString[i]);
            if (sString[i] == undefined || null) {
                allFilled = false;
                break;
            }
        }
        //writes values in student and pushes into students array
        if (allFilled) {
            let student = {
                studentId: Number(sString[0]),
                lName: sString[1],
                fName: sString[2],
                age: Number(sString[3]),
                sex: Boolean(Number(sString[4])),
                comment: sString[5]
            };
            students.push(student);
            console.log(student);
        }
        else {
            return "Not everything defined";
        }
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].studentId == _matrikel) {
                return students[i].lName;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=main.js.map