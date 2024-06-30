import { createContext } from "react";


export const  countContext = createContext({
     count:0,setCount:()=>{}   // this way we can make this context object more complex according to  our need...
});