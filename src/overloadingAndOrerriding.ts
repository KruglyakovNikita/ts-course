abstract class Animal<C extends string | string[]> {
  public abstract communicate(communication: C): void;
}

class Human extends Animal<string> {
  public communicate(sentence: string): void { }
}

class Bird extends Animal<string[]> {
  public communicate(notes: string[]): void { }
}

// class Bynar extends Animal<boolean> { // Error: 'boolean' does not satisfy the constraint 'string | string[]'.
//   public communicate(bit: boolean): void { }
// }

const human = new Human();
human.communicate("hello"); // OK
//human.communicate(["hello"]); // Error

const bird = new Bird();
//bird.communicate("hello"); // Error
bird.communicate(["hello"]); // OK
//////////////////////////////////////////////
abstract class Animal2 {

  public abstract communicate(sentence: string): void;
  public abstract communicate(notes: string[]): void;

}

class Human2 extends Animal2 {
  communicate(sentence: string); // optional overload signature
    communicate(notes: string[]);  // optional overload signature
    communicate(sentenceOrNotes: string | string[]) {
        // Do stuff
    }
}
///////////////////////////
abstract class Person{
  name:string

  eat():void{
      console.log(this.name+" eats when hungry.")
  }
}

class Student extends Person{
  rollnumber:number;

  constructor(rollnumber:number, name1:string){
      super();
      this.rollnumber = rollnumber
      this.name = name1
  }

  displayInformation():void{
      console.log("Name : "+this.name+", Roll Number : "+this.rollnumber)
  }
  // overriding super class method
  eat():void{
    //так же можно вызвать eat в класса ррдителя super.eat()
      console.log(this.name+" eats during break.")
  }
}

var student1 = new Student(2, "Rohit")

student1.displayInformation()
student1.eat()