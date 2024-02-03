let number;
let message = document.querySelector(".text-danger");
let body = document.querySelector("body");


const generate_number =() => {
    let n1 = Math.random();

    let n2 = n1*20;

    n2 = Math.trunc(n2);

    n2 = (n2 % 20) + 1;
    number = n2;

    console.log(number)
};

const chance= document.querySelector('.score').innerHTML;

let score= parseInt(chance)

let attempts = document.querySelector('.attempts-left').innerHTML;;

//generate_number();
const generate_number_btn_click =()=> {
    document.querySelector("#section-1").style.display = "none";
    document.querySelector("#section-2").style.display = "none";
    document.querySelector("#section-3").style.display = "block";
    document.querySelector("#section-4").style.display = "none";
    document.querySelector("#section-5").style.display = "none";
    document.querySelector(".right").style.display = "none";

    setTimeout(()=> {
        generate_number();
        document.querySelector("#field").value = "";
        document.querySelector("#section-1").style.display = "none";
        document.querySelector("#section-2").style.display = "block";
        document.querySelector("#section-3").style.display = "none";
        document.querySelector("#section-4").style.display = "none";
        document.querySelector("#section-5").style.display = "none";
        document.querySelector(".right").style.display = "none";
        
    }, 2500);
};

//check number
const check_number =()=> {

    let value = document.querySelector("#field").value;
    if (attempts >= 0) {
        document.querySelector('.attempts-left').innerHTML = attempts--;
    }
    else {
        message.textContent = "OOPS! Wrong guess! The number was: " .concat(number);
    }
    

    if (value == 0) {
        message.textContent = "0 or no number is entered!";
    }

    if (value == number && score>0) {
        
        message.textContent = "Congratulations! You won the game!";

        document.querySelector(".right").style.display = "block";

        document.querySelector('.highscore').innerHTML=score;
        
        // bg color changes to green 
        body.style.backgroundColor = "#52BE80";
        
        document.querySelector("#section-4").style.display = "block";
    }

    else if (value > number && score>0) {
        // document.querySelector('.message').textContent="Too high";
        message.textContent = "You guessed too high!";
        document.querySelector(".right").style.display = "block";
        score=score-1;
        // console.log(score)

        document.querySelector('.score').innerHTML = score;
        // document.querySelector('.attempts-left').innerHTML = attempts--;
    }

    else if (value < number && score>0) {
        message.textContent = "You guessed too low!";
        document.querySelector(".right").style.display = "block";

        // message.textContent = "OOPS! Wrong guess! The number was: " .concat(number);
        // bg color changes to red
        // body.style.backgroundColor = "#EC7063";
    }

    else {
        message.textContent = "OOPS! Wrong guess! The number was: " .concat(number);
        // bg color changes to red
        body.style.backgroundColor = "#EC7063";
    }

    document.querySelector("#section-5").style.display = "block";
}

document.querySelector(".play-btn").addEventListener("click", function(){
    
    generate_number_btn_click();
    message.textContent = "Guess a number between 1 and 20";
    body.style.backgroundColor = "rgb(204, 183, 204)";
})
