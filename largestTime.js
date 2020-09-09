var  largestTimeFromDigits = function(arr) {
	counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (i = 0; i < arr.length; i++) {
			for (j = arr[i]; j < counts.length; j++) counts[j]++;
	}
	if (counts[2] === 0) return '';
	mustStartWith2 = counts[1] === 0;
	if (mustStartWith2 && counts[3] === 1) return '';
	numbersAvailableForMinute = counts[5] - (mustStartWith2 ? 2 : 1); 
	if (numbersAvailableForMinute === 0) return '';
	time = [0, 0, 0, 0];
	startsWith2 = mustStartWith2 || (numbersAvailableForMinute >= 2 && counts[2] > counts[1]);
	maxs = startsWith2 ? [2, 3, 5, 9] : [1, 9, 5, 9];
	for (i = 0; i < maxs.length; i++) {
			time[i] = counts.indexOf(counts[maxs[i]]);
			for (j = time[i]; j < counts.length; j++) counts[j]--;
	}
	return time[0]+""+time[1]+":"+time[2]+""+time[3];
}

console.log(largestTimeFromDigits([0,0,1,0]))