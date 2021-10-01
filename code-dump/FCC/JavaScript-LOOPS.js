// WHILE LOOP:

// Incremental

var i = 5;
while(i > -1) {
  myArray.push(i);
  i--;

// Decremental

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

// FOR LOOP:

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// ITERATE NUMBERS - FOR LOOP:

// Even

var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Odd

var ourArray = [];
for (var i = 1; i < 10; i += 2) {
  ourArray.push(i);
}

// COUNT BACKWARDS - FOR LOOP:

// Even 

var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Odd

var ourArray = [];
for (var i = 9; i > 0; i -= 2) {
  ourArray.push(i);
}

// ITERATE THROUGH ARRAY - FOR LOOP:

// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// MULIPLY MULTI-DIMENSIONAL ARRAYS - FOR LOOPS:

console.log(total);


  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
