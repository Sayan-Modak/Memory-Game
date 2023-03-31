const card_arr = [
    {
        name: 'fries',
        img: 'images/fries.png'
    }, {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    }, {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }, {
        name: 'icecream',
        img: 'images/ice-cream.png'
    }, {
        name: 'milkshake', 
        img: 'images/milkshake.png'
    }, {
        name: 'pizza', 
        img: 'images/pizza.png'
    }, {
        name: 'fries',
        img: 'images/fries.png'
    }, {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    }, {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }, {
        name: 'icecream',
        img: 'images/ice-cream.png'
    }, {
        name: 'milkshake', 
        img: 'images/milkshake.png'
    }, {
        name: 'pizza', 
        img: 'images/pizza.png'
    }
];

card_arr.sort(() => 0.5 - Math.random());  // to shuffle the cards randomly

const displayGrid = document.querySelector('#grid');
const resultDisplay = document.querySelector('#score')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// Creating the board for our game
function createBoard(){
    for(let i = 0; i < card_arr.length; i++){
        const card = document.createElement('img'); // createElement() spefically helps us create new element
        card.setAttribute('src', 'images/blank.png'); // setAttribute() helps us set values in specified created elements or elements
        card.setAttribute('date-id', i);
        card.addEventListener('click', flipCard);
        displayGrid.append(card);
    }
}

createBoard();

function checkMatch(){


    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log("check for a match");
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You clicked the same card');
    }
    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Haha Loser!');
    }
    resultDisplay.textContent = cardsWon.length;
    // Resetting the arrays
    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == card_arr.length/2){
        resultDisplay.innerHTML = "It was just a fluke, you are still a loser!";
    }
}

function flipCard(){
    const card_Id = this.getAttribute('date-id'); // this keyword gives us access to the element or data that we are trying to access
    cardsChosen.push(card_arr[card_Id].name);
    cardsChosenIds.push(card_Id);
    console.log('clicked', card_Id);
    console.log(cardsChosen);
    this.setAttribute('src', card_arr[card_Id].img);

    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}












