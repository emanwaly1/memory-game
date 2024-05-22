const cards = document.querySelectorAll(".card");
let matchCard = 0;//incrment number //this tracked all sellected cards
let cardone = null;//this will take the value to one of the two flipped cards
let cardtwo = null;//the scand card which will take the value
let disableDeck = false;
// The disableDeck variable is used to control whether the 
// deck (the set of cards) is disabled or enabled. When the deck is disabled,
//  it means that no further card flips are allowed.

function flipCard(e) {//this will worked w hen i click 
    const clickedCard = e.target;//the clicked card assign name as clickedcard

    if (clickedCard !== cardone && !disableDeck) {//if the card which clicked is not null or disabled
        // ! an deck is not diacble i will gave it class flip wihich will rotated by css!
        clickedCard.classList.add("flip");

        if (!cardone) {//and if the card not set so i will gave it a value as clickedcard
            cardone = clickedCard;
        } else {//if the cardeone was set !i will assign click card to card two
            cardtwo = clickedCard;
            disableDeck = true;
            const cardoneImg = cardone.querySelector("img").src;//sicce the matchCards function has two 
            //parmeters so i need a spesific vairables to send it to these functions which is the excet values 
            //numbers of the images !
            const cardtwoImg = cardtwo.querySelector("img").src;
            matchCards(cardoneImg, cardtwoImg);
        }
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {//كل مره يتحسب ان الصور متشابهه بتزيد العداد بمره وعشان 
        //كدا بقي التمام بتاعتنا 10 مش عشرين!
        matchCard++;

        if (matchCard === 10) {//number 10 is the number of 20 cards get selcted 
            setTimeout(() => {
                shuffleCards();
            }, 1000);
        }

        cardone.removeEventListener("click", flipCard);
        cardtwo.removeEventListener("click", flipCard);
        cardone = null;
        cardtwo = null;
        disableDeck = false;
    } else {
        setTimeout(() => {
            cardone.classList.add("shake");
            cardtwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardone.classList.remove("shake", "flip");
            cardtwo.classList.remove("shake", "flip");
            disableDeck = false;
            cardone = null;
            cardtwo = null;
        }, 1200);
    }
}

function shuffleCards() {
    matchCard = 0;
    cardone = null;
    cardtwo = null;
    disableDeck = false;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8,9,10, 1, 2, 3, 4, 5, 6, 7, 8,9,10];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    cards.forEach((card, i) => {
        card.classList.remove("flip");
        const imgtag = card.querySelector("img");
        imgtag.src =`../memory game/img/${arr[i]}.jpg`;
    });}

shuffleCards();

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
 
// The code starts by selecting all the elements with the class "card" and storing them in the card variable.
// It initializes two variables, matchCard and disableDeck, to keep track of the number of matched cards and whether
//  the deck is disabled or not.
// The flipCard function is defined, which is triggered when a card is clicked. It checks if the clicked card is not the
//  same as the previously clicked card (cardone) and if the deck is not disabled. If these conditions are met, it adds the "flip" class 
//  to the clicked card to reveal its content.
// If cardone is not defined, it assigns the clicked card to cardone. Otherwise, it assigns the clicked card to cardtwo and
//  disables the deck by setting disableDeck to true.
// It then retrieves the image sources of cardone and cardtwo and passes them to the matchCards function.
// In the matchCards function, it compares the image sources of cardone and cardtwo. If they match, 
// it increments the matchCard variable.
//  If matchCard reaches 8 (indicating all cards have been matched), it shuffles the cards after a 1-second delay by 
//  calling the shuffleCards
//   function.
// If the images do not match, it adds the "shake" class to both cardone and cardtwo to indicate an incorrect match.
//  After 400 milliseconds, it removes the "shake" and "flip" classes from both cards and enables the deck
//   by setting disableDeck to false.
// The shuffleCards function is responsible for shuffling the cards. It resets the matchCard variable and clears 
// the cardone and cardtwo variables. It sets disableDeck to false. It creates an array with the numbers 1 to 8 (representing 
//     the different card images) repeated twice. It shuffles the array using the Fisher-Yates algorithm. Then, it iterates over each 
//     card element and removes the "flip" class and sets the image source based on the shuffled array. It adds a click event listener
//      to each card that triggers the flipCard function.
// Lastly, the code calls shuffleCards to initialize the game and adds the "flip" class to all cards to show their fronts. It also adds a 
// click event listener to each card that triggers the flipCard function.



// poe 
// This code is a JavaScript implementation of a memory game. Here's a simplified explanation of what the code does:

