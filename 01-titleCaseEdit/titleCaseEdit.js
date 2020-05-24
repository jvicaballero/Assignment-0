function titleCaseEdit(title) {
  // Insert code here;

  var capitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  var words = title.split(' ').map(capitalized);

  capitalized = words.join(' ')

  return capitalized;
}

// Do not edit this line;
module.exports = titleCaseEdit;