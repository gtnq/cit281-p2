/*
    CIT 281 Project 2
    Name: Tony Yu
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//calling getRandomInteger to determine the letter for the word
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(1,alphabet.length-1)]
}

//produce a random length string using random letter
function getRandomString(minLength, maxLength) {
    let result = "";

    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
    return result;
}

//split the string->sort the string->join the string
function getSortedString(string) {
    return string.split('').sort().join('');
}

//let i = "abbbca".split('');
//console.log(i.sort().join(''))
let key = getRandomString(10,20);
console.log(key);
console.log(getSortedString(key));