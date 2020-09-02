function moveZeroes(nums) {
    var idx = 0;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          console.log(i,idx,nums)
        nums[idx] = nums[i];
        nums[i] = idx === i ? nums[i] : 0;
        idx++;
      }
    }
  }

moveZeroes([0,1,0,3,12])

