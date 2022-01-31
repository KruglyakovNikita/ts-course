//primitives:number, string,boolean
//more comples: arrays,ojects
//function types,paramentr
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//primitives
var age;
age = 10.1;
var userName;
userName = 'Nik';
var isInstructor;
isInstructor = true;
// let hobbies:null
// let undefi:undefined
//More complex types
var hobbies;
hobbies = ['Nikita', 'Kruhliakou'];
//------------------------------------
// type person={
//   name:string,
//   age:number
// }
// let person:{
//   name:string,
//   age:number,
// };
// person={
//   name:'Nikita',
//   age:17
// }
// let people:{
//   name:string,
//   age:number,
// }[];
// //--------------
//Type union
var unionType;
unionType = '123';
var course = 'React - The Complete Guide';
var people;
var person;
//Functions & Types
function adding(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var stringArray = insertAtBeginning(['a', 'b', 'c', 'd'], 'g');
var updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]
