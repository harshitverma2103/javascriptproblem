//problem 1

const find_Digits = (str) => {
    let digits = "";
    for (let i = 0; i <= str.length; i++) {
        if(str[i] >= '0' && str[i] <= '9') {
            digits += str[i];
        }
    }
    return digits;
}

console.log(find_Digits("hello123"));
console.log(find_Digits("12harsh08"));
