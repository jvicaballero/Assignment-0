class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    // Insert code here;

  var start = 0;
  var end = nums.length - 1;


  while(start <= end) {
    var middle = Math.floor((start + end) / 2);

    if(target === nums[middle]) 
      return true;
    

    if(target < nums[middle]) 
      end = middle - 1;
    
    if(target > nums[middle]) 
      start = middle + 1;
    

  
    
  }
  
  return false;

  }
  
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;