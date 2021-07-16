import React, { useState } from 'react';

export default function App(){
    const [ count, setCount] = useState(4);

    function decrementCount(){
        setCount(count - 1)
    }

    return(
        <>
            <button onClick={decrementCount}>-</button>
            <span>0</span>
            <button>+</button>
        </>
    )
}