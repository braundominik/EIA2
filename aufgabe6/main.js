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
        //String Elements are saved into an array
        let sString = _input.split(",");
        //checks if every field is filled with a value
        for (let i = 0; i < 5; i++) {
            if (sString[i] == undefined || null) {
                return "Not everything defined";
            }
        }
        for (let i = 0; i < 5; i++) {
            switch (i) {
                case 1:
                case 2:
                case 5:
                    break;
                case 0:
                case 3:
                    if (isNaN(parseInt(sString[i]))) {
                        return sString[i] + " has to be a number";
                    }
                    ;
                    break;
                case 4:
                    if (isNaN(parseInt(sString[i]))) {
                        return sString[i] + " has to be a number";
                    }
                    ;
                    if (parseInt(sString[i]) != 0 && parseInt(sString[i]) != 1) {
                        return sString[i] + " should be a Value between 0 and 1";
                    }
                    ;
            }
        }
        //writes values in student and pushes into students array
        let student = {
            studentId: parseInt(sString[0]),
            lName: sString[1],
            fName: sString[2],
            age: parseInt(sString[3]),
            sex: sString[4] == "1",
            comment: sString[5]
        };
        students.push(student);
        console.log(student);
        return "Student saved";
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].studentId == _matrikel) {
                let sex;
                students[i].sex ? sex = "m" : sex = "f";
                return students[i].lName + "\n" + students[i].fName + "\n" + students[i].age + "\n" + sex + "\n" + students[i].comment;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=main.js.map