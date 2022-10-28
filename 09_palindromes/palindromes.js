const palindromes = function (str) {
    let newStr = '';
    str.toLowerCase();

    for (let i = str.length -1; i >= 0; i--) {
       newStr += str[i];
    }
    console.log(str);
    console.log(newStr);
    if (str === newStr) {
        return true;
    } else {
        return false
    }
};

console.log(palindromes("a race car"))
console.log(palindromes("Racecar!"))
console.log(palindromes("A car, a man, a maraca."))
console.log(palindromes("Animal loots foliated detail of stool lamina."))
console.log(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
