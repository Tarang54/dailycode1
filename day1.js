const rand = Math.floor(Math.random()*100);
let guess = 0
let num;
do{
    num = prompt("Guess the number")
    num = Number.parseInt(num)
    console.log(num)
    if(num == rand){
        console.log("You have guessed the number\nYour score is " + (100-guess))
        break;
    }
    else if(num > rand){
        console.log("Hard Luck\nYour number is greater than the correct number")
    }
    else{
        console.log("Hard Luck\nYour number is smaller than the correct number")
    }
    guess++;
}while(guess<100);