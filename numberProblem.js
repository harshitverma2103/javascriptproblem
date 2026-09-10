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
