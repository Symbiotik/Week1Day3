function countLetters(input) {
  var noSpaces= input.split(' ').join("");
  var letters = {}

 for(var i = 0; i < noSpaces.length; i++) {
    var char = noSpaces[i]

   if (letters[char]) {
      letters[char] += [i]
    } else {
      letters[char] =  [i]
    }
  }
    return letters
}

console.log(countLetters('hello'))