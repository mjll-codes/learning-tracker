# October 2021

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
    - After further looking at the code, I deduced that it was likely the commas between the conditions causing the error. I googled how if statement's take on multiple conditions in a single function, then I remembered the OR operator, I was hoping I wouldn't have to use 'card' for every new condition, turns out I did, new code below that passed the test:
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
    - XX% into Basic Javascript

- Mistake tracker:
Subject | Mistake
    --- | ---
   Loops| Using recursion: So this one was interesting, I figured it out on my own, but don't feel entirely confidet about how. The example was a multiply, and ours was a sum; I knew to change the last line of code to a plus, then I had to alter the return function to 0 instead of the 1 from the example. That just felt right, but I can't explain why. [See example code, and solution code here](https://github.com/mjll-codes/learning-tracker/tree/main/learning-outcomes/LoopRecursion.js)
   Profile Lookup| I had a go at this on my own but found myself lost and unsure of the right approach. It's not coming very organically to me atm, reading their instructions and creating code to mimic it. Though when it's explained in a video I get it, I just struggle to know what's the right approach. I watched [Profile Lookup - Free Code Camp](https://www.youtube.com/watch?v=CY57uiOsi-0) which was helpful because I was able to watch his thought process as he solved it. [Solution here](https://github.com/mjll-codes/learning-tracker/tree/main/learning-outcomes/Profile-Lookup.js).
   

 TODAYS HOURS:    hours   mins 
