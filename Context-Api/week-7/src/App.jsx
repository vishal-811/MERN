   // Prop drilling here i am moving the state downward.
import { useState } from 'react'

function App() {
      const [count , setCount] =useState(0);

  return (
    <div>
          <Count count={count} setCount={setCount}/> 
    </div>
  )
}


// Count Component

function Count({count,setCount}){   //we need to pass the setCount to the Count Component so that the Button Component can use it.
    //  So this is known as prop drilling passing variable down make harder to read and make a visually bad.
   return(
    <div>
        {count}
        <Button count={count} setCount={setCount}/>
    </div>
   )
}
 
//  Button Component
function Button({count,setCount}){
   return(
    <div>
       <button onClick={()=>{setCount(count+1)}}>Increase</button>
       <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
   )
}

export default App
