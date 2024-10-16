import './App.css'
import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0)
let countNum =()=>{
  setCount(  count + 1);
;
  console.log(count);
  
}
  return (
    <>
    
     <h1>{count}</h1>
     <button onClick={countNum}>count</button>
     <br />
     <br />
    </>
  )
}
export default CounterApp
