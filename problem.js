// 1 ES6 Destructuring 

let person = {
    name: "Rimon",
    age: 21,
    prof:  "programmer",
  };
  
  let { name, age , prof ,} = person;
  
  console.log(name); // Rimon
  console.log(age);  // 21
  console.log(prof); // programmer
  
// 3 ES6 Classes

  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    totalArea() {
      return this.width * this.height;
    }
  }
  
  const rectangle1 = new Rectangle(10, 10);
  console.log(rectangle1.totalArea()); // 100
  

// 4 Getter and Setter in ES6
{ 

    class Person {
        constructor(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
        }
      
        get fullName() {
          return  this.firstName + " " + this.lastName ;
        }
      
        set fullName(name) {
          [this.firstName, this.lastName] = name;
        }
      }
      
      const person = new Person( "Abdul", "kader");
      console.log(person.fullName); //  Abdul Kader
      
    }

 {

      // 5 Class Expressions

      const Circle = class {
        constructor(radius) {
          this.radius = radius;
        }
      
        Circumference() {
          return 2 * Math.PI * this.radius;  // circumference = 2 * PI * R
        }
      };
      
      const circle = new Circle(10); // R = 10 
      console.log(circle.Circumference()); // 62.83185307179586
 }
    

 {

  //6. JavaScript Computed Properties


  let userName  = 'name';
   
  
   let person = {

    [ userName]:  "Rimon",

  };
  
  console.log(person.name); // Rimon
 
 }

 {
  //7. Inheritance

  class Animal {
    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} Max `);        
    }
  }
  
  let dog = new Dog("Charlie");
  dog.speak(); // charlie Max
  
 }



 {
  // 8 New Target Operators
  class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate an abstract class");
      }
    }
  }
  
  class Rectangle extends Shape {
    constructor(square) {
      super();
      this.square = square;
    }
    
    area() {
      return this.square * this.square;
    }
  }
  
  try {
    let shapeInstance = new Shape(); // This should throw an error
  } catch (error) {
    console.log(error.message); // Output: Cannot instantiate an abstract class
  }
  
  let rectangle = new Rectangle(5);
  console.log(rectangle.area()); // Output: 25
 

 }


{
// 9. Static Methods

class MathUtil {
  static square(A) {
    return A * A;
  }
}

console.log(MathUtil.square(10)); // 100


}


{
  // 10. Symbol

 let key = Symbol("key");

 let person ={
  name : "Rimon",
  [key]: "pass"
 }
 console.log(person[key]) // pass
}




 

 