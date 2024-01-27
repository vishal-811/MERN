import React,{ useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
const handleIncrement = useCallback(()=>{
        setCount((count)=>count+1);// if we can't update the count like this than it will do changes only once and another changes will not shown. 
},[])

    const handleDecrement=useCallback(()=>{
        setCount((count)=>count-1);
},[])

    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = React.memo(({ onIncrement, onDecrement }) => (
    <div>
    {console.log("rendered")}
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
