// Learning about the generics 
// Generics are a ts feature that allow us to pass  in various type of data and create a reusable code to  handle different inputs.
// In this the person who is making the function doesn't sure about the type, the person who is calling the function will know define its type.

// ----------------- Step 1 ---------------------//
//  This Give us a error , that the toUppercase property does not exist on the type string|number specially on type number.
//  Our function does not infer the type automatically , this is the major problem if we send only string not number than it should 
//  Work properly but it does not work so for this major problem we learn about the generics.

// function identity(arr:(string | number)[]){
//     return arr[0];
// }

// const val = identity(["vishal" , "sharma" , 1,2,3]);
// console.log(val.toUpperCase());

// ------------------------ Step 2 ------------------------//

function identity2<T> (arr : T[]):T{
    return arr[0];
}

const val1  = identity2<number>([1,2,3]);
const val2  = identity2<string>(["vishal" , "sharma"]);
const val3  = identity2<string|number>(["vishal" , "sharma" ,1,2]);

console.log(val1);
console.log(val2.toUpperCase());  // for  this it work fine bcz it type is just string
console.log(val3);  


