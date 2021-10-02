// Example:

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

// My solution:

function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
  return 0;
} else {
  return sum(arr, n - 1) + arr[n - 1];

// Explanation (using the above):
  
console.log(sum([2, 4, 6, 8, 10], ))

      return sum([2, 4, 6, 8, 10], 3 - 1) + arr[3 - 1];
        return sum ([2, 4, 6, 8, 10], 2)  + 6;
          return sum ([2, 4, 6, 8, 10], 2 - 1) + 6;
          return sum ([2, 4, 6, 8, 10], 1) + 4 (+ 6 );
            return sum ([ 2, 4, 6, 8, 10], 1 - 1) + 2 (+ 4 + 6)
              return sum ([2, 4, 6, 8, 10], 0) (+2 +4 +6)
                return 2 + 4 + 6 = 12
