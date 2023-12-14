/*
    quickSort - A sorting algorithm where the pivot element is used to sort the array
    Time Complexity: O(n log n)

    Idea:
    - select a pivot element
    - move all elements smaller than the pivot element to the left of the pivot element
    - move all elements greater than the pivot element to the right of the pivot element
    - repeat until the array is sorted

    worst case: O(n^2)
    best case: O(n log n)

    we can select the pivot element in different ways:
    - always select the first element as the pivot element
    - always select the last element as the pivot element
    - select a random element as the pivot element
    - select the middle element as the pivot element
    - select the median of the first, middle and last element as the pivot element
*/

function pivot(arr, start, end) {
  //choosing pivot as the first element
  let pivot = arr[start];
  //current swap index
  let swapIndex = start;

  // loop through the array
  for (let i = start + 1; i <= end; i++) {
    // check if the pivot is greater than the current element
    if (pivot > arr[i]) {
      // increment the swap index
      swapIndex++;
      // swap the current element with the element at the swap index
      let temp = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = temp;
    }
  }
  // swap the pivot element with the element at the swap index
  let temp = arr[start];
  arr[start] = arr[swapIndex];
  arr[swapIndex] = temp;
  return swapIndex;
}
function quickSort(arr, left, right) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
}

// test
let arr = [197, 34, 269, 10000, 20, 45, 78, 2, 3, -220, -50, 0, 2, 3];
console.log("Before sorting: ", arr);
quickSort(arr, 0, arr.length - 1);
console.log("After sorting: ", arr);
