//write a function called countLetters that return all unique characters in a string
// function should also report how many letters in a string
// return all characters in the input string and it's count
// skipping and don't count spaces

function countLetters(input) {
  var noSpaces= input.split(' ').join("");
  var letters = {}

 for(var i = 0; i < noSpaces.length; i++) {
    var char = noSpaces[i]

   if (letters[char]) {
      letters[char] += 1
    } else {
      letters[char] = 1
    }
  }
    return letters
}

console.log(countLetters('lighthuse in the house'))