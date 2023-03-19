//  problem 1

const findOddNum = (Array) => {
    let oddNumbers = [];
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] % 2 == 1) {
            oddNumbers.push(Array[i]);
        }
    }
    return oddNumbers;
};

console.log(findOddNum([1, 2, 3, 4]));
console.log(findOddNum([11, 24, 37, 43, 98, 31]));
console.log(findOddNum([41, 52, 83, 74, 88]));

// problem 2

const findEvenNum = (Array) => {
    let evenNumbers = [];
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] % 2 == 0) {
            evenNumbers.push(Array[i]);
        }
    }
    return evenNumbers;
};

console.log(findEvenNum([1, 2, 3, 4]));
console.log(findEvenNum([11, 24, 37, 43, 98, 31]));
console.log(findEvenNum([41, 52, 83, 74, 88]));

// problem 3

const find_sum = (Array) => {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i];
    }
    return sum;
}

console.log(find_sum([1, 2, 3, 4, 5]));
console.log(find_sum([11, 22, 33, 44, 55]));
console.log(find_sum([1, 2, 3]));

// problem 4

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let arr = [1, 2, 3, 4, 5];
let reversedArr = reverseArray(arr);
console.log(reversedArr);

// problem 5

const greater_Num = (Array) => {
    let greaterNumber = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] > greaterNumber) {
            greaterNumber = Array[i];
        }
    }
    return greaterNumber;

}

console.log(greater_Num([1, 2, 4, 55, 5, 9]));
console.log(greater_Num([12, 15, 89, 90]));
console.log(greater_Num([12, 15, 087, 45]));


// ptoblem 6 

const fibonacciSeries = (num) => {
    let result = [0, 1]
    for (let i = 2; i < num; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result;
}

console.log(fibonacciSeries(8));
console.log(fibonacciSeries(10));


// problem 7 

const loweset_Num = (Array) => {
    let lowestNumber = Array[0];
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] < lowestNumber) {
            lowestNumber = Array[i];
        }
    }
    return lowestNumber;

}

console.log(loweset_Num([1, 2, 4, 55, 5, 9]));
console.log(loweset_Num([15, 89, 90]));
console.log(loweset_Num([12, 15, 087, 45]));


// problem 8 

const averageOfList = (Array) => {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i] / Array.length;
    }
    return sum;
}

console.log(averageOfList([1, 2, 4, 5]));
console.log(averageOfList([1, 1, 4]));
console.log(averageOfList([1, 9, 4, 2]));


// problem 9 

const count_odd = (Array) => {
    let count = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] % 2 == 1) {
            count++;
        }
    }
    return count
}

console.log(count_odd([1, 2, 3, 4, 5]));
console.log(count_odd([11, 32, 04, 25, 15]));


// problem 10 

const count_even = (Array) => {
    let count = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] % 2 == 0) {
            count++;
        }
    }
    return count
}

console.log(count_even([1, 2, 3, 4, 5]));
console.log(count_even([11, 32, 04, 25, 10]));


// problem 12

function isAscending(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

let array = [1, 2, 3, 4, 5];
console.log(isAscending(array));

array = [1, 3, 2, 4, 5];
console.log(isAscending(array));

// problem 13

function isDescending(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            return false;
        }
    }
    return true;
}


let Array = [10, 8, 5, 4, 1];
let Array_2 = [1, 5, 2, 8, 7];

console.log(isDescending(Array));
console.log(isDescending(Array_2));


// problem 14 

const find_Index = (Array) => {
    // let result = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] == 3) {
            return i;
        }
    }
}

console.log(find_Index([1, 2, 3, 4, 5]));
console.log(find_Index([1, 2, 0, 4, 5, 3]));
