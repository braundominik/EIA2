window.onload = function(): void {
    let ziehstapel: string[] = ["Herz-Ass", "Karo-Ass", "Pik-Ass", "Kreuz-Ass", "Herz-König", "Karo-König", "Pik-König", "Kreuz-König", "Herz-Dame", "Karo-Dame", "Pik-Dame", "Kreuz-Dame", "Herz-Bube", "Karo-Bube", "Pik-Bube", "Kreuz-Bube", "Herz-10", "Karo-10", "Pik-10", "Kreuz-10", "Herz-9", "Karo-9", "Pik-9", "Kreuz-9", "Herz-8", "Karo-8", "Pik-8", "Kreuz-8", "Herz-7", "Karo-7", "Pik-7", "Kreuz-7"];
    let hand: string[] = [];

    var ziehDiv: HTMLDivElement = document.createElement("div");
    var ablageDiv: HTMLDivElement = document.createElement("div");
    var handDiv: HTMLDivElement = document.createElement("div");
    //    var hand1Div: HTMLDivElement = document.createElement("div");
    //    var hand2Div: HTMLDivElement = document.createElement("div");
    //    var hand3Div: HTMLDivElement = document.createElement("div");
    //    var hand4Div: HTMLDivElement = document.createElement("div");
    //    var hand5Div: HTMLDivElement = document.createElement("div");
    var handDivs: HTMLDivElement[] = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")]
    //    var ziehDiv: HTMLDivElement = div;
    //    var ablageDiv: HTMLDivElement = div;
    //    var handDiv: HTMLDivElement = div;

    document.body.appendChild(ziehDiv);
    document.body.appendChild(ablageDiv);
    document.body.appendChild(handDiv);

    ziehDiv.innerHTML = "Ziehstapel";
    ziehDiv.style.backgroundColor = "black";
    ziehDiv.style.color = "white";

    ablageDiv.innerHTML = "Ablagestapel";
    //    document.body.lastChild.appendChild(hand1Div);
    //    document.body.lastChild.appendChild(hand2Div);
    //    document.body.lastChild.appendChild(hand3Div);
    //    document.body.lastChild.appendChild(hand4Div);
    //    document.body.lastChild.appendChild(hand5Div);

    handDiv.style.clear = "both";
    handDiv.style.height = "30vmin";
    handDiv.style.width = "80vmin";

    for (var i: number = 0; i < handDivs.length; i++) {
        document.body.lastChild.appendChild(handDivs[i]);
        handDivs[i].style.width = "16vmin";
        handDivs[i].style.height = "30vmin";
        handDivs[i].style.fontSize = "1vmin";
        handDivs[i].addEventListener("click", ablegen);
    }

    ziehDiv.addEventListener("click", ziehen);

    function ziehen(): void {
        if (ziehstapel.length > 0) {
            console.log(ziehstapel[0]);
            let removed: string[] = ziehstapel.splice(0, 1);
            if (hand.length < 5) {
                hand.push(removed[0]);
                console.log(hand[0], hand[1], hand[2], hand[3], hand[4]);
            }
        }
        updateHand();
    }

    function ablegen(): void {
        hand.splice(i, 1);
        console.log(hand[0]);
        updateHand();
    }

    function updateHand(): void {
        for (var i: number = 0; i < handDivs.length; i++) {
            handDivs[i].innerHTML = hand[i];

        }
    }

    console.log(ziehstapel[0], ziehstapel[31]);
};