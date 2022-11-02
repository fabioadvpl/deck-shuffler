const deck = [];

document.getElementById("load-deck").addEventListener("click", loadDeck);
document.getElementById("shuffle").addEventListener("click", shuffleDeck);
document.getElementById("start-game").addEventListener("click", startGame);


function shuffleDeck() {

    if (deck.length === 0) {
        alert("Please Load your deck first.")
        return
    }

    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    document.getElementById("deck").value = deck.join("\n");
}

function startGame() {
    fulfillHand()
    fulfillPrizes()
}

function loadDeck() {
    let cardList = document.getElementById("deck").value.trim().split("\n");

    if (cardList.length < 60) {
        alert("Your deck has less than 60 cards. Please try again.")
    } else {
        deck.splice(0, deck.length)
        deck.push(...cardList)
        alert("Your deck has been loaded.")
    }

}


function fulfillHand() {
    let htmlToAppend = ""

    for (let i = 0; i < 7; i++) {
        htmlToAppend += `<tr>
    										<td>${i + 1}.</td>
                        <td>${deck[i]}</td>
    								 </tr>`;
    }

    document.getElementById("hand-body").innerHTML = htmlToAppend;

}

function fulfillPrizes() {
    let htmlToAppend = ""

    for (let i = 7, j=1; i < 13; i++,j++) {
        htmlToAppend += `<tr>
    										<td>${j}.</td>
                        <td>${deck[i]}</td>
    								 </tr>`;
    }

    document.getElementById("prizes-body").innerHTML = htmlToAppend;

}