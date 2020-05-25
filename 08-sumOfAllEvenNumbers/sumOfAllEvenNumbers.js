function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  var numEvens = 0;
  for(var i = 0; i < nums.length; i++)
  {
    if (nums[i] % 2 == 0)
      numEvens++;
  }

  return numEvens;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;