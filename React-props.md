# React Props
Props is a special keyword in React that stands for properties and is used for passing data from one component to another. React Props are like function arguments in JavaScript and attributes in HTML.

```
import React from 'react'
let brand = "Mercedes";
function Demo(props) {
  return (
    <>
    <div>
      <h1>This is my {props="Mercedes"} car</h1>
    </div>
    </>
  )
}

export default Demo

```
