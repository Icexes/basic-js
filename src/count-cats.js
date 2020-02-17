module.exports = function countCats( matrix ) {
  let counter = 0;
  for (let arr of matrix) {
    counter += arr.reduce((prev,curr)=> { return curr=="^^" ? prev+1 : prev}, 0)
  }
  return counter;
};
