# October 2021 <a name="top"></a>
<div style="text-align: right"><a href="#TODAY"> Jump to today</a></div>

## Objectives and Key Results 

### Objective
- [ ] Continue FreeCodeCamp (FCC) (JavaScript Algorithms and Data Structures)
- [ ] Update log as I learn
- [ ] Stay commited until the end of the month
- [ ] Do additional research into web dev

### Key Results
- [ ] Finish [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/).
- [ ] Look at Udemy course [Automate the Boring Stuff with Python Programming by Al Sweigart](https://www.udemy.com/course/automate/) again.
- [ ] Stay consistent - 1hr everday minimum - from 1st October to 31 October, logged below.
- [ ] Start [Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/).

## Coursework Milestones

### Assignments:
<!-- - FCC - Completed course sections:
  - Basic HTML & HTML 5
  - Basic CSS
  - Applied Visual Design - See code dump [here](https://github.com/mjll-codes/learning-tracker/tree/main/code-dump/applied-visual-design)
  - Applied Accessibility - See code dump [here](https://github.com/mjll-codes/learning-tracker/tree/main/code-dump/applied-accessibility)
  - Responsive Web Design Principles - See code dump [here](https://github.com/mjll-codes/learning-tracker/tree/main/code-dump/responsive-web-design-principles)
  - CSS Flexbox - See code dump [here](https://github.com/mjll-codes/learning-tracker/tree/main/code-dump/css-flex-box)
  - CSS Grid - See code dump [here](https://github.com/mjll-codes/learning-tracker/tree/main/code-dump/css-grid) -->

### Projects:
<!--- - HTML/CSS:
  - Tribute Page- [view on CodePen here](https://codepen.io/mjll-codes/pen/bGRjZyJ)
  - Survey Page - [view on CodePen here](https://codepen.io/mjll-codes/pen/XWgPYyo)
  - Product Landing Page - [view on CodePen here](https://codepen.io/mjll-codes/pen/xxraJWV)
  - Technical Documentation Page - [view on CodePen here](https://codepen.io/mjll-codes/pen/jOweGPr) (CSS styling borrowed from sample, more upskilling required)
  - Personal Portfolio Page - [view on CodePen here](https://codepen.io/mjll-codes/pen/dyRgxGW) -->

### Certifications:
<!--- - FCC: Responsive Web Design - [see certification here](https://www.freecodecamp.org/certification/mjll/responsive-web-design) -->
  
## Daily Logs
  

### Friday, October 1, 2021
- Continued JavaScript Algorithms and Data Structures
    - 89% into Basic Javascript
- I'm feeling a little lost around what to call things, like, what reference do you use for sub markers like 'case', 'break', etc. Or is this something I will pick up slowly?
- Is there not an easier way to get this result, I know this is an example, but I'd like to see an example where using this style of code would be the best option:

    <pre><code>  var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
    };
    var myDog = "Hunter";
    var myBreed = dogs[myDog];
    Console.log(myBreed); </pre></code>

- When completing another assignment, I don't understand the difference between my code and their solution code, when bracket and dot notations are supposed to be interchangeable. See [my code v solution code here](https://github.com/mjll-codes/learning-tracker/tree/main/learning-outcomes/records.js).
- Mistake tracker:
    
    Subject | Mistake
    --- | ---
    Object| Typos, used the assigned value instead of the property name to access the property using dot notation. When
    Object| Lookup: When used for look up, i didn't know to enter "result = lookup[val];" at the end - I misinterpreted these instructions "Use it to look up val and assign the associated string to the result variable."
    Object| Checking for properties: When creating an object that checks for properties, I found that the example they provided didn't translate well into the answer they wanted and that caused various errors. I googled a little then watched the explanation video, where it finally made sense. 
    Object| Arrays within objects: minor errors only, forgetting commas, etc
    Loops| While loops: minor typos
    Loops| For loops: forgot 'for' curly braces; used commas instead of semicolons to separate the expressions inside the 'for' loop; minor typos;
    Loops| For loops through an array: Another one where they asked us to write a type of code they've not shown us before. Errors for me were using () instead of [] in the below.
    Loops| Multiply multi-dimensional arrays: This one I did well, only made the error of using the 'multipleAll' name instead of the assigned 'arr' - very frustrating to find that as the error, but happy that i did so much of the rest right.
     
 For loops through an array code:
 
    var myArr = [ 2, 3, 4, 5, 6];
    var total = 0; // I didn't do this either, I used total instead of 'i' in the next line.
    for (var i = 0; i < myArr.length; i++) { // I did all these the same, just with total.
    total += myArr[i]; // Didn't know how to close with this, as we hadn't been shown that yet.
    }
    console.log(total); // I still don't know what console.log is all about, but they use it often.
  
  - Notes from [LOOP section](https://github.com/mjll-codes/learning-tracker/tree/main/code-dump/FCC/JavaScript-LOOPS.js)
 
 TODAYS HOURS:   3 hours  42 mins 

### Saturday, October 2, 2021
- Did some additional learning outside of FCC today, I YouTubed something's I was still unsure about:
  - console.log is similar to print in py in that it outputs text to console, but apparently it also allows you to inspect an object?
  - Fixing Card Counting error in understanding: 
    -  Watched [Counting Cards, freeCodeCamp Basic Javascript](https://www.youtube.com/watch?v=zgs06k00YIE) to further understand what I missed when I created my own version. The video creater said you could use both switch and ifelse, which makes me think mine could have worked as well. He also had a ternary operator at the end, which was interesting and seemingly easier. 
    - After further looking at the code, I deduced that it was likely the commas between the conditions causing the error. I googled how if statement's take on multiple conditions in a single expression, then I remembered the OR operator, I was hoping I wouldn't have to use 'card' for every new condition, turns out I did, new code below that passed the test:
    <pre><code>var count = 0;
    function cc(card) {
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
      count = count + 1;
    }
    else if (card == 7 || card == 8 || card == 9) {
      count = count + 0; 
    }
    else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
      count = count - 1;
    }
    return count + (count > 0 ? " Bet" : " Hold");
    }
    cc(2); cc(3); cc(7); cc('K'); cc('A'); </pre></code>
  - Fixing Record Collection error in understanding:
    - Watched [freeCodeCamp Record Collection Challenge JavaScript](https://www.youtube.com/watch?v=oBn68Ytmml0) to see if I had an error of interpretation. Observed errors in my code like the use of 'return' (unsure why I shouldn't have used it here), as well as, my use of dot notation in the '.hasOwnProperty' function. The code cleared the test when I removed these. See code below:
       <pre><code>function updateRecords(records, id, prop, value) {
        if (prop !== "tracks" && value !== "") {
          records[id][prop] = value;
      }
      else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
          records[id][prop] = [value];
      }
      else if (prop === "tracks" && value !== "") {
          records[id][prop].push(value);
      }
      else if (value === "") {
        delete records[id][prop];
      }
      return records;
      }
      updateRecords(recordCollection, 5439, 'artist', 'ABBA');  </pre></code>
  - Did further research on loop recursion: good for when you don't know how many of something there are. Watched [Best Javascript Recursion Explanation on YouTube](https://www.youtube.com/watch?v=LteNqj4DFD8) on YouTube, who explained it well. I understoof how it worked on his example, but not how it works with mine - will go over with TL.
- Continued JavaScript Algorithms and Data Structures
    - 95% into Basic Javascript

- Mistake tracker:
Subject | Mistake
    --- | ---
   Loops| Using recursion: So this one was interesting, I figured it out on my own, but don't feel entirely confidet about how. The example was a multiply, and ours was a sum; I knew to change the last line of code to a plus, then I had to alter the return function to 0 instead of the 1 from the example. That just felt right, but I can't explain why. [See example code, and solution code here](https://github.com/mjll-codes/learning-tracker/tree/main/learning-outcomes/LoopRecursion.js)
   Profile Lookup| I had a go at this on my own but found myself lost and unsure of the right approach. It's not coming very organically to me atm, reading their instructions and creating code to mimic it. Though when it's explained in a video I get it, I just struggle to know what's the right approach. I watched [Profile Lookup - Free Code Camp](https://www.youtube.com/watch?v=CY57uiOsi-0) which was helpful because I was able to watch his thought process as he solved it. [Solution here](https://github.com/mjll-codes/learning-tracker/tree/main/learning-outcomes/Profile-Lookup.js).
   
- Lessons with Tyson: 
  - When looking through an array of objects, use a FOR loop as it allows you to use the 'i' to run through the index (i++). 

 TODAYS HOURS: 5 hours  33 mins 


### Sunday, October 3, 2021
- Continued JavaScript Algorithms and Data Structures
    - Finished Basic Javascript
    - Started ES6
      - 19% into ES6   

- Mistake tracker:
Subject | Mistake
    --- | ---
   Recursion | Use Recursion to Create a Countdown: Got the code almost perfect, just had to adjust from a .push() statement to a .unshift() statement to ensure the numbers descended instead of ascended. 
   Recursion | Use Recursion to Create a Range of Numbers: I figured this one out on my own, and I'm very proud. After about 10 minutes of trial and error and constantly attempting to understand the code and my mistakes, I landed on the fix and completed it on my own. [See instructions and final code here](https://github.com/mjll-codes/learning-tracker/tree/main/learning-outcomes/RecursionRange.js)


 TODAYS HOURS: 1 hour  7 mins 
 
 
 ### Monday, October 4, 2021
- Continued JavaScript Algorithms and Data Structures
    - 52% into ES6   
- Watched [Programming Loops vs Recursion - Computerphile](https://www.youtube.com/watch?v=HXNhEYqFo0o) which was interesting.
- Watched [The Most Difficult Program to Compute? - Computerphile](https://www.youtube.com/watch?v=i7sm9dzFtEI&t=0s) which was also interesting. Loved how passionate he was about the undefinable arguments.

- Mistake tracker:
Subject | Mistake
    --- | ---
   Default Parameters | Set Default Parameters for Your Functions: had to fiddle around with the code for under 5 mins to eventually find the right combination of syntax. Got there in the end though. 
   Destructuring Assignment | Use Destructuring Assignment to Assign Variables from Arrays: I could not figure out for the life of me, what the right response to this exercise was. The example they provided did not serve as a guide at all. After some googling I found [Destructuring assignment on Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) which quickly lead me to the solution needed. Frustrating nonetheless. 
   Destructuring Assignment | Use Destructuring Assignment to Pass an Object as a Function's Parameters: Another example of their sample code being seemingly irrevelevant to the answers they're seeking. Watched [ES6 - Use Destructuring Assignment to Pass an Object as a Function's Parameters - Free Code Camp](https://www.youtube.com/watch?v=rM6UybMtViw) for a solution. 


 TODAYS HOURS: 1 hour  41 mins 
 
  ### Tuesday, October 5, 2021
- Continued JavaScript Algorithms and Data Structures
    - 65% into ES6   
      - Researched <i> Template Literals </i> in ES6 to complete said section, [using Mozilla explanation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

- Mistake tracker:
Subject | Mistake
    --- | ---
   Template Literals | [Create Strings using Template Literals](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-strings-using-template-literals): I found this exercise hard. I felt like I was drowning when it asked me to choose my own iteration (though it turned out my instinct to use a for loop was accurate). When reading the instructions I just felt like I had no idea how to make what they were asking for happen - [see my inital code, and the solution code here](https://github.com/mjll-codes/learning-tracker/tree/main/learning-outcomes/template-literals.js). This code doesn't include my attempts with for loops, so you'll have to take my word for that. I ended up getting the final result from YouTube video, [ES6 - Create Strings using Template Literals - Free Code Camp](https://www.youtube.com/watch?v=zDDXzS6oWDk) - mind you, his solution was much simpler than I thought it was going to be and left me feeling a little sad that I didn't think of it. Also frustrated that I wouldn't have thought at all to use a .push() statement here. 


 TODAYS HOURS: 1 hour  17 mins 

  ### Wednesday, October 6, 2021 
- Continued JavaScript Algorithms and Data Structures
    - Finished ES6   
    - Started Regular Expressions
      - 27% into Regular Expressions

- Mistake tracker:
Subject | Mistake
    --- | ---
   Getter & Setter | [Use getters and setters to Control Access to an Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object): What I found frustrating about this exercise was me not knowning whether or not the examples are strict samples of what my code should look like, or if I'm expected to throw in other things I've learnt - this seems to vary from lesson to lesson. This was another one where I had to get help, found out my approach was similar but also not close at all. I'm not confident on how to code with math yet. 
   RegEx | [Using the Test Method](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method): Minor errors. I didn't know to use 'let' before a result to get the answer they wanted. See code below:
   <pre><code>My Solution:
    let myString = "Hello, World!";
    let myRegex = /Hello/;
    myRegex.test(myString); // Change this line

  Their solution:
    let myString = "Hello, World!";
    let myRegex = /Hello/;
    let result = myRegex.test(myString); // Change this line</code></pre>
   
- Thoughts:
  - Feeling like the constant frustration of not succeeding is wearing me down a little. I need a certain amount of wins to sustain motivation and this section of this course is frustrating. I think what's most confusing it when they don't stipulate what they need, they throw things in that aren't needed to solve their puzzle, and the layout of their example doesn't match the layout they're after. It would be nice if the course focused on developing the necessary intuition needed to complete their puzzles.
  - In an odd conincidence, I flew through the last 35% of ES6. Those wins felt good.  


 TODAYS HOURS: 2 hour 46 mins 
 
   ### Thursday, October 7, 2021 
- Continued JavaScript Algorithms and Data Structures  
    - Continued Regular Expressions
      - 67% into Regular Expressions

- Mistake tracker:
Subject | Mistake
    --- | ---
   RegEx | [Match Characters that Occur One or More Times](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-one-or-more-times): More interesting than an error, I noted that when we introducted the + character, it removed the square bracket requirements needed in ranges. Interesting.
   RegEx | [Match Characters that Occur Zero or More Times](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-zero-or-more-times): This one was interesting, had to remove the global (g) and ignoreCase (i) flags (which I did after one error message). Though not entirely sure why. 

 TODAYS HOURS: 1 hour 51 mins 
 
 
   ### Friday, October 8, 2021 
- Continued JavaScript Algorithms and Data Structures  
    - Continued Regular Expressions
      - 94% into Regular Expressions

- Mistake tracker:
Subject | Mistake
    --- | ---
   RegEx | [Specify Upper and Lower Number of Matches](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches): Took me about 5-10 mins of trial and error to get this one right. I kept doing variations of /h{3,6}/, then i reread the question very literally and did /(Oh{3,6 no}/ and it worked. Felt good to problem solve that one on my own without additional help. 
   RegEx | [Positive and Negative Lookahead](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead): Another one that I figured out in 5-10 minutes, my inital solution was as below. The addition of \D* = zero or more of non-number characters, I'm just not sure why that was needed.
   <pre><code>My initial solution:
    let sampleWord = "astronaut";
    let pwRegex = /(?=\w{6,})(?=\d{2})/ig; // Change this line
    let result = pwRegex.test(sampleWord);

  Solution was:
    let sampleWord = "astronaut";
    let pwRegex = /(?=\w{6,})(?=\D*\d{2})/ig; // Change this line
    let result = pwRegex.test(sampleWord); </pre></code>
    
   Subject | Mistake
   --- | ---
   RegEx | [Check For Mixed Grouping of Characters](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters): Another one that I figured out in about 15 minutes without any external help, my solution as below. It may be able to be written more eloquently, I'm just proud I did this without needing someone else to explain it to me. 
   <pre><code>My solution:
    let myString = "Eleanor Roosevelt";
    let myRegex = /((Franklin|Eleanor)\s([A-Z]*)([.]*)\s*(Roosevelt))/; // Change this line
    let result = myRegex.test(myString); </pre></code>

   Subject | Mistake
    --- | ---
    RegEx | [Reuse Patterns Using Capture Groups](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups): I did 99% of this solution on my own, got stuck right at the end, figuring out how to stop it from returning true on more than 3 patterns. After watching [Regular Expressions - Reuse Patterns Using Capture Groups - Free Code Camp](https://www.youtube.com/watch?v=xboGcPG6Ifs) right before he fixed it, I figured it out. I needed a caret at the start and a bling at the end. Solution below:
   <pre><code>My solution:
    let repeatNum = "42 42 42";
    let reRegex = /^(\d+) \1 \1$/; // Change this line
    let result = repeatNum.match(reRegex); </pre></code>


 TODAYS HOURS: 1 hour 7 mins 
 
 
### Saturday, October 9, 2021 
- Continued JavaScript Algorithms and Data Structures  
    - Finished Regular Expressions
    - Finished Debugging
    - Started Basic Data Structures
      - 1% into Basic Data Structures

- Mistake tracker:
Subject | Mistake/Win
    --- | ---
   RegEx | [Use Capture Groups to Search and Replace](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/use-capture-groups-to-search-and-replace): Another one I problem solved on my own, took me about 10 minutes, but it feels good that I'm able to read and understand the code that I'm writing now.
   RegEx | [Remove Whitespace from Start and End](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end): Another one that I figured out in 5-10 minutes, my solution below. This one was trial and error and I wonder if the final code could be written more eloquently.
   <pre><code>My solution:
    let hello = "   Hello, World!  ";
    let wsRegex = /(\s+\w+(,)\s\w+(!)\s+)/; // Change this line
    let changeText = "Hello, World!";
    let result = hello.replace(wsRegex, changeText); // Change this line

    console.log(result); </pre></code>
    
   Subject | Mistake
   --- | ---
   Debugging | [Use Caution When Reinitializing Variables Inside a Loop](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-caution-when-reinitializing-variables-inside-a-loop): This one took a little longer (20ish) minutes for me to figure out, and I did need to watch this [YouTube video](https://www.youtube.com/watch?v=WfQhmFsur1U) to help placing the 'let row = [];' section, though my instinct was right. The video helped to reinforce how to read the flow of the code. Solution below.
   <pre><code>My solution:
    function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < n; j++) {
    // Pushes n zeroes into the current row to create the columns
    row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    }
    return newArray;
    }

    let matrix = zeroArray(3, 2);
    console.log(matrix); </pre></code>


 TODAYS HOURS: 1 hour 6 mins 
 
 
 ### Monday, October 11, 2021
- Continued JavaScript Algorithms and Data Structures  
    - Continued Basic Data Structures
      - 50% into Basic Data Structures

- Mistake tracker:
Subject | Mistake/Win
    --- | ---
   Data Structures | [Add Items to an Array with push() and unshift()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-to-an-array-with-push-and-unshift): I was getting frustrated with this one, as it seemed correct to me, but console kept displaying "mixedNumbers.push() is not a function" - see my initial solution below. Two seconds into a YT video about it, I saw my error and where I have put mixedNumbers.push, should have been arr.push().
   <pre><code>My solution:
    function mixedNumbers(arr) {
      // Only change code below this line
    mixedNumbers.push(7, "VIII", 9);
    mixedNumbers.unshift("I", 2, "three");
      // Only change code above this line
    return arr;
    }
    console.log(mixedNumbers(['IV', 5, 'six']));</pre></code>
  
  Data Structures | [Copy Array Items Using slice()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice): Ended up getting this one right, after a little trial and errors and trying to figure out where my error was when I knew my code was right. I just forgot to change the return statement to forecast from arr.
    --- | ---
   Data Structures | [Copy an Array with the Spread Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator): When I first read this chellenge, I got a little nervous, thinking "Oh no, another pickle". Imagine my surprise when my inital instincts work in my favour and return the right answers to me in less than a few minutes. Elated! Love a win! Solution code below.
    <pre><code>My solution:
    function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
    num--;
    }
    return newArr;
    }
    console.log(copyMachine([true, false, true], 2));</pre></code>
    
  Data Structures | [Check For The Presence of an Element With indexOf()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof): Another win! Felt good to feel like I'm slowly getting used to how and why to use certain things. Got this solution in only a few minutes XD.
   --- | ---
    <pre><code>My solution:
    function quickCheck(arr, elem) {
      // Only change code below this line
    if (arr.indexOf(elem) > -1 ) {
    return true;
    } else {
    return false;
    }
      // Only change code above this line
    }
    console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));</pre></code>

 TODAYS HOURS: 1 hour 1 mins 
 
 
  ### Tuesday, October 12, 2021 
- Continued JavaScript Algorithms and Data Structures  
    - Continued Basic Data Structures
      - 75% into Basic Data Structures

- Mistake tracker:
Subject | Mistake/Win
    --- | ---
   Data Structures | [Iterate Through All an Array's Items Using For Loops](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops): I kept trying to use comparison operators to get the result I wanted but never seemed to be able to work the code. Then I watched a [YT video](https://www.youtube.com/watch?v=FkR9bEBrUTk) and within a few seconds realised he was using indexOf - then I amended my code and it worked. It took me half an hour and was very frustrating. I should know by now to just reference the previous challenge.


 TODAYS HOURS: 1 hour 3 mins 
 
 
   ### Wednesday, October 13, 2021 
- Continued JavaScript Algorithms and Data Structures  
    - Continued Basic Data Structures
      - 85% into Basic Data Structures

- Mistake tracker:
Subject | Mistake/Win
    --- | ---
   Data Structures | [Check if an Object has a Property](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property): This solution took me over an hr to problem solve, and I ended up watching a [YT video](https://www.youtube.com/watch?v=S08t6oz00Ew). The YT solution was no longer exactly accurate and I had to make minor adjustments. See solution code below. I think I found this one frustrating because although I knew there was an 'if' statement in there, I wouldn't have thought to make an array then iterate through it to create a match. My instincts wanted me to just so "if (userObj === "x", etc) return true" but that didn't work. I figured because the question was saying that the argument has to pass all four parameters that my inital solution was best, turned out not so much. I'm also not sure why he change the final parameter in the for loop to i += 1 instead of i ++?
   <pre><code>My solution:
    let users = {
      Alan: {
        age: 27,
        online: true},
      Jeff: {
        age: 32,
        online: true},
      Sarah: {
        age: 48,
        online: true},
      Ryan: {
        age: 19,
        online: true}
        };

  function isEveryoneHere(userObj) {
    // Only change code below this line
  let everyone = ['Alan', 'Jeff', 'Sarah', 'Ryan']; 

  for (let i = 0; i < everyone.length; i += 1) {
    let student = everyone[i]; <stop>
      if (userObj.hasOwnProperty(student) === false) {
        return false;
        } 
      } return true;
  }
    // Only change code above this line
  console.log(isEveryoneHere(users));
  </pre></code>

 TODAYS HOURS: 1 hour 25 mins 
 
 
### Saturday, October 16, 2021 <a name="TODAY"></a>

- Continued JavaScript Algorithms and Data Structures  
    - Finished Basic Data Structures
    - Started Basic Algorithm Scripting
      - XX% into Basic Algorithm Scripting

- Mistake tracker:
Subject | Mistake/Win
    --- | ---
   Data Structures | [Iterate Through the Keys of an Object with a for...in Statement](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement): This one is another one that had me working on it for a long before I conceded I needed help. All the concepts they were after seemed familiar but I was stumped on how to make the log return a count/number. Eventually I went to YT and watched [this video](https://www.youtube.com/watch?v=-DGQF-_bV0k). Frustratingly, his solution was very similar to my original work, I was using online as the first parameter in the for..in statement, I lengthened out the if statement and forgot the return function at the end. See below.
   <pre><code>His solution: 
   function countOnline(usersObj) {
      // Only change code below this line
      let onlineUsers = 0;

      for (let user in usersObj ){
        console.log(user);
        if (usersObj[user]["online"]) {
          onlineUsers += 1;    
          }
        }

       return onlineUsers;
        // Only change code above this line
       }
       
    My solution: 
    function countOnline(usersObj) {
        // Only change code below this line
          let onlineUsers = 0;

          for (let online in usersObj ){
            console.log(usersObj.online);
          if (usersObj.user.online === true) {
            onlineUsers += 1;    
            }
            }
        // Only change code above this line
        }</pre></code>
        

Subject | Mistake/Win
--- | ---
Data Structures | [Modify an Array Stored in an Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-array-stored-in-an-object): Another one where my inital solution is correct, I'm just missing the return statement at the end. I'm using console.log to check and I think that I keep forgetting to use return.
    

 TODAYS HOURS:  hour  mins 
 
 <a href="#top">Back to top</a>
