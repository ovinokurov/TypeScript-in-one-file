"use strict";
let id = 5;
let company = 'Traversy Media';
let isPublic = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
let person = [1, 'Brad', true];
let employee;
employee = [
    [1, 'Oleg'],
    [2, 'John'],
    [3, 'Jill']
];
x = true;
age = 30;
ids.push(6);
let pid;
pid = 22;
pid = 'string';
var Directrion1;
(function (Directrion1) {
    Directrion1[Directrion1["Up"] = 1] = "Up";
    Directrion1[Directrion1["Down"] = 2] = "Down";
    Directrion1[Directrion1["Left"] = 3] = "Left";
    Directrion1[Directrion1["Right"] = 4] = "Right";
})(Directrion1 || (Directrion1 = {}));
var Directrion2;
(function (Directrion2) {
    Directrion2["Up"] = "Up";
    Directrion2["Down"] = "Down";
    Directrion2["Left"] = "Left";
    Directrion2["Right"] = "Right";
})(Directrion2 || (Directrion2 = {}));
const user = {
    id: 1,
    name: 'John'
};
let cid = 1;
let customerId = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const oleg = new Person(1, 'Oleg');
const brad = new Person(2, 'Brad');
const mike = new Person(3, 'Mike');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'Oleg', 'Team Lead');
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Oleg', 'Brad', 'John', 'Jill']);
strArray.push('Vasya');
for (let entry of strArray) {
    console.log(entry);
}
