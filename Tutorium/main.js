//TESTTESTAHFDL�AIFHAWO�FHAWFHAW
var maumau;
(function (maumau) {
    let deck = [];
    let hand = [];
    let discard = [];
    window.onload = init;
    function init() {
        createDeck();
        document.getElementById("deck").addEventListener("click", drawCard);
    }
    function createDeck() {
        let colors = ["Schelle", "Herz", "Gras", "Eichel"];
        let values = ["7", "8", "9", "10", "Unter", "Ober", "K�nig", "Ass"];
        for (let i = 0; i < colors.length; i++) {
            for (let j = 0; j < values.length; j++) {
                deck.push(colors[i] + " " + values[j]);
            }
        }
        console.log(deck);
    }
    function drawCard() {
        if (hand.length < 5) {
            let min = 0;
            let max = deck.length - 1;
            let random = Math.round(Math.random() * (max - min) + min);
            console.log(random);
            let card = deck.splice(random, 1)[0];
            hand.push(card);
        }
        updateVisuals();
    }
    function updateVisuals() {
        if (deck.length == 0) {
            let deckDiv = document.getElementById("deck");
            deckDiv.parentNode.removeChild(deckDiv);
        }
        let handDiv = document.getElementById("hand");
        handDiv.innerHTML = "";
        for (let i = 0; i < hand.length; i++) {
            let div = document.createElement("div");
            div.textContent = hand[i];
            div.addEventListener("click", removeCard);
            handDiv.appendChild(div);
        }
        if (discard.length > 0) {
            document.getElementById("ablage").textContent = discard[discard.length - 1];
        }
    }
    function removeCard(_event) {
        let target = _event.target;
        let card = target.textContent;
        hand.splice(hand.indexOf(card), 1);
        discard.push(card);
        updateVisuals();
    }
})(maumau || (maumau = {}));
//# sourceMappingURL=main.js.map