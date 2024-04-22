// In this like dislike concept are describe :-

import React, { useState } from 'react'

function ExampleOne() {
    // step 1
    let data = 0;
    // setp 2
    const [count, setCount] = useState(data)
    let superLike = () => {
        // setCount(count + 10);
        for (let i = 1; i <= 50; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div className='card'>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Like</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={superLike}>super like </button>
        </div>
    )
}
export default ExampleOne
