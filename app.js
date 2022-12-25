//https://apis.scrimba.com/deckofcards/api/deck/<<deck_id>>/draw/?count=2


//variables

const shuffleBtn = document.getElementById('shuffle-btn');
const deal2  = document.getElementById('deal2');
const cardsContainer = document.getElementById('cards-container');




//Eventlisteners


shuffleBtn.addEventListener('click', shuffleCards);


deal2.addEventListener('click', deal2Cards);



//Functions


function shuffleCards() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then((response) => response.json())
        .then((data) => {
            const deckId = data.deck_id
            localStorage.setItem('deckId', JSON.stringify(deckId))
            console.log('shuffled! your deck id is ' + deckId);
        });
}



function deal2Cards() {
    const deckId = JSON.parse(localStorage.getItem('deckId'))
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then (res => res.json())
        .then (data => {
            console.log(data);
            let htmlString = '';
            for (let element of data.cards) {
                htmlString += `<img src='${element.image}'/>`
            }
            cardsContainer.innerHTML = htmlString;
        })
    
}

