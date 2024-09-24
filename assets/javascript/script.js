const deck = [
    { name: 'Card 1', power: 1 },
    { name: 'Card 2', power: 2 },
    { name: 'Card 3', power: 3 },
    { name: 'Card 4', power: 4 },
    { name: 'Card 5', power: 5 },
];

let playerHand = [];

document.getElementById('draw-card').addEventListener('click', drawCard);

function drawCard() {
    if (deck.length === 0) {
        alert('No more cards in the deck!');
        return;
    }
    const randomIndex = Math.floor(Math.random() * deck.length);
    const drawnCard = deck.splice(randomIndex, 1)[0];
    playerHand.push(drawnCard);
    displayHand();
}

function displayHand() {
    const handContainer = document.getElementById('player-hand');
    handContainer.innerHTML = '';
    playerHand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerText = `${card.name}\nPower: ${card.power}`;
        handContainer.appendChild(cardElement);
    });
}
