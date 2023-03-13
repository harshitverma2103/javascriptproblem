//  problem 1 

const findOddNum = (Array) => {
  let oddNumbers = [];
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] % 2 == 1) {
      oddNumbers.push(Array[i])
    }
  }
  return oddNumbers
}

console.log(findOddNum([1, 2, 3, 4]));
console.log(findOddNum([11, 24, 37, 43, 98, 31]));
console.log(findOddNum([41, 52, 83, 74, 88]));

// problem 2 

const findEvenNum = (Array) => {
  let oddNumbers = [];
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] % 2 == 0) {
      oddNumbers.push(Array[i])
    }
  }
  return oddNumbers
}

console.log(findEvenNum([1, 2, 3, 4]));
console.log(findEvenNum([11, 24, 37, 43, 98, 31]));
console.log(findEvenNum([41, 52, 83, 74, 88]));
