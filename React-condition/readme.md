# Conditional Rendering

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

# Conditional rendling

> If and else

> Element Variable

> Ternary Oprater

> Short Circuite Oprater

# If and Else in Class Component

```
import React, { Component } from 'react'

class UserGreat extends Component {
    constructor(props) {
      super(props)
      this.state = {
         userLog:false
      }
    }
    render() {
    if(this.state.userLog)
    {
    return <h1>Hello User</h1>
    }
    else
    {
    return <h1>Hello Gust</h1>
    }
  }
}
export default UserGreat
```
