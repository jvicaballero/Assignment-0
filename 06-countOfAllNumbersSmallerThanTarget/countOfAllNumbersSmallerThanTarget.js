function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var belowTarget = 0;
  for(var i = 0 ; i < nums.length; i++)
{
  if(nums[i] < target)
    belowTarget++;
}

return belowTarget;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;