/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
window.onload = function () {
    //anlegen von ziehtstapel und handarry
    let ziehstapel = ["Herz-Ass", "Karo-Ass", "Pik-Ass", "Kreuz-Ass", "Herz-K�nig", "Karo-K�nig", "Pik-K�nig", "Kreuz-K�nig", "Herz-Dame", "Karo-Dame", "Pik-Dame", "Kreuz-Dame", "Herz-Bube", "Karo-Bube", "Pik-Bube", "Kreuz-Bube", "Herz-10", "Karo-10", "Pik-10", "Kreuz-10", "Herz-9", "Karo-9", "Pik-9", "Kreuz-9", "Herz-8", "Karo-8", "Pik-8", "Kreuz-8", "Herz-7", "Karo-7", "Pik-7", "Kreuz-7"];
    let hand = [];
    //Anlegen der div-container und anf�gen dieser
    let ziehDiv = document.createElement("div");
    let ablageDiv = document.createElement("div");
    let handDiv = document.createElement("div");
    let handDivs = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];
    document.body.appendChild(ziehDiv);
    document.body.appendChild(ablageDiv);
    document.body.appendChild(handDiv);
    //Styles und Inhalte der div-container
    ziehDiv.innerHTML = "Ziehstapel";
    ziehDiv.style.backgroundColor = "black";
    ziehDiv.style.color = "white";
    ablageDiv.innerHTML = "Ablagestapel";
    handDiv.style.clear = "both";
    handDiv.style.height = "30vmin";
    handDiv.style.width = "80vmin";
    for (let i = 0; i < handDivs.length; i++) {
        document.body.lastChild.appendChild(handDivs[i]);
        handDivs[i].style.width = "16vmin";
        handDivs[i].style.height = "30vmin";
        handDivs[i].style.fontSize = "1vmin";
    }
    //EventListener
    handDivs[0].addEventListener("click", function () { ablegen(0); });
    handDivs[1].addEventListener("click", function () { ablegen(1); });
    handDivs[2].addEventListener("click", function () { ablegen(2); });
    handDivs[3].addEventListener("click", function () { ablegen(3); });
    handDivs[4].addEventListener("click", function () { ablegen(4); });
    ziehDiv.addEventListener("click", ziehen);
    //Funktion ziehen welche Karten vom Ziehstapel entfernt und zur Hand hinzuf�gt
    function ziehen() {
        if (ziehstapel.length > 0) {
            if (hand.length < 5) {
                let rndm = Math.round(Math.random() * (ziehstapel.length - 1));
                console.log(rndm);
                let removed = ziehstapel.splice(rndm, 1);
                hand.push(removed[0]);
                console.log(hand[0], hand[1], hand[2], hand[3], hand[4]);
            }
        }
        updateHand();
    }
    //Funktion ablegen welche Karten von der Hand auf den Ablagestapel legt
    function ablegen(x) {
        if (handDivs[x].textContent != "") {
            let discarded = hand.splice(x, 1);
            ablageDiv.textContent = discarded[0];
            updateHand();
        }
    }
    //Updatefunktion welche die HandDivs mit dem HandArray abgeleicht
    function updateHand() {
        for (let i = 0; i < handDivs.length; i++) {
            handDivs[i].textContent = hand[i];
        }
    }
    console.log(ziehstapel[0], ziehstapel[31]);
};
//# sourceMappingURL=main.js.map