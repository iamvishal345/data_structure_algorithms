/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let diff = {};
  for (let i = 0; i < nums.length; i++) {
    if (diff[nums[i]] >= 0) {
      return [diff[nums[i]], i];
    } else {
      diff[target - nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

const factObj = {};
const factorial = (num) => {
  if (num === 2) return 2;
  if (factObj[num]) {
    return factObj[num];
  } else {
    factObj[num] = num * factorial(num - 1);
  }
  return factObj[num];
};

console.log(factorial(5));
