window.onload = function () {
    let ziehstapel = ["Herz-Ass", "Karo-Ass", "Pik-Ass", "Kreuz-Ass", "Herz-K�nig", "Karo-K�nig", "Pik-K�nig", "Kreuz-K�nig", "Herz-Dame", "Karo-Dame", "Pik-Dame", "Kreuz-Dame", "Herz-Bube", "Karo-Bube", "Pik-Bube", "Kreuz-Bube", "Herz-10", "Karo-10", "Pik-10", "Kreuz-10", "Herz-9", "Karo-9", "Pik-9", "Kreuz-9", "Herz-8", "Karo-8", "Pik-8", "Kreuz-8", "Herz-7", "Karo-7", "Pik-7", "Kreuz-7"];
    var ziehDiv = document.createElement("div");
    var ablageDiv = document.createElement("div");
    var handDiv = document.createElement("div");
    //    var hand1Div: HTMLDivElement = document.createElement("div");
    //    var hand2Div: HTMLDivElement = document.createElement("div");
    //    var hand3Div: HTMLDivElement = document.createElement("div");
    //    var hand4Div: HTMLDivElement = document.createElement("div");
    //    var hand5Div: HTMLDivElement = document.createElement("div");
    var handDivs = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];
    //    var ziehDiv: HTMLDivElement = div;
    //    var ablageDiv: HTMLDivElement = div;
    //    var handDiv: HTMLDivElement = div;
    document.body.appendChild(ziehDiv);
    document.body.appendChild(ablageDiv);
    document.body.appendChild(handDiv);
    ziehDiv.innerHTML = "Ziehstapel";
    ziehDiv.style.backgroundColor = "black";
    ziehDiv.style.color = "white";
    //    document.body.lastChild.appendChild(hand1Div);
    //    document.body.lastChild.appendChild(hand2Div);
    //    document.body.lastChild.appendChild(hand3Div);
    //    document.body.lastChild.appendChild(hand4Div);
    //    document.body.lastChild.appendChild(hand5Div);
    handDiv.style.clear = "both";
    handDiv.style.height = "30vmin";
    handDiv.style.width = "80vmin";
    for (var i = 1; i < handDivs.length; i++) {
        document.body.lastChild.appendChild(handDivs[i]);
        handDivs[i].style.width = "16vmin";
        handDivs[i].style.height = "30vmin";
    }
    console.log(ziehstapel[0], ziehstapel[31]);
};
//# sourceMappingURL=main.js.map