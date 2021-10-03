// We have defined a function named rangeOfNumbers with two parameters. 
//The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 
//The starting number will always be less than or equal to the ending number. 
//Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, n) {
  if (n < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, n - 1); // My original code was similar to this, without the startNum on this line - that was my clincher. 
    countArray.push(n);
    return countArray;
  }
};

console.log(rangeOfNumbers(1,5))
