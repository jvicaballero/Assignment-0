function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;

  var inRange = 0;

  for(var i =0; i < nums.length; i++)
  {
    if(nums[i] >= start && nums[i] <= end)
      inRange++;

  }

  return inRange;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;