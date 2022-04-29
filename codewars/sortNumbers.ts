function solution(nums: number[]): number[] {
	if (nums.length === 0) {
		return [];
	} else {
		return nums.sort((a, b) => a-b)
	}
}

