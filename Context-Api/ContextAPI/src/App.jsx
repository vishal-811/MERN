import { useState } from "react"
import { countContext } from "./Context";
import { useContext } from "react";

function App() {
    const [count,setCount] =useState(0);
  return (
      <>
          <countContext.Provider value={[count , setCount]}>
            <Count />  
          </countContext.Provider>
      </>
  )
}

function Count({setCount}){
  return(
    <div>
          <CountRenderer />
              <Button/>
    </div>
  )
}

 function CountRenderer({}){
     const [count] =useContext(countContext)
     return (
      <div>
          {count}
      </div>
     )
 }
function Button(){
     const [count,setCount] =useContext(countContext);
  return(
    <div>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
  )
}
export default App
