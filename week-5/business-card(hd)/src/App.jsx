import React, { useState } from 'react'
import './App.css'

function App() {
 

  return (
   <>
     {/* <Card data={data[0]}/>
     <Card data={data[1]}/>
     <Card data={data[2]}/>
     <Card data={data[3]}/> */}
     {/* use map function */}
      
      {data.map((items,index)=>{
        return (
          <Card key={index} data={items}/>
        )
      }   
      )}
   </>

      
  )
}

// hardcored data
const data=[
  {
    name:"lokeshwar",
    description:"A student in a college",
    interest:["coding" ,"games" ,"App development"],
    links:["Twitter","linkedin"]
  },
  {
    name:"Spider",
    description:"A student in a college",
    interest:["coding" ,"games" ,"App development"],
    links:["Twitter","linkedin"]
  },
  {
    name:"Batman",
    description:"A student in a college",
    interest:["coding" ,"games" ,"App development"],
    links:["Twitter","linkedin"]
  },
  {
    name:"Ironman",
    description:"A student in a college",
    interest:["coding" ,"games" ,"App development"],
    links:["Twitter","linkedin"]
  },
]


// card component
const Card=(props)=>{
  console.log(props);
  const {name,description,interest,links}=props.data;
  const cardStyle = {
    border: '2px solid black',
    padding: '20px',
    margin:'20px',
  };
     return(
          <>
            <div style={cardStyle}>
            <h1>{name}</h1>
           <h2>{description}</h2>
           <ul>
               <h3>interest</h3>
               {interest.map((item)=>{
                  return(
                    <>
                  <li>{item}</li>
                   <br></br>
                   </>
                  )
               })
  
               }
           </ul>
           {/* links */}
           <ul>
           <h3>links</h3>
           <button>{links[0]}</button>
           <button>{links[1]}</button>
           </ul>
            </div>
          </>
     )
}
export default App
