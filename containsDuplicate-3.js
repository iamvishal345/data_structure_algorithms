var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (k < 1 || t < 0) return false;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let bucket = Math.floor(nums[i] / (t + 1));

    if (map.has(bucket)) return true;
    if (map.has(bucket - 1) && Math.abs(nums[i] - map.get(bucket - 1)) <= t)
      return true;
    if (map.has(bucket + 1) && Math.abs(map.get(bucket + 1) - nums[i]) <= t)
      return true;

    if (map.size >= k) {
      let outsideBucket = Math.floor(nums[i - k] / (t + 1));
      map.delete(outsideBucket);
    }

    map.set(bucket, nums[i]);
  }

  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 1, 1], 1, 0));
