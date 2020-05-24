function countOfAllBooleans(arr) {
  // Insert code here;
  var numBools = 0;
  var checkTrue = true;
  var checkFalse = false;
  for (var i = 0 ; i < arr.length; i++)
  {
    if (arr[i] === checkFalse)
        numBools++;

      else if(arr[i] === checkTrue)
      numBools++;
  }

  return numBools;
}

// Do not edit this line;
module.exports = countOfAllBooleans;