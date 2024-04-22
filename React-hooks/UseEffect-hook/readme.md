# UseEffect Hook
The useEffect hook is a fundamental part of React's functional component model. It allows you to perform side effects in your components, such as data fetching, DOM manipulation, and subscription management, after the component has rendered. useEffect takes two arguments: a function and an optional array of dependencies.

### Network Fetch With Axios
#### 1. Install axios using command

> npm install axios
 
or

> npm i axios   

<hr/>

https://jsonplaceholder.typicode.com/

<hr/>

# Example For Fetch Data
```
import axios from 'axios'
import React , { useState , useEffect} from 'react'

function DataFetch() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    },[])
  return (
      <div>
          <ul>
              {
                  posts.map(post => (<li key={post.id}>{post.title }</li>))   
          }
          </ul>
      </div>
  )
}

export default DataFetch
```

# Example For Search Data
```
import axios from 'axios'
import React , { useState , useEffect} from 'react'

function DataFetchTwo() {
    const [posts, setPosts] = useState([])
    const [id,setId]=useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    },[id])
  return (
      <div>
          <input
              type='text'
              value={id}
              onChange={e=>setId(e.target.value)}
          />
          <h1>
               {posts.title }   
          </h1>
      </div>
  )
}

export default DataFetchTwo
```
