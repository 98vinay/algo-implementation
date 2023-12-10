/*
    Bubble sort Algorithm - A sorting algorithm where the largest values bubble up to the top
    Time Complexity: O(n^2)

    Idea:
    - compare two elements at a time , check if the first element is greater than the second element
    - if the first element is greater than the second element, swap the two elements
    - repeat until the array is sorted
*/

function bubbleSort(arr) {
  // array length
  let n = arr.length;

  // loop through the array
  for (let i = 0; i < n; i++) {
    // inner loop two compare adjacent elements
    for (let j = 0; j <= i; j++) {
      // check if the first element is greater than the second element
      if (arr[i] < arr[j]) {
        // swap the two elements
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

/*
      Since bubbleSort takes O(n^2) time, it is not a good sorting algorithm to use
      we can optimise the bubble sort by adding a check to see if the array is already sorted
  */

function bubbleSortOptimised(arr) {
  // array length
  let n = arr.length;
  //boolean to check if the array is sorted
  let isSorted = false;
  // loop through the array
  for (let i = 0; i < n - 1; i++) {
    // inner loop two compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      // check if the first element is greater than the second element
      if (arr[j] > arr[j + 1]) {
        // swap the two elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // set isSorted to true
        isSorted = true;
      }
    }
    if (!isSorted) {
      // if the array is already sorted, break out of the loop
      break;
    }
  }
}

// test
let arr = [197, 34, 269, 10000, 20, 45, 78, 2, 3, -220, -50, 0, 2, 3];
console.log("Before sorting: ", arr);
bubbleSortOptimised(arr);
console.log("After sorting: ", arr);
