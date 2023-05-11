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

const arr = [1, 2, 3, 4, 5, 6, 7]; //example array
function customForEach(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
const result = customForEach(arr, function (item) {
  return item;
});
console.log(result);

// * Custom Find Method creating with Callback

const array = [1, 2, 3, 4, 5, 6, 7]; //example array
function customFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const isTrue = callback(array[i]);
    if (isTrue === true) {
      return arr[i];
    }
  }
}
const res = customFind(array, function (el) {
  return el > 3;
});
console.log(res);


