//global variables
let myInput, guessButton, solveButton, myImage, secretWord, hiddenWord, pictures = [], lettersGuessed;
let secretWords = ["math",
                   "computer science" ,
                   "you can't handle the truth",
                   "with great power comes great responsibility",
                   "may the force be with you"]

//my function---------------------------------------------
function clickGuessButton(){
  //local variable that gets the letter in the inputbox.
  let theirGuess = myInput.value();
  
  if(!isLetter(theirGuess)){
    //Not a letter
    print("Please enter a letter.")
    return 0;
  }
  //add their guess to the list of letters guessed.
  
}
function isLetter(thisChar){
  thisChar = thisChar.charCodeAt(thisChar);
  if((
      (thisChar > 64) &&
      (thisChar < 91)
      ) ||
       ((thisChar > 96) &&
      (thisChar < 123))
       ){
      //we have a letter
      return true
    }else{
      //this is a non letter
      return false
    }
}
function makeBlanks(){
  for(let i = 0 ; i < secretWord.length ; i++){
    if(isLetter(secretWord.charAt(i))){
      hiddenWord += "-";
    }else{
      hiddenWord += secretWord.charAt(i);
    }
  }
}
function setSecretWord(){
  let randomNumber = Math.floor(Math.random()*5);
  secretWord = secretWords[randomNumber];
  print(secretWord)
}//end secretWord
function staticDesign(){
  rect(5,5,250,125)
  push()
  fill("red")
  rect(15,10,220,50)
  pop();
  push()
  textSize(30)
  text("Guess the word",50,25)
  text(hiddenWord,50,300)
  pop()
  text("Letters Guessed: " + lettersGuessed,20 , 250)
}
function designButtons(){
  guessButton = createButton("guess letter");
  guessButton.position(50,100)
  guessButton.mousePressed(clickGuessButton);
  
  solveButton = createButton("solve");
  solveButton.position(150,100)
}
function designInput(){
  myInput = createInput();
  myInput.position(20,200);
}

//p5js function-----------------------------------------
function setup() {
  createCanvas(400, 400);
  setSecretWord();
  
  hiddenWord = "";
  makeBlanks();
  designButtons();
  designInput();
  lettersGuessed = "";
  
}
function draw() {
  background(220);
  staticDesign();
}
