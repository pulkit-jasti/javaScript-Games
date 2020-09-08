let hands = [
	{
		hand: 'rock',
		address: 'images/rock.png',
	},
	{
		hand: 'paper',
		address: 'images/paper.png',
	},
	{
		hand: 'scissor',
		address: 'images/scissors.png',
	},
];

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

let player = document.getElementById('player-hand');
let computer = document.getElementById('computer-hand');

enableClicks();

function playGame() {
	if (this.innerHTML === 'Rock') {
		player.src = hands[0].address;
	} else if (this.innerHTML === 'Paper') {
		player.src = hands[1].address;
	} else if (this.innerHTML === 'Scissor') {
		player.src = hands[2].address;
	}
	disableClicks();

	let computerChoice = Math.floor(Math.random() * 3);
	computer.src = hands[computerChoice].address;

	setTimeout(() => {
		player.src = hands[0].address;
		computer.src = hands[0].address;
		enableClicks();
	}, 4000);
}

function disableClicks() {
	rock.removeEventListener('click', playGame);
	paper.removeEventListener('click', playGame);
	scissor.removeEventListener('click', playGame);
}

function enableClicks() {
	rock.addEventListener('click', playGame);
	paper.addEventListener('click', playGame);
	scissor.addEventListener('click', playGame);
}
