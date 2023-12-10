/*
    selectionSort - a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.
    Time Complexity: O(n^2)

    Idea:
    - loop through the array
    - find the smallest element in the array
    - swap the smallest element to the start of the unsorted list
    - repeat until the array is sorted
*/

function selectionSort(arr) {
  // array length
  let n = arr.length;

  // loop through the array
  for (let i = 0; i < n; i++) {
    // set the starting position as the current minimum element position
    let min = i;
    // loop through the other elements in the array
    for (let j = i + 1; j < n; j++) {
      // check if the current element is less than the current minimum element
      if (arr[j] < arr[min]) {
        // store the position of the new minimum element
        min = j;
      }
    }

    // if the current minimum position is not equal to the current position, swap the two elements
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
}

// test
let arr = [197, 34, 269, 10000, 20, 45, 78, 2, 3, -220, -50, 0, 2, 3];
console.log("Before sorting: ", arr);
selectionSort(arr);
console.log("After sorting: ", arr);
