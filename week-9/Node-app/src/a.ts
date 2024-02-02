// Assignment 1
// Write a TypeScript function named greet that takes a user's first name as an argument and logs a greeting message to the console.

function greet(firstname :string):void{
    console.log("hello " +firstname)
}

greet("Vishal")

// Assignment 2
// Write a TypeScript function named sum that takes two numbers as arguments and returns their sum. Additionally, invoke the function with an example.

function sum(a:number,b :number):number{
      return a+b;
}

console.log(sum(4,5));


// Assignment 3
// Write a TypeScript function named isLegal that takes an age as a parameter and returns true if the user is 18 or older, and false otherwise. Also, invoke the function with an example.
   
function isLegal(age:number):boolean{
          if(age>18){
            return true;
          }
          else{
            return false;
          }
   }

   console.log(isLegal(19));


//    Assignment 4
// Write a TypeScript function named delayedCall that takes another function (fn) as input and executes it after a delay of 1 second. Also, invoke the delayedCall function with an example.

      function delayedCall(fn :()=>void){   // take function as input with no parameters that's why use () => return us nothing void .
         setTimeout(()=>{
            fn();
             
         },1000)
      }

      delayedCall(function(){
        console.log("hello wolrd2");
      });
      