var tempo = prompt('enter the temperature followed by a space and a symbol the symbol');
console.log (tempo);

function converter(temp){
 
if (temp.includes('c')) {

    numbers = temp.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g);
    rslt = (numbers * 9/5) + 32;
     console.log(`${numbers}°C converted to Farenheit is  ${rslt}°F`);
}

else if (temp.includes('f')){

numbers = temp.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g);
rslt = (numbers -32) * 5/9;
console.log(`${numbers}°F converted to Celcius is  ${rslt}°C`);
}


else{

console.log('please include a symbol');
}

}


converter(tempo);