
// a class is actually a funciton 
// its a function that builds an object according to a blueprint

class Car{
    // inside a class you need a function called constructor
    constructor(theColor, theMake, theModel, attack, endurance){
      this.color = theColor;
      this.make = theMake;
      this.model = theModel;
      this.attack = attack;
      this.endurance = endurance;
      // the constructor function runs when the class builds a new car with the keyword 'new'
      this.running = false;
      this.sunRoofOpen = false;
    }
  
    // inside a class, you can define any function for that class that you want without the function keyword
    toggleEngine(){
      this.running = !this.running;
    }
  
    getHit(damagePoints){
      this.endurance -= damagePoints;
      if(this.endurance <=0){
        console.log(`nooooooooooooo! ${this.make} ${this.model} has been destroyed!`)
      }
    }
  
  
  
  }
  
  
  
  let jessCar = new Car('red', 'mazda', 'miata', 50, 140);
  let nicksCar = new Car('black', 'honda', 'civic', 30, 170);
  
  console.log(jessCar);
  console.log(nicksCar);
  console.log('---------')
  
  nicksCar.getHit(jessCar.attack);
  nicksCar.getHit(jessCar.attack);
  nicksCar.getHit(jessCar.attack);
  nicksCar.getHit(jessCar.attack);
  
  
  console.log(nicksCar)
  
  
  
  
  
  
  
  
  
  
  
  
  