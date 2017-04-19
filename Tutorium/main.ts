namespace maumau {
    let deck: string[] = [];
    let hand: string[] = [];
    let discard: string[] = [];

    window.onload = init;

    function init(): void {
        createDeck();
        document.getElementById("deck").addEventListener("click", drawCard);
    }

    function createDeck(): void {
        let colors: string[] = ["Schelle", "Herz", "Gras", "Eichel"];
        let values: string[] = ["7", "8", "9", "10", "Unter", "Ober", "König", "Ass"];

        for (let i: number = 0; i < colors.length; i++) {
            for (let j: number = 0; j < values.length; j++) {
                deck.push(colors[i] + " " + values[j]);
            }
        }
        console.log(deck);
    }

    function drawCard(): void {
        if (hand.length < 5) {
            let min: number = 0;
            let max: number = deck.length - 1;
            let random: number = Math.round(Math.random() * (max - min) + min);

            console.log(random);

            let card: string = deck.splice(random, 1)[0];
            hand.push(card);
        }

        updateVisuals();
    }

    function updateVisuals(): void {
        if (deck.length == 0) {
            let deckDiv: HTMLElement = document.getElementById("deck");
            deckDiv.parentNode.removeChild(deckDiv);

        }

        let handDiv: HTMLElement = document.getElementById("hand");
        handDiv.innerHTML = "";
        for (let i: number = 0; i < hand.length; i++) {
            let div: HTMLDivElement = document.createElement("div");
            div.textContent = hand[i];
            div.addEventListener("click", removeCard);
            handDiv.appendChild(div);
        }

        if (discard.length > 0) {
            document.getElementById("ablage").textContent = discard[discard.length - 1];
        }
    }

    function removeCard(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let card: string = target.textContent;
        hand.splice(hand.indexOf(card), 1);
        discard.push(card);

        updateVisuals();
    }

}