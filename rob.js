const rob = function(nums) {

	solution = {};

	solution[nums.length] = 0;
	solution[nums.length-1] = nums[nums.length-1];

	for (let i=nums.length-2; i>=0; i--) {
        console.log(solution)
		solution[i] = Math.max(nums[i] + solution[i + 2], solution[i+1]);
	}

	return solution[0];
};
console.log(rob([3,1,1,7,2]))