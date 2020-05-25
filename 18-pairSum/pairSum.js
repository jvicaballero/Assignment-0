function pairSum(nums, target) {
  // Insert code here;

  if(nums.length <= 1)
    throw "Array is empty or only has 1 element";

    var val = 0;
  for (var i = 0; i < nums.length; i++)
  {
    val = nums[i];

    for(var j = 0; j <nums.length; j++)
    {
      if (nums[i] + nums[j] == target)
        return true;
    }
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;