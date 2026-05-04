//global variables
let myInput, guessButton, solveButton, myImage, secretWord, hiddenWord, pictures = [];
let secretWords = ["math",
                   "computer science" ,
                   "you can't handle the truth",
                   "with great power comes great responsibility",
                   "may the force be with you"]

//my function---------------------------------------------
function isLetter(thisChar){
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
}
function designButtons(){
  guessButton = createButton("guess letter");
  guessButton.position(50,100)
  
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
  
}
function draw() {
  background(220);
  staticDesign();
}