//     const cards = document.querySelectorAll(".card");: This line selects all the elements with the class "card" and stores
//  them in the cards variable.

//     let matchCard = 0;: This variable keeps track of the number of matched card pairs.

//     let cardone = null; and let cardtwo = null;: These variables store the currently flipped cards.

//     let disableDeck = false;: This variable determines whether the deck is disabled to prevent further card flips during certain game 
//     states.

//     function flipCard(e) { ... }: This function is called when a card is clicked. It handles flipping the card and checking for
//  matches.

//     function matchCards(img1, img2) { ... }: This function compares the images of the two flipped cards and either marks them as
//  matched 
//     or shakes them if they don't match.

//     function shuffleCards() { ... }: This function shuffles the cards and resets the game state. It assigns random images to the cards
//      from an array of image sources.

//     shuffleCards();: This line calls the shuffleCards function to initialize the game by shuffling the cards.

//     cards.forEach(card => { ... }: This block adds a click event listener to each card element, calling the flipCard function when
//          clicked.







// The matchCards function is called when two cards are flipped.
//  If the image sources of the two cards match, it increments matchCard and checks if all 
//  the card pairs have been matched (matchCard === 10). If all pairs are matched, it calls the shuffleCards function
//   after a delay. It also removes the click event listeners from the matched cards, resets cardone and cardtwo,
//    and enables the deck.

// If the image sources of the two cards don't match, a "shake" animation is applied to both cards by adding the "shake" class. 
// After a delay, the "shake" and "flip" classes are removed from both cards. The deck is enabled, and cardone and cardtwo are reset.

// The shuffleCards function resets the game state. It sets matchCard, cardone, cardtwo, and disableDeck to their initial values. 
// It creates an array arr representing the card pairs and shuffles them randomly. Then, it iterates over each card element, removes
//  the "flip" class, and updates the image source based on the shuffled array.

// The shuffleCards function is immediately called to initialize the game by shuffling the cards and setting the initial game state.

// Finally, a click event listener (flipCard) is added to each card element using the forEach method. This allows the flipCard function
//  to be called when a card is clicked.






// Certainly! Here's another way to explain the code:

// 1. The code sets up a memory card matching game using JavaScript and CSS.

// 2. The `cards` variable selects all the HTML elements with the class "card" and stores them in an array.
//  Each element represents a card in the game.

// 3. The `matchCard` variable keeps track of the number of matched card pairs.

// 4. The `cardone` and `cardtwo` variables store the first and second cards that are clicked, respectively.

// 5. The `disableDeck` variable determines whether further card flips are allowed. It starts as `false`,
//  meaning the deck is enabled.

// 6. The `flipCard` function is called when a card is clicked. It adds the "flip" class to the clicked card, 
// which causes it to rotate and reveal its image. If `cardone` is not set (null), it assigns the clicked card to `cardone`.
//  If `cardone` is already set, it assigns the clicked card to `cardtwo`. Then, it disables the deck by setting `disableDeck` to 
//  `true`, retrieves the image sources of both cards, and calls the `matchCards` function.

// 7. The `matchCards` function is called when two cards are flipped. It compares the image sources of the two cards. If they match,
//  it increments `matchCard` and checks if all card pairs have been matched (matchCard === 10). If all pairs are matched, it calls 
//  the `shuffleCards` function after a delay. It also removes the click event listeners from the matched cards, resets `cardone` and 
//  `cardtwo` to null, and enables the deck by setting `disableDeck` to `false`.

// 8. If the image sources of the two cards don't match, a "shake" animation is applied to both cards by adding the "shake" class. After 
// a delay, the "shake" and "flip" classes are removed from both cards. The deck is enabled, and `cardone` and `cardtwo` are reset to null.

// 9. The `shuffleCards` function is responsible for shuffling the cards and resetting the game state. It sets `matchCard` to 0, `cardone`
//  and `cardtwo` to null, and `disableDeck` to false. It creates an array `arr` representing the card pairs and shuffles them randomly.
//   Then, it iterates over each card element, removes the "flip" class, and updates the image source of each card based on the shuffled
//    array.

// 10. The `shuffleCards` function is immediately called to initialize the game by shuffling the cards and setting the initial game state.

// 11. Finally, a click event listener (`flipCard`) is added to each card element using the `forEach` method. This allows the `flipCard`
//  function to be called when a card is clicked.

// In summary, the code sets up a memory card matching game where players can click on cards to reveal their images. When two cards are
//  flipped, it checks if they match and performs actions accordingly. It keeps track of matched card pairs, allows the deck to be 
//  shuffled and reset, and enables or disables card