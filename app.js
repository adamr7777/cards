
//https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/

const shuffleBtn = document.getElementById('shuffle-btn');





shuffleBtn.addEventListener('click', shuffleCards);





function shuffleCards() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then((response) => response.json())
        .then((data) => console.log(data));
}


setTimeout(runF, 2000);


function runF() {
    console.log('finnaly I ran')
}