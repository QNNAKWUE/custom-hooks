
import { useEffect, useState } from "react";
function App(){
    const [counter, setCounter] = useState(0);
    useEffect(() =>{
      console.log(counter)
    })
    return(
        <div className="App">
          {counter} <button onClick={() =>{
              setCounter(counter + 1)
          }}>Increase</button>
        </div>
    )
}