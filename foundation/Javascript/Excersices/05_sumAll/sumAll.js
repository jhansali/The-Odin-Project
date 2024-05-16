const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    let total=0;
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
