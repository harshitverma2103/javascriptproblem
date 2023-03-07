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


// problem 4 

const countUpperChar = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            result++
        }
    }
    return result;
}

console.log(countUpperChar("TriSeCt100"));
console.log(countUpperChar("allsmall"));
console.log(countUpperChar("ALLCAPS"));


// problem 5

const countLowerChar = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            result++
        }
    }
    return result;
}

console.log(countLowerChar("ratCatmAt"));
console.log(countLowerChar("allsmall"));
console.log(countLowerChar("triSEct"));


// problem 6 

const count_xy = (str) => {
    let count_x = 0;
    let count_y = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x') {
            count_x++;
        } else if (str[i] == 'y') {
            count_y++;
        }
    }
    console.log("count of x -", count_x);
    console.log("count of y -", count_y)
}

count_xy("execrise");
count_xy("myday");


// problem 7 

const upperlower_Char = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            console.log(str[i], ": small");
        }
        else if (str[i] >= 'A' && str[i] <= 'Z') {
            console.log(str[i], ": capital");
        }
    }
}

upperlower_Char("car");
upperlower_Char("TriSeCt");


// problem 8

const count_DigitsAndChar = (str) => {
    let countOfChar = 0;
    let countOfDigits = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            countOfChar++;
        } else if (str[i] >= 'A' && str[i] <= 'Z') {
            countOfChar++;
        } else {
            countOfDigits++;
        }
    }
    console.log("Alphabets-", countOfChar);
    console.log("Digits -", countOfDigits);
}


count_DigitsAndChar("MostWanted50");
count_DigitsAndChar("JAVA360");
count_DigitsAndChar("100");
count_DigitsAndChar("HeLLo");


// Problem 9 

const print_Pattern = (str) => {
    let pattern = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
            pattern += "#";
            console.log(pattern);
        }
        else {
            pattern += str[i];
            console.log(pattern);
        }
    }
}

print_Pattern("car");
print_Pattern("trisect");


// problem 10 

const reverse = (str) => {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

console.log(reverse("happy"));
console.log(reverse("Bikes"));


// problem 11 

const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('deed'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('ram'));


// problem 12

const checkVowels = (str) => {
    let countOfVowels = 0;
    const vowels = ['a', 'e', 'i ', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let i = 0; i <= str.length; i++) {
        if (vowels.includes(str[i])) {
            countOfVowels++
        }
    }
    return countOfVowels;
}

console.log(checkVowels("Education"));
console.log(checkVowels("Automobile"));


// problem 13 

const remove_hash = (str) => {
    let modifideString = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != '#') {
            modifideString += str[i];
        }
    } return modifideString;
}

console.log("New string -", remove_hash("#global#"));
console.log("New string -", remove_hash("#C#O#D#E#"));


// problem 14

const changeCharInNumber = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '1') {
            result += 'ab';
        } else if (str[i] == '9') {
            result += 'c';
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(changeCharInNumber("abc"));
console.log(changeCharInNumber("479"));
console.log(changeCharInNumber("179"));


// problem 15

const occurrence_char = (str) => {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'd') {
            newString += 'dd';
        } else if (str[i] == 'A') {
            newString += 'AA';
        } else if (str[i] == 'a') {
            newString += 'aa';
        } else {
            newString += str[i];
        }
    }
    return newString;
}

console.log(occurrence_char("code"));
console.log(occurrence_char("dad"));
console.log(occurrence_char("Asana"));
console.log(occurrence_char("tax"));


// problem 16

const removeLowerChar = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] >= 'a' && str[i] <= 'z')) {
            result += str[i];
        }
    }
    return result;
}

console.log(removeLowerChar("Table-Tennis"));
console.log(removeLowerChar("Raj-Sinha"));
console.log(removeLowerChar("Top#100"));


// problem 17 

const remove_ExtrasChar = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != '$') {
            result += str[i];
        }
    }
    return result;
}

console.log(remove_ExtrasChar("$hello"));
console.log(remove_ExtrasChar("$Dollar$"));
console.log(remove_ExtrasChar("####$$"));
