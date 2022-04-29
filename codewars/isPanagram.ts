/*
i: string 
o: bool 

- case insenstivive 
- a-z

The quick brown fox jumps over the lazy dog.


*/

function isPanagram(sentence:string):boolean {
	const _hashMap = {} as any;

	for (let i = 0; i < sentence.length; i++) {
		let current = sentence[i].toLowerCase();
		if (!_hashMap[current]&& current >= 'a' && current <= 'z') {
			_hashMap[current] = true;
		}
	}
    console.log(Object.keys(_hashMap).length);
	return Object.keys(_hashMap).length === 26
}


console.log(isPanagram('The quick brown fox jumps over the lazy do.')); //false 
console.log(isPanagram('The quick brown fox jumps over the lazy do.')); //true