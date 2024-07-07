import { useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { CountAtom, EvenSelector } from "./stores/atoms/Count"

function App() {
  return (
    <> 
        {console.log("App render")}
        <RecoilRoot>      {/* So we have to wrap the nearest possible ancestor with the Recoil root so that wwe can use recoil hook in our components*/}
         <Count/>
        </RecoilRoot>
    </>
  )
}

function Count(){
     return(
      <>  
       {  console.log("count-render")}
      <CountRender/>
      <Button />
      <Evenrender/>
      </>
     )
}

function CountRender(){
    console.log("CountVal Component render")
    const count = useRecoilValue(CountAtom); //This hook is used to get only value.
     return(
      <>
         {count}
      </>
     )
}

function Button(){
     console.log("Button Render")
   //  const [count,setCount]= useRecoilState(CountAtom) //This hook is used to get both setval and the value.
         // The button component does not really need count to show, it just changes value so we can use a useSetRecoilState hook.
      const setCount = useSetRecoilState(CountAtom); //This hook is more optimised changes only the  value but does not cause the button 
      // Component to be render again which is quite good.This way we can make our app slightly more performant.
      //   setCount(count +1) or setCount(count => count+1) or setCount(function(c){ return c+1 });
        
   return(
      <>
         <button onClick={()=>setCount(count => count+1)}>Increase</button>
         <button onClick={()=>{setCount(count =>count-1)}}>Decrease</button>
      </>
   )
}


// Bad way of writing
// function Evenrender(){
//      const count =useRecoilValue(CountAtom);
//         return (
//          <div>
//               {count % 2===0 ?'The value is even LOl!':""}
//          </div>
//         )
//       }
// export default App

// This is bad because this component depends on a count variable if it is even than we have to render.


// Good way of writing it by using selector

function Evenrender(){
     const count = useRecoilValue(EvenSelector);
        return (
         <div>
           {count%2==0 ? ' It is a even Count LOL!':''}
         </div>
        )
}

export default App;