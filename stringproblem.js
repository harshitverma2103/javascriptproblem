//problem 1

const find_Digits = (str) => {
    let digits = "";
    for (let i = 0; i <= str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            digits += str[i];
        }
    }
    return digits;
}

console.log(find_Digits("hello123"));
console.log(find_Digits("12harsh08"));

//problem 2

const repeatable_Char = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[0] == str[i]) {
            result++
        }
    }
    return result;
}

console.log(repeatable_Char("testable"));
console.log(repeatable_Char("octopus"));
console.log(repeatable_Char("repeat"));


// problem 3

const count_Z = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'z') {
            count++;
        }
    }
    return count;
}

console.log(count_Z("zzz"));
console.log(count_Z("zack"));
console.log(count_Z("hello"));
