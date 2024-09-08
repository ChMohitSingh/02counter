import {useState} from'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let [counter,setCounter] = useState(15)
  // name kuch bhi ho sakte hai counter,setCounter
  // counter variable setCounter function jo counter ko updare krne k kam aa rha hai

 // let counter = 15 // ye yahi kam kr rha hai const[counter,setCounter] = useState(15)
  const addValue = () =>{
    if(counter < 20){
    console.log("Value added",counter);
  //  console.log("Value added",Math.random())
  
    //counter = counter+1 // ise to jab use karege jab ese value denge let counter = 15
    setCounter(counter+1)
    // setCounter(counter) agr uper counter= counter+1 de rkha hao to ase bhi kr sakte hai

    //setCounter(prevCounter => prevCounter + 1)
    //setCounter(prevCounter => prevCounter + 1) i tarikhe se do bar increase ho jae agr de rkhe ho ase hi krna hai to vese ise hum dirext ase bhi kr sakte hai  counter = couner+2
  }
}

  const removeValue = () =>{
    if(counter >0){
    setCounter(counter-1)
    }
  }


  return (
    <>
    <h1>02 counter project</h1>
    <h2>Counter value {counter}</h2>
    <button
     onClick={addValue}  // onClick={addValue} used to click the butto 
     > Add Value {counter}</button>

    <br></br>

    <button
    onClick={removeValue}
    > Remove Value {counter}</button>
    </>
   
  )
}

export default App;
