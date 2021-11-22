/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a,b) {
    return a + b;
  }
  console.log(`The result = ${add(15,10)}`);
  
 
 
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  
  function isEven(value) {
  //check if the number is even
  if (value%2 == 0)
    return true;
  else
    return false;
    }
   console.log(`Check if the number given is even or not = ${isEven(16)}`);
  
  
 
 
 
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
 
  function greet(name) {
      return `Hello ${name} !!!`;
    }
    console.log(`The greeting = ${greet('Nico')}`);
  
  


  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
  
    if(age >= 18)
      return true;
    else 
      return false;
   }
   console.log(`Check if the age is 18 or over = ${isAnAdult(17)}`);
  
  
 
 
 
 
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
  
    if(!isAnAdult(age))
    {
       return 18-age;
    }
    return 0;
    }
    console.log(`Check how many years are left until adulthood = ${yearsToAdulthood(10)}`);
  
 
 
 
 
 
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(age,name) {
  
      if(isAnAdult(age)){
          return greet(name);
      }else{
          if(yearsToAdulthood(age)<18){
              return `You can only come after ${yearsToAdulthood(age)} years`;
          }
        }
    }
    console.log(admit(10,'Nico'));