class MySolution {
  countDownSum(num , currentSum = 0) {
    // Insert code here;
    
    if (num == 1)
      return currentSum += 1;

    else
       return this.countDownSum(num - 1, currentSum += num);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;