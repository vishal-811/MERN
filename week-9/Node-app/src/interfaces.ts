// Interfaces is a way to structure our object
// Problem: Create a function IsLegal that returns true or false if a user is above 18. It takes a user as an input.

interface User{
     FirstName: string,
     LastName : string,
     age:number
}

function IsLegal (user:User):boolean{
      if(user.age>18){
        return true;
      }
      else{
        return false;
      }
}

const user ={
    FirstName:"Vishal",
    LastName :"Sharma",
    age:17
}

console.log(IsLegal(user));