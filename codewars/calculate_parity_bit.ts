/*
i: string => either 'odd' or 'even'
string => binary rep 

return 0 or 1 
- (what do you need to add to the representation) so tat
it is expected result 



xount how many 1-bits in the string

if (even)
	if number is even => add 0
	if odd => add 1 
else 
	if num even => 1
	if odd => add 0 
*/

function checkParity(parity: string, bin: string) {
	const even = bin.split('').filter(x => x === '1').length % 2 === 0;
	return parity === 'even' && even ? 0 : parity === 'odd' && !even ? 0 : 1;
}