
//
const gameContainer = document.getElementById("game");

let firstReveal = null;
let revealSecond = null;
let waitingCard = false;



const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  

  if(waitingCard === true){
    return;
  }
  let clickCard = event.target;
  clickCard.style.backgroundColor = clickCard.classList[0]  
  console.log("you just clicked", event.target);

  debugger
  
  if(!firstReveal || !revealSecond){  // first card

  
      if(firstReveal || clickCard){   
        firstReveal = clickCard;
      } else{}
     
      if(firstReveal === clickCard){  //second card
           revealSecond = clickCard
      } else{
       revealSecond = null
      }

  }

  if(firstReveal && revealSecond){
      waitingCard = true;
        let card1 = firstReveal.className
        let card2 = revealSecond.className
    

    if(card1 === card2){

      firstReveal.remove.EventListener("click", handleCardClick)
      revealSecond.remove.EventListener("click", handleCardClick)
      firstReveal = null;
      revealSecond = null;
      waitingCard = false;
    } else{
      firstReveal.style.backgroundColor = "";
      revealSecond.style.backgroundColor = "";
      firstReveal = null;
      revealSecond = null;
      waitingCard = false;
    }
}
  
  // you can use event.target to see which element was clicked
  
}

// when the DOM loads
createDivsForColors(shuffledColors);
