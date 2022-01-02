//Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublic: boolean = true
let x: any = 'Hello'
let age:number

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,'Hello']

//Tuple
let person:[number,string,boolean]= [1,'Brad',true]

//Tuple Array
let employee:[number,string][] 

employee = [
    [1,'Oleg'],
    [2,'John'],
    [3,'Jill']
]
x = true

age = 30 
//output data
ids.push(6)

//console.log('ID : ', id)

//Union
let pid: string | number

pid = 22
pid = 'string'


//Enum
enum Directrion1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Directrion2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//console.log(Directrion2.Left)

//Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

function addNum(x:number, y:number):number{
    return x + y
}
//console.log(addNum(1,2))

//Void Type
function log(message: string | number){
    console.log(message)
}
//log('Hello Oleg!!!')

//Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}


type Point = number | string
const p1: Point = 1
/////////////////////////////////
interface MathFunc{
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number):number => x + y
const sub: MathFunc = (x: number, y: number):number => x - y

//console.log(add(3,2))
//console.log(sub(3,2))

//////////////////////////

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

//Classes
class Person implements PersonInterface {
    id: number
    name: string 

    constructor(id: number, name: string){
       this.id = id
       this.name = name
    } 

    register(){
        return `${this.name} is now registered`
    }
}

const oleg = new Person(1,'Oleg')
const brad = new Person(2,'Brad')
const mike = new Person(3, 'Mike')

//console.log(oleg.register())
//console.log(oleg,brad,mike)

//Subclasses of Person
class Employee extends Person{
    position : string

    constructor(id: number, name: string, position: string ){
        super(id,name)
        this.position = position
    }
}

const emp = new Employee(1,'Oleg','Team Lead')

//console.log(emp)
//console.log(emp.name)
//console.log(emp.position)
//console.log(emp.register())

//Generics we are using place holdre for type T
/* missing type of array
function getArray(items: any[]): any[] {
    return new Array().concat(items) 
}
*/
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items) 
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Oleg','Brad','John','Jill'])

strArray.push('Vasya')


for (let entry of strArray) {
    console.log(entry); // 1, "string", false
  }

//log(strArray)