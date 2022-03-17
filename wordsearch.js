const transpose = function (matrix) {
  // Put your solution here
  let arr = [];
  const matrixList = [];
  for (let i = 0; i < matrix[0].length; i++) {
    for (let list of matrix) {
      arr.push(list[i]);
    }
    matrixList.push(arr);
    arr = [];
  }
  return matrixList;
};

const wordSearch = (letters, word) => {
  if (!letters[0] || !word) {
    return undefined;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));

  let verticalJoin = transpose(letters);

  verticalJoin = verticalJoin.map((ls) => ls.join(""));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
