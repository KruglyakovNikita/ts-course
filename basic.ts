//primitives:number, string,boolean
//more comples: arrays,ojects
//function types,paramentr

//primitives
let age: number;

age = 10.1;

let userName: string;

userName = 'Nik';

let isInstructor: boolean;

isInstructor = true;

// let hobbies:null
// let undefi:undefined

//More complex types

let hobbies: string[];
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
let unionType: string | number;
unionType = '123';

let course = 'React - The Complete Guide';
//Type aliases
type TypePerson = {
  name: string;
  age: number;
};
let people: TypePerson[];
let person: TypePerson;

//Functions & Types

function adding(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T):T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray=[1,2,3]

const stringArray=insertAtBeginning(['a','b','c','d'],'g')
const updatedArray=insertAtBeginning(demoArray,-1)//[-1,1,2,3]





