/*
i: number 
r: bool 


- decide if the plural is needed t not 


*/

console.log(plural(1));
console.log(plural(Infinity))



function plural(n:number): boolean {
	return n === 1
}