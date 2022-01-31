interface IClass{
  name:string;
  age:number;
  getInfo():void;
}

class MyClassWithInterface implements IClass{
  name:string;
  age:number;
  constructor(Name:string, Age:number){
    this.name=Name;
    this.age=Age;
  }
  getInfo(): void {
      console.log("Имя: "+this.name+" возраст: "+ this.age);
  }
}

const someClassWithInterface: IClass= new MyClassWithInterface("Никита",18);
someClass.getInfo()
//////////////
interface IUser{
  name:string;
  age:number;
}

const man: IUser ={
  name:"Никита",
  age:18
}

function printUser(user:IUser):void {
  console.log("name: ",  user.name)
  console.log("age: ", user.age);
}

function buildUser(userAge: number, userName: string): IUser {
  return { age: userAge, name: userName };
}
////////////////
interface IPeople{
  id:number;
  name:string;
  seniority?:number;
}

let manager: IPeople = {
  id: 1, 
  name: "Nikita",
  seniority: 1
}

let children: IPeople = {
  id: 2, 
  name: "Daniel"
}
/////////////////////
interface IMan{
  id:number;
  name:string
}
interface IMan{
  age:number
}
let someMan: IMan={
  id:1,
  name:"Nikita",
  age:18
}
////////////////
interface PersonInfo {
  (name: string, surname: string):void;
  fullName: string;
  password: string;
  authenticate(): void;
}

function personBuilder(): PersonInfo {

  let person = <PersonInfo>function (name: string, surname: string): void{
      person.fullName = name + " " + surname;
  };
  person.authenticate = function () {
      console.log(person.fullName + " входит в систему с паролем " + person.password);
  };
  return person;
}

let nik = personBuilder();
nik("Nikita", "Kruhliakou");
nik.password = "12456"; 
nik.authenticate();
/////////////////////