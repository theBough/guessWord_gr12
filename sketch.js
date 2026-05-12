//global variables
let myInput, guessButton, solveButton, myImage, secretWord, hiddenWord, pictures = [], lettersGuessed,wrong;
let secretWords = ["math",
                   "computer science" ,
                   "you can't handle the truth",
                   "with great power comes great responsibility",
                   "may the force be with you"]

//my function---------------------------------------------
function loadPictures(){
  for(let  i =1 ; i<11 ; i++){
    pictures.push(loadImage("pictures/pic" + i + ".png"));
  }//end loop
}
function clickGuessButton(){
  //local variable that gets the letter in the inputbox.
  let theirGuess = myInput.value();
  if(theirGuess.length >1){
    //they have guessed more than one letter.
    myInput.value("enter one letter at a time.")
    return 0;
  }
  if(!isLetter(theirGuess)){
    //Not a letter
    myInput.value("Sorry please enter a letter")
    return 0;
  }
  theirGuess = theirGuess.toLowerCase();
  secretWord = secretWord.toLowerCase();
  //add their guess to the list of letters guessed.
  lettersGuessed += theirGuess +", ";
  if(secretWord.indexOf(theirGuess) > -1){
    //This guessed correctly.
    let position = secretWord.indexOf(theirGuess);
    //changing the string into an array of characters.
    let editHiddenWord = hiddenWord.split("")
    editHiddenWord[position] = theirGuess;
    hiddenWord = editHiddenWord.join("")
    
  }else{
    wrong += 1;
  }
  
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
  text("Letters Guessed: " + lettersGuessed,20 , 250);
  image(pictures[wrong],200,200,200,15)
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
  wrong = 0;
  setSecretWord();
  loadPictures();
  hiddenWord = "";
  
  makeBlanks();
  designButtons();
  designInput();
  lettersGuessed = "";
  myInput.value("hi")
  
}
function draw() {
  background(220);
  staticDesign();
}
