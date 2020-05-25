function fizzBuzz(start, end) {
  // Insert code here;
  let myArray = [];

  for(var i = start; i <= end; i++)
  {
    if (i % 5 === 0 && i % 3 === 0)
      myArray.push("FizzBuzz");
    
      else if(i % 3 == 0)
        myArray.push("Fizz");
      
      else if(i % 5 == 0)
        myArray.push("Buzz");

        else myArray.push(i);
      
        
  }

  return myArray;
}

// Do not edit this line;
module.exports = fizzBuzz;