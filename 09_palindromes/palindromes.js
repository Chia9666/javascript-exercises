const palindromes = function (string) {
  let newString = string.toLowerCase().replace(/\W/g, "");
  return newString.split("").reverse().join("") == newString;
};

// Do not edit below this line
module.exports = palindromes;
