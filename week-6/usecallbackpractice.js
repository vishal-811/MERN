import React, {useState} from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';


// ----------Step-3---------
// useCallback is used if the function doesnot change across re-renders ,we will give it dependencies when that dependencies changes 
// than actually the function changes and re-rendered again.But if function does not change than it will give us a benefit of not 
// re-rendering the child again this is when useCallbak uses.

const App=()=>{
    const[exchange1Data,setExchange1Data] =useState({});
 const[exchange2Data ,setExchange2Data] =useState({});
 const [bankData,setBankData] =useState({});

 useEffect(()=>{
     setExchange1Data({
         returns:100
     })
 },[])

 useEffect(()=>{
     setExchange2Data({
         returns:100
     })
 },[])

 useEffect(()=>{
     setTimeout(() => {
         setBankData({
             income:100
         })
     }, 5000);
 },[])


 const cryptoReturns =useCallback(function(){
     return exchange1Data.returns+exchange2Data.returns;
 },[exchange1Data,exchange2Data])

    return (
         <>
             <Child cryptoReturns={cryptoReturns()}/>
          <Dummy></Dummy> 
         </>
    )
}



const Dummy =React.memo(()=>{
        console.log("re-renderedDummy")
        return (
            <h1>hiii</h1>
        )
    })



// child component with memo
const Child=React.memo((({cryptoReturns})=>{
    console.log("re-rendered")
    return (
        <div>
            your cryptoreturns are {cryptoReturns}
        </div>
    )
}))

export default App;










// // ---------Step-2------------
// // So here the cryptoreturns is find after the re-rendered and we pass it as a props from the parent to the child.
// // We also create a dummy component here . Now after 5 seconds when the bankdata is set than the parent will re-rendered and it's child 
// // also re-rendered(Child,dummy) .Now to avoid this we can use memo .
// // difference between memo and useMemo().
// // useMemo() is a hook that would make sure that certain codebases only run if some dependecies have change in a render.
// // Memo skip re-rendering a component when it props are unchanged
// // so here we send props from parent to child components  and we wan't to skip the re-rendering of child components when it's props are 
// // unchanged. so we will use memo 
// // Now here the dummy component work fine when parent re-render it does not rendered again but the child component re-rendered we have  
// // the same props we didn't make any changes because when we define functions across re-renders it will change.(Do onething in console 
// // to learn more about it create two function a{console.log("hi")}, function b{(console.log('hi))} if we write a==b it will give me false,
// // iski body to same hn but function behave like this thats why when we are using React.memo agr hum apne props change nhi b kr rhe hn it still
// // show us changes that why it re-rendered again so React.memo fails here)


const App=()=>{
    const[exchange1Data,setExchange1Data] =useState({});
 const[exchange2Data ,setExchange2Data] =useState({});
 const [bankData,setBankData] =useState({});

 useEffect(()=>{
     setExchange1Data({
         returns:100
     })
 },[])

 useEffect(()=>{
     setExchange2Data({
         returns:100
     })
 },[])

 useEffect(()=>{
     setTimeout(() => {
         setBankData({
             income:100
         })
     }, 5000);
 },[])


 const cryptoReturns =function(){
    console.log("re-rendered")
     return exchange1Data.returns+exchange2Data.returns;
 }

    return (
         <>
             <Child cryptoReturns={cryptoReturns()}/>
          <Dummy></Dummy> 
         </>
    )
}

// Dummy component without memo
// const Dummy =()=>{
//     console.log("re-rendered1")
//     return (
//         <h1>hiii</h1>
//     )
// }

// dummy component with React.memo

const Dummy =React.memo(()=>{
        console.log("re-renderedDummy")
        return (
            <h1>hiii</h1>
        )
    })

// child component without React.memo
// const Child=({cryptoReturns})=>{
//     return (
//         <div>
//             your cryptoreturns are {cryptoReturns}
//         </div>
//     )
// }


// child component with memo
const Child=React.memo(({cryptoReturns})=>{
    return (
        <div>
            your cryptoreturns are {cryptoReturns}
        </div>
    )
})

export default App;









//------ step 1----------
// initially the exchange1data and exchange2data is set after renders and the cryptoreturns are calculated after renders , but after 5 sec.,
// when the bankdata is set the cryptoreturns again call , but this time the cryptoreturns is not updated so it is un-necessary calculation.
// we have to avoid this un-necessary re-rendering , so let's deep dive in to it .
const App=()=>{
    const[exchange1Data,setExchange1Data] =useState({});
const[exchange2Data ,setExchange2Data] =useState({});
const [bankData,setBankData] =useState({});

useEffect(()=>{
    setExchange1Data({
        returns:100
    })
},[])

useEffect(()=>{
    setExchange2Data({
        returns:100
    })
},[])

useEffect(()=>{
    setTimeout(() => {
        setBankData({
            income:100
        })
    }, 5000);
},[])


const cryptoReturns =function(){
    return exchange1Data.returns+exchange2Data.returns;
}

const incometax=(cryptoReturns()+bankData.income)*0.3;

return (
    <h1>your income returns are {incometax}</h1>
)
}

export default App;