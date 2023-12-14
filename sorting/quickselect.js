let pivotHelper = (arr, start, end) => {
  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] > pivot) {
      pivotIndex++;
      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  return pivotIndex;
};
var findKthLargest = function (nums, k) {
  if (nums.length === 1 && k === 1) {
    return nums[0];
  }
  let res = 0;
  let quickSelect = (nums, start, end) => {
    let index = pivotHelper(nums, start, end);
    if (index === k - 1) {
      res = nums[index];
    } else if (index > k - 1) {
      quickSelect(nums, 0, index - 1);
    } else {
      quickSelect(nums, index + 1, end);
    }
  };

  quickSelect(nums, 0, nums.length - 1);

  return res;
};

// test
let arr = [197, 34, 269, 10000, 20, 45, 78, 2, 3, -220, -50, 0, 2, 3];
let k = 2;

console.log("the k-th largest element is ", findKthLargest(arr, k));
