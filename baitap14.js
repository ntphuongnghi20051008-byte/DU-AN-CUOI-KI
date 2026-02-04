const symbols = ["🍎","🍌","🍇","🍉","🍎","🍌","🍇","🍉"];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;

const board = document.getElementById("game-board");
const moveText = document.getElementById("moves");

function shuffle(array){
  return array.sort(()=>Math.random()-0.5);
}

function createBoard(){
  board.innerHTML="";
  shuffle(symbols).forEach(symbol=>{
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">?</div>
        <div class="card-back">${symbol}</div>
      </div>
    `;

    card.addEventListener("click",flipCard);
    board.appendChild(card);
  });
}

function flipCard(){
  if(lockBoard || this===firstCard) return;

  this.classList.add("flip");

  if(!firstCard){
    firstCard=this;
    return;
  }

  secondCard=this;
  moves++;
  moveText.textContent=moves;

  checkMatch();
}

function checkMatch(){
  const isMatch =
    firstCard.innerText===secondCard.innerText;

  if(isMatch){
    resetTurn();
    checkWin();
  }else{
    lockBoard=true;
    setTimeout(()=>{
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetTurn();
    },800);
  }
}

function resetTurn(){
  [firstCard,secondCard]=[null,null];
  lockBoard=false;
}

function checkWin(){
  const flipped=document.querySelectorAll(".flip");
  if(flipped.length===8){
    setTimeout(()=>{
      alert("🎉 Bạn thắng rồi!");
    },300);
  }
}

function resetGame(){
  moves=0;
  moveText.textContent="0";
  createBoard();
}

createBoard();
