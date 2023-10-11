
import { useState } from 'react';
import './App.css'

function App() {
 
  // let counter = 12;
  // const addThevalue = () =>{
  //   //check that this function is working 
  //   console.log(Math.random()*10);
  //   counter = counter+1;
  //   console.log(counter);
  // } 

  // now lets use  the hook to update the state
  const [value , setValue ] = useState(0);
  const addThevalue = () =>{
    setValue(value+1);
    setValue(value+1);
    setValue(value+1);
  }
 
  // const removeTheValue = () =>{
   
  //   setValue(value-1);
 
  // }

  // assigment also done for this project 
  const removeTheValue = () =>{
    if(value>0){
    setValue(value-1);
    }
  }

  return (
   
    <>
     <h1>Code and Chai </h1> 
     <h2>Counter value is : {value}</h2>
     <button onClick={addThevalue} >Add value</button> 
     <br/>    
     <br />
     <button onClick={removeTheValue}>Remove value</button>  
       </>
  )
}

export default App
