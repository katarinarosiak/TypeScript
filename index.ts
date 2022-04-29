let id: number = 5

id = 5

//basic types 

let comapny: string = "hello"
let isPublished: boolean = true 
let x: any = 'Hello' 

let ids: number[] = [1,2,3,4,9]
let arr: any[] = [1, true, 'hello']

//Tuple (order!)
let person: [number, string, boolean] = [1, 'HH', true]

let employee: [number, string][]

employee = [
	[1, 'rr'], 
	[2, 'rr'],
	[3, '55']
]


//Union
let pid: string | number = 22

pid = 22
pid = 'dd'

 //Enum - numeric values by default  
enum Direction1 {
	Up = 1,  //start from 
	Down,   // 2
	Left,   //3
	Right
}

enum Direction2 {
	Up = 'up',  
	Down = 'down',   
	Left = 'left',   
	Right = 'right'
}

//Objects 
const user: {
	id: number,
	name: string 
} = {
	id: 1,
	name: 'John'
}

//or

type User = {
	id: number 
	name: string 
}

const user: User = {
	id: 1,
	name: 'John'
}

//Type assertion - treat entity as different type 

let cid: any = 1 
let customerId = <number>cid

customerId = true //error

//or 
let cid: any = 1 
let customerId = cid as number

//types in functions 
function addNum(x:number,y:number): number {
	return x + y 
}

console.log(addNum(1,3))

//no return 
function log(message: string | number):void {
	console.log(message)
}

//Interface - custom type - specific type 
interface UseerInterface {
	readonly id: number //read only
	name: string
	age?: number //optional 
}

const user1: UseerInterface = {
	id: 1,
	name: 'John',
}

//type can be used with unions and with primitives 


interface MathFunc {
	(x: number, y: number): number 
}
//reuse interface
const add: MathFunc = (x: number, y: number): number => x + y 
const sub: MathFunc = (x: number, y: number): number => x - y 


//classes 
class Person {
	private id: number 
	protected name: string 

	constructor(id: number, name: string) {
		this.id = id 
		this.name = name 
	}

	register() {
		return `${this.name} is registered` 
	}
}

const brad = new Person(11, 'hello')

//access modifiers 
// - public 
// - private 
// - protected 


// Interface to class 

interface PersonInterface {
	id: number 
	name: string
	register(): string //return string
}

class Person implements PersonInterface{
	private id: number 
	protected name: string 

	constructor(id: number, name: string) {
		this.id = id 
		this.name = name 
	}

	register() {
		return `${this.name} is registered` 
	}
}

//extend class

class Employee extends Person {
	position: string 

	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position 
	}
}

const emp = new Employee(3, 'Sha', 'pdpd')


//Generics - place holder for type T 
function getArray<T>(items:T[]): T[] {
	return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3])
let strArray = getArray<string>(['a', '2', '4'])

numArray.push('hello')