function sumOfAllOddNumbers(nums) {
  // Insert code here;  
  var numOdds = 0;
  for(var i = 0; i < nums.length; i++)
  {
    if (nums[i] % 2 != 0)
      numOdds++;
  }

  return numOdds;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;