function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  var matches = 0;
  for (var i = 0; i < nums.length; i++)
  {
    if(nums[i] == i)
    matches++;
  }

  return matches;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;