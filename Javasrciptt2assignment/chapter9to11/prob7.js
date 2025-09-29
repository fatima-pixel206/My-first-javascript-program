let secret=2*5-6;
let guess=+prompt(" enter your guess number 1-10");
if(guess==secret){
    console.log(" BINGO! correct answer .")
}
else if(guess+1==secret){
    console.log(" close enough to the correct answer ");

}
else {
    console.log(" try again");
}