/*
Aufgabe: Aufgabe 3
Name: Braun Dominik
Matrikel: 254901
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

window.onload = function(): void {
    let ziehstapel: string[] = ["Herz-Ass", "Karo-Ass", "Pik-Ass", "Kreuz-Ass", "Herz-König", "Karo-König", "Pik-König", "Kreuz-König", "Herz-Dame", "Karo-Dame", "Pik-Dame", "Kreuz-Dame", "Herz-Bube", "Karo-Bube", "Pik-Bube", "Kreuz-Bube", "Herz-10", "Karo-10", "Pik-10", "Kreuz-10", "Herz-9", "Karo-9", "Pik-9", "Kreuz-9", "Herz-8", "Karo-8", "Pik-8", "Kreuz-8", "Herz-7", "Karo-7", "Pik-7", "Kreuz-7"];
    let hand: string[] = [];

    let ziehDiv: HTMLDivElement = document.createElement("div");
    let ablageDiv: HTMLDivElement = document.createElement("div");
    let handDiv: HTMLDivElement = document.createElement("div");
    let handDivs: HTMLDivElement[] = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];

    document.body.appendChild(ziehDiv);
    document.body.appendChild(ablageDiv);
    document.body.appendChild(handDiv);

    ziehDiv.innerHTML = "Ziehstapel";
    ziehDiv.style.backgroundColor = "black";
    ziehDiv.style.color = "white";

    ablageDiv.innerHTML = "Ablagestapel";

    handDiv.style.clear = "both";
    handDiv.style.height = "30vmin";
    handDiv.style.width = "80vmin";

    for (let i: number = 0; i < handDivs.length; i++) {
        document.body.lastChild.appendChild(handDivs[i]);
        handDivs[i].style.width = "16vmin";
        handDivs[i].style.height = "30vmin";
        handDivs[i].style.fontSize = "1vmin";
    }

    handDivs[0].addEventListener("click", function(): void { ablegen(0); });
    handDivs[1].addEventListener("click", function(): void { ablegen(1); });
    handDivs[2].addEventListener("click", function(): void { ablegen(2); });
    handDivs[3].addEventListener("click", function(): void { ablegen(3); });
    handDivs[4].addEventListener("click", function(): void { ablegen(4); });

    ziehDiv.addEventListener("click", ziehen);

    function ziehen(): void {
        if (ziehstapel.length > 0) {
            if (hand.length < 5) {
                let rndm: number = Math.round(Math.random() * (ziehstapel.length - 1));
                console.log(rndm);
                let removed: string[] = ziehstapel.splice(rndm, 1);

                hand.push(removed[0]);
                console.log(hand[0], hand[1], hand[2], hand[3], hand[4]);
            }

        }
        updateHand();
    }

    function ablegen(x: number): void {
        if (handDivs[x].innerHTML != "undefined") {
            let discarded: string[] = hand.splice(x, 1);
            ablageDiv.innerHTML = discarded[0];
            updateHand();
        }
    }




    function updateHand(): void {
        for (let i: number = 0; i < handDivs.length; i++) {
            handDivs[i].innerHTML = hand[i];

        }
    }

    console.log(ziehstapel[0], ziehstapel[31]);
};