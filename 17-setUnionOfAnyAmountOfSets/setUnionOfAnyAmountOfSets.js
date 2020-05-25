function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;

  var mySet = new Set();

  for(var set of args)
  {
    for (var num of set)
    {
      mySet.add(num);
    }
  }

  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;