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


