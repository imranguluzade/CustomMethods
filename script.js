// * Max Number uzerinden manipulyasiya - Callback vasitesile
const numbers = [1, 2, 3, 4, 5, 6, 7]; //example array
function getMaxNum(numbers, callback) {
  const maxNumber = Math.max(...numbers);
  return callback(maxNumber);
}
const summary = getMaxNum(numbers, function (maxNum) {
  return maxNum + 100;
});

console.log(summary);

// * Custom forEach Method creating with Callback
