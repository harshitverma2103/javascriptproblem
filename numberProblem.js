// problem1

function checkFailOrPass(marks){
    if(marks >= 40){
        return "pass";
    } else {
        return "fail";
    }
}

var marks1 = console.log(checkFailOrPass(45)); // Output: pass
var marks2 = console.log(checkFailOrPass(30)); // Output: fail

// problem2

function checkVotingEligibility(age) {
    if(age >= 18){
        return "Eligible"
    } else {
        return "Not Eligible"
    }
}

var age1 = console.log(checkVotingEligibility(90))


// problem3

function ageToDays(age) {
    return age * 365;
}

const years = console.log(ageToDays(2))

// problem4

function degreesToRadians(degrees) {
    return Math.PI/180 * degrees;
}

var degrees1 = console.log(degreesToRadians(270));

// problem5

function checkSumLessThanThird(num1, num2, num3) {
    if(num1 + num2 < num3) {
        return true;
    } else {
        return false;
    }
}

var numbers = console.log(checkSumLessThanThird(5, 5, 15));


// problem6

function calculateBMI(weight, height) {
    return weight/ (height * height)
}

var calculateBMI1 = console.log(calculateBMI(75, 1.8));
