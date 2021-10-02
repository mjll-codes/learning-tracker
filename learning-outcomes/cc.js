var count = 0;

function cc(card) {


if (card = 2, 3, 4, 5, 6) {
  count = count + 1;
    if (count > 0) {
      return count + " Bet";
  }
      if (count <= 0) {
      return count + " Hold";
  } 
}

if (card = 7, 8, 9) {
  count = count + 0;
    if (count > 0) {
      return count + " Bet";
  }
      if (count <= 0) {
      return count + " Hold";
  } 
}

if (card = 10, 'J', 'Q', 'K', 'A') {
  count = count - 1;
    if (count > 0) {
      return count + " Bet";
  }
    if (count <= 0) {
      return count + " Hold";
  } 
}
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Turns out I just needed to do a little more research on if operators and the way they interpret multiple conditions, after identifying that the commas were the issue, I did a little more research and corrected my error, new code below:

var count = 0;

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


cc(2); cc(3); cc(7); cc('K'); cc('A');
