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
