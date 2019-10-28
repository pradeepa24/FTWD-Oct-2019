

class Vehicle{
    constructor(color, theMake, theModel, miles){
      this.color = color;
      this.make = theMake;
      this.model = theModel;
      this.running = false;
      // let recMiles = 100000;
      // let milesRemaining = recMiles - miles;
      // this.remainingMiles = milesRemaining;
      // you can do regular function type stuff in the constructor its not a magical function 
    }
  
    toggleEngine(){
      this.running = !this.running;
    }
  
  }
  
  class Sedan extends Vehicle{
  // by putting the extends keyword we are inheriting literally the entire entire class, its an exact copy
  // the only way you will not have an exact copy, is to overwrite some stuff 
  // the rules for overwriting things in an child class is that if you define a thing in this class that has the name name as in the parent class, it will overwrite it 
    constructor(model, brand, color){
      super(color, brand, model)
      // when I call super here, I am literally calling the vehicle constructor function
      // and the vehicle constructor function takes arguments, therefore, when I call tht funciton I must pass in arguments
      this.wheels = 4;
      this.doors = 4;
    }
  
  
  
    toggleEngine(){
      // if you want to modify a parent's function, if you want to name it the same thing but add some functionality to it without re writing the entire thing, use the word super()
      super.toggleEngine();
      // ^ this means to do whatever the parent's toggleEngine function does, and then when it's done, do whatever is below
      console.log('toggling the engine boss!')
    }
  
  }
  
  let carAcrossTheStreet = new Sedan('G37orSomething', 'infinity', 'white');
  
  console.log(carAcrossTheStreet);
  
  carAcrossTheStreet.toggleEngine()
  
  console.log(carAcrossTheStreet);
  