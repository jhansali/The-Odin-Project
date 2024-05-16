const removeFromArray = function(arr, ...args) {
    const newArray = [];
    arr.forEach(element => {
       if(!args.includes(element)) {
           newArray.push(element);
       }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
