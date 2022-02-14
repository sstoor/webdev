
number = prompt('guess a random number ');

function random(number){

rnum = Math.floor(Math.random() * 10);

console.log(rnum);


}

random();

for (;;){

if (number == rnum){

alert('you guessed the correct number');
    break;
}

else{

    number = prompt('That was incorrect, please guess a random number ');

}




}

