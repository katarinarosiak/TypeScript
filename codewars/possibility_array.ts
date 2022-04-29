/*
i: arr of nums 
o: boolean 

- if contains all numbers between [0, a.length1] 
then true
else false 

*/


function isAllPossibilities(x:number[]):boolean {
	const len: number = x.length;
	x.sort((a,b) => a-b);
	
	for (let i: number = 0; i < len; i++) {
		if (i !== x[i]) {
			return false 
		}
	}
	return true
}