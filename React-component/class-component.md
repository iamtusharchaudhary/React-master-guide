# Class Component

### Create a Class Component [rcc]

```
import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
      </div>
    )
  }
}
```

# Call The Class Component

```
import logo from './logo.svg';
import './App.css';
import Demo from './Demo';

function App() {
  return (
    <Demo/>
  );
}

export default App;
```
