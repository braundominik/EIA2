/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {
    interface StudentData {
        studentId: number;
        lName: string;
        fName: string;
        age: number;
        sex: boolean;
        comment: string;
        // hier ist noch die richtige Datenstruktur festzulegen
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {

        // String Elements are saved into an array
        let sString: string[] = _input.split(",");

        //checks if every field is filled with a value
        let allFilled: boolean = true;
        for (let i: number = 0; i < 5; i++) {
            console.log(sString[i]);
            if (sString[i] == undefined || null) {
                allFilled = false;
                break;
            }
        }

        //writes values in student and pushes into students array
        if (allFilled) {
            let student: StudentData = {
                studentId: parseInt(sString[0]),
                lName: sString[1],
                fName: sString[2],
                age: parseInt(sString[3]),
                sex: sString[4] == "1",
                comment: sString[5]
            };
            students.push(student);
            console.log(student);
        }

        //error message if not everything defined
        else { return "Not everything defined"; }
    }
    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            if (students[i].studentId == _matrikel) {
                let sex: string;
                students[i].sex ? sex = "m" : sex = "f";
                return students[i].lName + "\n" + students[i].fName + "\n" + students[i].age + "\n" + sex + "\n" + students[i].comment;
            }
        }

    }
}