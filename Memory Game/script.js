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
        card.className = 'card';
        document.getElementById('grid').appendChild(card)
        let btn = document.createElement("img");
        btn.src = cardArray[index].img;
        document.getElementsByClassName('card')[i].appendChild(btn);
        index++;
        if(index>9){index=0};
    }
}
//myFunction();

let flp = document.getElementsByClassName('flip-card')[0];

let cng = document.getElementsByClassName('line-1')[0];


flp.onclick=function(){
    flp.classList.add('rot');
}



cng.onclick=function(){
    cng.style.backgroundColor='red'
}








/*document.addEventListener('DOMContentLoaded',() => {

})
*/