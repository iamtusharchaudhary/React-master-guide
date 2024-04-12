# Function Component

### Create a Function Component [rfce]
```
import React from 'react'

function Hello() {
  return (
    <div>Function Component</div>
  )
}
export default Hello
```

# Call The Component
```
import Hello from './component/Hello';

function App() {
  return (
    <Hello/>
  );
}
```
export default App;
