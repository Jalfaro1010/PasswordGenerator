// Character Generator Functions

// Function that accepts a string value as an argument and returns a random index number from the string argument
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}

// Function that returns a random letter using a random index in the "letters" string
function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`
    // retruning a random letter using a random index in the "letters" string
    return letters[randomIndex(letters)];
}

function getRandomUpper(){
    //
    const letter = getRandomLower();
    //
    return letter.toUpperCase();
}

// Function that returns a random number.
function getRandomNUmber(){
    const numbers = `0123456789`;

    return numbers[randomIndex(numbers)];
}

// Function that returns a random symbol
function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;

    return symbols[randomIndex(symbol)];
}