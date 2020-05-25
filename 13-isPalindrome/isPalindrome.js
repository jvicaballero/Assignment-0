function isPalindrome(word) {
  // Insert code here;

  var start = 0;
  var end = word.length - 1;

  for(var i = 0 ; i < word.length; i++)
  {
    if(word[i] != word[end])
      return false;

    end--;
      
      
  }

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;