/* 
  @description generates a random sequence of string of "length" length
  @params length: length of the string to generate
  @notes modify this if you have a better algorithm. Time complexity is O(n)
         where "n" is length of the string to be generated
*/
const randomGenerator = (length) => {
  const possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ0123456789";
  const possibleLength = possible.length;
  let generatedString = "";

  for (let i = 0; i < length; ++i) {
    let index = Math.random() * possibleLength;
    index = Math.ceil(index);
    generatedString += possible[index];
  }

  return generatedString;
}

module.exports = randomGenerator;