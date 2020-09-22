let letters = ["a", "b", "c", "d", "e", "f"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let possibiltysLetters = [];
let possibiltysNumbers = []
let passwords = [];


//Coloca todas as possibildades dos numero em um array
function numbersDigits(numbers, possibiltysNumbers) {
    for (let firstDigit = 3; firstDigit <= 6; firstDigit += 3) {
        for (let secondDigit = 1; secondDigit <= numbers.length; secondDigit++) {
            for (let thirdDigit = 1; thirdDigit <= numbers.length; thirdDigit++) {
                const n = {
                    a: firstDigit,
                    b: secondDigit,
                    c: thirdDigit,
                }
                possibiltysNumbers.push(n);
            }
        }
    }
};

numbersDigits(numbers, possibiltysNumbers);

//Verifica quais desses numero tem a soma dos algarismos = 8;
const sumEqualEigth = possibiltysNumbers.filter(function (number) {
    if (number.a + number.b + number.c === 8) {
        return true;
    } else {
        return false;
    }
}).map(function (number) {
    return `${number.a}${number.b}${number.c}`
});


//Coloca todas as possbilidades das letras em um array
function lettersDigits(letters, possibiltysLetters) {
    for (let firstLetter = 0; firstLetter < letters.length; firstLetter++) {
        for (let secondLetter = 0; secondLetter < letters.length; secondLetter++) {
            for (let thirdLetter = 0; thirdLetter < letters.length; thirdLetter++) {
                const l = `${letters[firstLetter]}${letters[secondLetter]}${letters[thirdLetter]}`
                //console.log(l);
                possibiltysLetters.push(l);
            }
        }
    }
};


lettersDigits(letters, possibiltysLetters);

//Filtra todas as possibildades que possuem a letra A e D
const filterLetter = possibiltysLetters.filter(function (letter) {
    const a = letter.indexOf('a');
    const d = letter.indexOf('d');

    if ((a === 0 || a === 1 || a === 2) && (d === 0 || d === 1 || d === 2)) {
        return letter;
    }

});

//Concatena as possibilidades de letras e números
function createPasswords(filterLetter, sumEqualEigth) {
    for (let i = 0; i < filterLetter.length; i++) {
        for (let j = 0; j < sumEqualEigth.length; j++) {
            passwords.push(`${filterLetter[i]}${sumEqualEigth[j]}`);
        } 
    }
    return passwords;
}

createPasswords(filterLetter, sumEqualEigth);

function discoverTime(passwords){
    return time = (((passwords.length * 2)-1)/60).toFixed(2);
}

discoverTime(passwords);

const result = `O tempo que Lara levará para testar todas as senhas é de ${time} minutos, ou seja, ela conseguirá abrir o cofre sem que descubram.
E as possibilidades de senha são: ${passwords.toString()}`;

console.log(result);