/*
    insertionSort - a sorting algorithm that builds the final sorted array one item at a time.
    Time Complexity: O(n^2)

    Idea:
    - loop through the array
    - find the smallest element in the array
    - swap the smallest element to the start of the unsorted list
    - repeat until the array is sorted
*/

function insertionSort(arr) {
  //array length
  let n = arr.length;

  //loop through the array
  for (let i = 1; i < n; i++) {
    //set the current element
    let current = arr[i];
    let j = i - 1;
    // loop throught the sorted part of the array to find the position to insert the current element
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // insert the current element into the correct position
    arr[j + 1] = current;
  }
}

// test
let arr = [197, 34, 269, 10000, 20, 45, 78, 2, 3, -220, -50, 0, 2, 3];
console.log("Before sorting: ", arr);
insertionSort(arr);
console.log("After sorting: ", arr);
