// 1. toString method

let array = [1, 3, 6];
let changeToString = array.toString();
console.log(changeToString);


// 2 . join 

let arr = [12, 15, 13, 87];
let newArr = arr.join("-");
console.log(newArr);


// 3 . Pop

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());


// 4. shift()

const number = [1, 3, 5, 7, 8];
console.log(number.shift());


// 5 . concat

let arr_1 = [1, 2, 3, 4, 5];
let arr_2 = [6, 7, 8, 9, 10];
console.log(arr_1.concat(arr_2));


// 6 . fill() 

let num = [12, 24, 45, 76, 78];
console.log(num.fill(90));
