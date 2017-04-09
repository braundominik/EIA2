window.onload = function () {
    let ziehstapel = ["Herz-Ass", "Karo-Ass", "Pik-Ass", "Kreuz-Ass", "Herz-K�nig", "Karo-K�nig", "Pik-K�nig", "Kreuz-K�nig", "Herz-Dame", "Karo-Dame", "Pik-Dame", "Kreuz-Dame", "Herz-Bube", "Karo-Bube", "Pik-Bube", "Kreuz-Bube", "Herz-10", "Karo-10", "Pik-10", "Kreuz-10", "Herz-9", "Karo-9", "Pik-9", "Kreuz-9", "Herz-8", "Karo-8", "Pik-8", "Kreuz-8", "Herz-7", "Karo-7", "Pik-7", "Kreuz-7"];
    let hand = [];
    var ziehDiv = document.createElement("div");
    var ablageDiv = document.createElement("div");
    var handDiv = document.createElement("div");
    var handDivs = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];
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
    for (var i = 0; i < handDivs.length; i++) {
        document.body.lastChild.appendChild(handDivs[i]);
        handDivs[i].style.width = "16vmin";
        handDivs[i].style.height = "30vmin";
        handDivs[i].style.fontSize = "1vmin";
    }
    handDivs[0].addEventListener("click", function () { ablegen(0); });
    handDivs[1].addEventListener("click", function () { ablegen(1); });
    handDivs[2].addEventListener("click", function () { ablegen(2); });
    handDivs[3].addEventListener("click", function () { ablegen(3); });
    handDivs[4].addEventListener("click", function () { ablegen(4); });
    ziehDiv.addEventListener("click", ziehen);
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
    function ablegen(x) {
        if (handDivs[x].innerHTML != "undefined") {
            let discarded = hand.splice(x, 1);
            ablageDiv.innerHTML = discarded[0];
            updateHand();
        }
    }
    function updateHand() {
        for (var i = 0; i < handDivs.length; i++) {
            handDivs[i].innerHTML = hand[i];
        }
    }
    console.log(ziehstapel[0], ziehstapel[31]);
};
//# sourceMappingURL=main.js.map