import { useState } from "react";
import { useMemo } from "react";
// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.
 let i=0;
export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    i++;
    const expensiveValue =useMemo(()=>{
        console.log("render"+i);
        const factorial =(num)=>{
             if(num==0){
                return 1;
             }
             else if(num==1){
                 return 1;
             }
             else if(num<0){
                return -1;
             }
             else{
                return num*factorial(num-1);
             }
        }
        return factorial(input);   //function calling
    },[input]);
   

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}