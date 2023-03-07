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
