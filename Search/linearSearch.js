/*
    linearSearch - accepts an array and a value and returns the index at which the value exists
    or -1 if the value does not exist in the array

    Time Complexity: O(n)

    Idea:
    - loop through the array
    - check if the current element is equal to the value
    - if it is, return the index
    - if not, continue
    
*/

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    // check if the current element is equal to the value
    if (arr[i] === val) {
      // if it is, return the index
      return i;
    }
  }
  // if not, return -1
  return -1;
}

// test
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([1, 2, 3, 4, 5], 1)); // 0
