function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var checkTrue = true;
  var checkFalse = false;
  var numBoolNString = 0;

  for (var i = 0; i <arr.length; i++)
  {
    if(arr[i] === checkFalse)
      numBoolNString++;

    else if (arr[i] === checkTrue)
      numBoolNString++;

    else if(typeof(arr[i]) == "string")
      numBoolNString++;
  }

  return numBoolNString;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;