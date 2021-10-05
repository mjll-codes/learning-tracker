// Use template literal syntax with backticks to create an array of list element (li) strings. 
// Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. 
// The makeList function should return the array of list item strings.

// Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//  '<li class="text-warning">no-var</li>',
//  '<li class="text-warning">var-on-top</li>',
//  '<li class="text-warning">linebreak</li>'
//  ]


// My solution

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [`<li class="text-warning">${result.failure[0]}</li>,!
  <li class="text-warning">${result.failure[1]}</li>,!
  <li class="text-warning">${result.failure[2]}</li>`];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// Actual solution:

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];

  for (let i = 0; i < arr.length; i += 1) {  // I did opt for the 'for' loops when I was attempting this myself, however I didn't execute propertly, nor did i think of using .push.
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`); // I wonder when you get to the point when you know what to do to get a result. 
  }

  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
