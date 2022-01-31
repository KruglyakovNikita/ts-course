abstract class MyAbstractClass{
  abstract readonly name:string;
  abstract age:number;
  abstract getInfo():void;
}
class MyClass extends MyAbstractClass{
  name:string;
  age:number;
  constructor(public Name: string,public Age: number){
    super();
  }
  getInfo(): void {
      console.log("Имя: "+this.name+" возраст: "+ this.age)
  }
}
const someClass: MyAbstractClass= new MyClass("Никита",18);
someClass.getInfo()

function MyFunctionWithAbstract1(params:MyAbstractClass):void {
    console.log("name: ", params.name);
    console.log("age: ",  params.age)
}

function MyFunctionWithAbstract2(param1:string,param2:number):MyAbstractClass {
  return new MyClass(param1,param2);
}
//////////////
abstract class AbstractSuperClass {
  name: string = "AbstractSuperClass";
  
  public toString(): string {
    return `[object ${this.name}]`;
  }
  }
  
  class FirstConcreteSubClass extends AbstractSuperClass {
  public name: string = "T2"; 
  }
  
  class SecondConcreteSubClass extends AbstractSuperClass {
  public name: string = "T2"; 
  }
  
  let first: FirstConcreteSubClass = new FirstConcreteSubClass();
  let second: SecondConcreteSubClass = new SecondConcreteSubClass();
  
  first.toString(); // [object FirstConcreteSubClass] реализация в абстрактном предке
  second.toString(); // [object SecondConcreteSubClass] реализация в абстрактном предке