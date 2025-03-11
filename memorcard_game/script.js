const cardsArray = [
    "🍎", "🍎", "🍌", "🍌", "🍇", "🍇",
    "🍉", "🍉", "🍓", "🍓", "🥭", "🥭",
    "🍍", "🍍", "🍋", "🍋"
];

const gameBoard = document.getElementById('game-board')
let flippedCards = [];
let matchedPairs = 0;

console.log(cardsArray)


//shuffle cards:
function shuffleCards(){
    return cardsArray.sort(()=>0.5-Math.random())
} 

//function to create board:
function createBoard(){
    const shuffledcards = shuffleCards();
    shuffledcards.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol
        card.innerHTML =symbol
        card.addEventListener('click',flipCard)
        gameBoard.appendChild(card)
        
    });
}

function flipCard() {
    if (flippedCards.length === 2) return; 
    this.classList.add("flipped");
    this.style.pointerEvents = 'none'; 

    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// Check Match Logic
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.symbol === card2.dataset.symbol) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedPairs++;

        if (matchedPairs === cardsArray.length / 2) {
            setTimeout(() => alert("🎉 Congratulations! You matched all pairs!"), 300);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            card1.style.pointerEvents = 'auto'; 
            card2.style.pointerEvents = 'auto';
        }, 1000);
    }

    flippedCards = [];
}

createBoard()

