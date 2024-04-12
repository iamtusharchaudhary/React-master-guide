# What Is Component ?

A component is a reusable piece of UI that can be composed together to create complex user interfaces. Components can be thought of as custom HTML elements that are defined by JavaScript code.

#### React components can be of two types :

> Function Component

> Class Component

# React Function Component [rfce]

React Js Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. Function components can be written using much less code, are easier to understand.

```
import React from 'react'

function Hello() {
  return (
    <div>Hello World!</div>
  )
}

export default Hello
```

# React Arrow Function Component [rafce]

```
import React from 'react'

const Hello = () => {
  return (
    <div>Hello World!</div>
  )
}

export default Hello
```

# React Class Component [rcc]

```
import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}
```




