/*
    binarySearch - accepts a sorted array and a value and returns the index at which the value exists
    or -1 if the value does not exist in the array

    Time Complexity: O(log n)

    Idea:
    - loop through the array
    - compute the middle index
    - check if the value is equal to the middle element
    - if it is, return the index
    - if not, check if the value is less than the middle element
    - if it is, set the end to the middle index - 1
    - if not, set the start to the middle index + 1
    - repeat until the value is found or the start is greater than the end
*/

function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;

  // loop through the array
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// test
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([-10, -5, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)); // 3
