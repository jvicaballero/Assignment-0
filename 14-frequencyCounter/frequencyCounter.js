function frequencyCounter(word) {
  // Insert code here;

  let myArray = {};

  for(var i = 0; i < word.length; i++)
  {
   
    if(myArray[word[i]])
      myArray[word[i]] += 1;

    else 
      myArray[word[i]] = 1;
  }

  return myArray;
}

// Do not edit this line;
module.exports = frequencyCounter;