import { useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { CountAtom } from "./stores/atoms/Count"

function App() {
  return (
    <> 
        {console.log("App render")}
        <RecoilRoot>      {/* So we have to wrap the nearest possible ancestor with the Recoil root so that wwe can use recoil hook in our components*/}
         <CountRender/>
        </RecoilRoot>
    </>
  )
}

function CountRender(){
     return(
      <>  
       {  console.log("count-render")}
      <Count/>
      </>
     )
}

function Count(){
    console.log("CountVal Component render")
    const count = useRecoilValue(CountAtom); //This hook is used to get only value.
     return(
      <>
         {count}
         <Button />
      </>
     )
}

function Button(){
     console.log("Button Render")
    const [count,setCount]= useRecoilState(CountAtom) //This hook is used to get both setval and the value.
   return(
      <>
         <button onClick={()=>setCount(count+1)}>Increase</button>
         <button onClick={()=>{setCount(count-1)}}>Decrease</button>
      </>
   )
}
export default App
