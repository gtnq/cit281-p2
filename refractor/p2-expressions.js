/*
    CIT 281 Project 2
    Name: Tony Yu
*/

// Returns a random number between min (inclusive) and max (exclusive)
const number = function(min,max) 
{
    return Math.floor(Math.random() * (max - min) + min);
};


//calling getRandomInteger to determine the letter for the word
const letter = function() 
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[number(1,alphabet.length-1)];
};

//produce a random length string using random letter
const word = function (minLength, maxLength) {
    let result = "";

    for (let i = 0; i < number(minLength, maxLength); i++) {
        result += letter();
    }
    return result;
};

//split the string->sort the string->join the string
const sorted = function (string) {
    return string.split('').sort().join('');
};

//let i = "abbbca".split('');
//console.log(i.sort().join(''))
let key = word(10,20);
console.log(key);
console.log(sorted(key));