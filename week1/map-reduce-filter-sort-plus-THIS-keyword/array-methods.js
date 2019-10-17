// let bunchaNumbers = [1,2,3,4,5,6,7,8,9,10];

// we want a new array where we double each of those numbers 

// let doubleNumbers = [];

// for(let i = 0; i < bunchaNumbers.length; i++){
//   doubleNumbers.push(bunchaNumbers[i]*2)
// }
// this is how you do it with a regular for loop


// let dblNumbs = bunchaNumbers.map((eachNumber)=>{
// first rule of the map function is 
// you must return something inside the loop
// map function already creates a new array for you, and it assumes that you wanna push a bunch of stuff to that array
// so we will not use the push method, instead, whatever we return inside the map will get pushed into the new array

  // return eachNumber*2;

  // with the map function you always end up with a new array that has the same number of things as the old array

// })

// console.log(dblNumbs)


let foods = [
    {name: 'pizza', calories: 200, price: 7},
    {name: 'salad', calories: 100, price: 15},
    {name: 'cafecito', calories: 100, price: 1},
    {name: 'pasta', calories: 400, price: 8}
  ]
  
  // we want a new array with all those same foods, but instead of objects, I just want strings of the names of the foods, and i want the food names to have the first letter capitalized
  
  // let capped = [];
  
  // foods.forEach((eachFood)=>{
  
  //   let foodName = eachFood.name;
  //   let firstLetter = foodName[0].toUpperCase();
  //   let theRestOfTheWord = foodName.substr(1);
  
  //   capped.push(firstLetter+theRestOfTheWord)
  
  // })
  
  
  // console.log(capped)
  
  
  
  
  
  
  // let capFoods = foods.map((eachFood)=>{
  //   let foodName = eachFood.name;
  //   let firstLetter = foodName[0].toUpperCase();
  //   let theRestOfTheWord = foodName.substr(1);
  //   return firstLetter+theRestOfTheWord;
  // })
  
  // same result, but now if someone is reading the code, they know immediately that you are transofrming the array into an array of new stuff derived from the old stuff 
  // console.log(capFoods);
  
  // let capFoods = foods.map(eF=>eF.name[0].toUpperCase() + eF.name.substr(1))
  // super fancy version in one line
  // we skip the 3 step process of capitalizing the name and do it in one line 
  // we remove the optional parenthesese around the placeholder 
  // we put the whole function in one line 
  // we removed the curly braces because we had an inline function
  // and we removed the return because in an inline map funciton, the return is implicit(meaning it happens automatically)
  
  
  
  
  
  // const students = [
  //     {
  //       name: "Tony Parker",
  //       firstProject: 80,
  //       secondProject: 75,
  //       finalExam: 90
  //     },
  //     {
  //       name: "Marc Barchini",
  //       firstProject: 84,
  //       secondProject: 65,
  //       finalExam: 65
  //     },
  //     {
  //       name: "Claudia Lopez",
  //       firstProject: 45,
  //       secondProject: 95,
  //       finalExam: 99
  //     },
  //     {
  //       name: "Alvaro Briattore",
  //       firstProject: 82,
  //       secondProject: 92,
  //       finalExam: 70
  //     },
  //     {
  //       name: "Isabel Ortega",
  //       firstProject: 90,
  //       secondProject: 32,
  //       finalExam: 85
  //     },
  //     {
  //       name: "Francisco Martinez",
  //       firstProject: 90,
  //       secondProject: 55,
  //       finalExam: 78
  //     },
  //     {
  //       name: "Jorge Carrillo",
  //       firstProject: 83,
  //       secondProject: 77,
  //       finalExam: 90
  //     },
  //     {
  //       name: "Miguel López",
  //       firstProject: 80,
  //       secondProject: 75,
  //       finalExam: 75
  //     },
  //     {
  //       name: "Carolina Perez",
  //       firstProject: 85,
  //       secondProject: 72,
  //       finalExam: 67
  //     },
  //     {
  //       name: "Ruben Pardo",
  //       firstProject: 89,
  //       secondProject: 72,
  //       finalExam: 65
  //     }
  // ]
  
  // we want a new array with all the same students, but we only want their name and their final exam grade
  
  
  // let sanitizedStudents = students.map((eachStudent)=>{
  //   let total = eachStudent.finalExam + eachStudent.firstProject + eachStudent.secondProject
  
  //   let avg = total / 3;
  
  //   let formattedStudent = {
  //     name: eachStudent.name,
  //     final: avg
  //   };
  
  //   return formattedStudent;
   
  // })
  
  // console.log(sanitizedStudents);
  
  
  let someNums = [5,5,10,4,6,7,3,2,8,9,1];
  
  // lets add them all up;
  
  // let sum = 0;
  // someNums.forEach((num)=>{
  //   sum += num;
  // })
  
  // console.log(sum);
  // we can use the reduce method for something like this as well
  
  let theTotal = someNums.reduce((runningTotal, current)=>{
  
    return runningTotal + current
    // the first time through the loop running total is 0 because we put it after the comma down below, and current is equal to 5 because that's the first value
  
    // after we add them together, whatever we return, gets set equal to the runningTotal next round
  
  }, 0)
  // ^
  // | 
    // ____________________________________________
                                                   //  |
  // if you dont put an accumulator initial value there  ^ 
  // then the accumulator/runningTotal will start as the first element in the array and the current will start as the second element
  
  // console.log(theTotal)
  
  
  
  let peopleInTheElevator = [
    {name: 'Alex', weight: 170},
    {name: 'Person', weight: 140},
    {name: 'Mia', weight: 120},
    {name: 'Margaret', weight: 118},
    {name: 'John', weight: 170},
  ]
  
  let totalWeightOfThePeople = peopleInTheElevator.reduce((a, b)=>{
  
    return a.weight + b.weight;
    // this does work the first time through, it adds alex's weight plus person's weight
    // but the second time through, the result of the first calculation is 310, so in the second round, a is equal to 310
    // so then we're trying to add 310.weight + Mia.weight which makes no sense
  
  })
  // console.log(totalWeightOfThePeople)
  
  let totalWeightCorrect = peopleInTheElevator.reduce((a,b)=>{
    return a + b.weight
    // since a gets set equal to the result of the last iteration of the loop, we cant add a.weight, because a will be a number 
  }, 0)
  
  
  
  
  
  // const products = [{
  //   name: "AmazonBasics Apple Certified Lightning to USB Cable",
  //   price: 7.99,
  //   manufacter: "Amazon",
  //   reviews:
  //   [
  //     {  user: "Pavel Nedved",
  //       comments: "It was really usefull, strongly recommended",
  //       rate: 4
  //     },
  //     {  user: "Alvaro Trezeguet",
  //       comments: "It lasted 2 days",
  //       rate: 1
  //     },
  //     {  user: "David Recoba",
  //       comments: "Awesome",
  //       rate: 5
  //     },
  //     {  user: "Jose Romero",
  //       comments: "Good value for money",
  //       rate: 4
  //     },
  //     {  user: "Antonio Cano",
  //       comments: "It broked really fast",
  //       rate: 2
  //     },
  //   ]
  // }]
  
  
  
  // let formattedProducts = products.map((eachProduct)=>{
  
  //   let newProduct = {
  //     name: eachProduct.name,
  //     price: eachProduct.price,
  //     manufacter: eachProduct.manufacter
  //   };
  
  
  // let averageReview = eachProduct.reviews.reduce((a,b)=>{
  
  //   return a + b.rate
  
  // }, 0)/eachProduct.reviews.length;
  
  // newProduct.averageRating = averageReview;
  
  //   return newProduct;
  // })
  
  // console.log(formattedProducts)
  
  
  
  // let nums = [1,2,3,4,5,4,9,5,4,3,1]
  
  // let biggest = nums.reduce((a,b)=>{
  //   // if(a > b){
  //   //   return a 
  //   // } else {
  //   //   return b
  //   // }
  //   return a > b? a : b;
  // })
  
  // console.log(biggest);
  
  
  
  var people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Stuart", age: 21 },
    { name: "Nettie", age: 21 },
    { name: "Allen", age: 21 },
    { name: "Bill", age: 19 }
  ];
  
  // let over21 = people.filter((eachPerson)=>{
  //   // filter return statement does not really care WHAT value you return exactly, it just cares if the value is truthy or falsey
  
  //   // if(eachPerson.age >= 21){
  //   // return true;
  //   // } else {
  //   //   return false;
  //   // } 
  //   return eachPerson.age >= 21;
  //   // ^ this expression is literally just a fancy way of saying true or false
  // })
  
  // console.log(over21);
  
  
  // let oldPeopleWithCapitalizedNames = people.filter((eachP)=>{
  //   return eachP.age >= 21;
  // }).map((person)=>{
  //   let newThing = {
  //     name: person.name.toUpperCase(),
  //     age: person.age
  //   }
  //   return newThing;
  // })
  
  // console.log(oldPeopleWithCapitalizedNames);
  
  
  // let blah = [1,2,3,4,5,6,7,8,9];
  
  // blah.reverse();
  
  
  // console.log(blah);
  
  
  
  let nums = [11,5,4,3,5,6,7,8,9,22,9,31,8,4,8,6,9,2,7,5,4,3,8];
  
  
  
  people.sort((a,b)=>{
  
    if(a.age > b.age){
      return 1
    } else if (b.age > a.age){
      return -1
    } else {
        if(a.name > b.name){
        return 1
      } else if (b.name > a.name){
        return -1
            }else{
            return 0
          }
    }
  
    
  })
  
  
  