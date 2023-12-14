/*
Merge Sort - a sorting algorithm that uses the divide and conquer approach
Time Complexity: O(nlogn)

Idea:
- divide the array into two halves
- sort the two halves recursively
- merge the sorted halves

*/

function mergeSortHelper(arr1, arr2) {
  let res = [];

  let i = 0,
    j = 0;
  // merge the two sorted arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      i++;
    }
  }
  // push the remaining elements
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}

function mergeSort(arr) {
  //base Case to stop the recursion
  if (arr.length <= 1) return arr;

  //find the middle index
  let mid = Math.floor(arr.length / 2);
  // divide the array into two halves
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // merge the sorted halves
  return mergeSortHelper(left, right);
}

// test
let arr = [197, 34, 269, 10000, 20, 45, 78, 2, 3, -220, -50, 0, 2, 3];
console.log("Before sorting: ", arr);
let res = mergeSort(arr, 0, arr.length - 1);
console.log("After sorting: ", res);
