const cardArray = [
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'doughnut',
        img: 'images/doughnut.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'ice-cream-2',
        img: 'images/ice-cream-2.png'
    },
    {
        name: 'ice-cream-3',
        img: 'images/ice-cream-3.png'
    },
    {
        name: 'ketchup',
        img: 'images/ketchup.png'
    },
    {
        name: 'pineapple',
        img: 'images/pineapple.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'strawberry',
        img: 'images/strawberry.png'
    },
    {
        name: 'watermelon',
        img: 'images/watermelon.png'
    },
];



var obj = document.getElementById('card-container')
console.log(obj);
obj.style.backgroundColor='yellow'

var obj2 = document.getElementsByClassName('grid')
console.log(obj2);
function myFunction() {
    let index = 0;
    const numberOfCards = 20;
    for(let i=0;i<numberOfCards;i++){
        const max = 9;
        let card = document.createElement('div');
        card.className = 'card-wrapper';
        card.setAttribute('data-name',cardArray[index].name);
        card.innerHTML = `<div class="card-front"><img src="${cardArray[index].img}"></div><div class="card-back"></div>`;
        //card.innerHTML = `<img src="${cardArray[index].img}">`;
        document.getElementById('grid').appendChild(card);

        index++;
        if(index>9){index=0};
    }
}
myFunction();


let hasFlipped = false;
let firstCard, secondCard;


const cardsList = document.querySelectorAll('.card-wrapper');

function flipCard(){
    this.classList.add('flip');

    if(!hasFlipped){
        hasFlipped = true;
        firstCard = this;
        console.log('first card flipped');
    }
    else{
        hasFlipped = false;
        secondCard = this;
        console.log('second card flipped',secondCard.dataset.name)

        if(firstCard.dataset.name === secondCard.dataset.name){
            console.log('its a match !!!!');
            firstCard.removeEventListener('click',flipCard);
        }
        else{
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            },700)
        }
    }
    /*else{
        hasFlipped = false;
        secondCard = this;

        if(firstCard.dataset.name === secondCard.dataset.name){
            firstCard.removeEventListner('click',flipCard);
            secondCard.removeEventListner('click',flipCard);
        }
        else{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        }
    }*/
}

cardsList.forEach(cardsList => cardsList.addEventListener('click',flipCard));






















/*document.addEventListener('DOMContentLoaded',() => {

})
*/