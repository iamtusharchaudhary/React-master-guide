# Network Call In React ( Axios )

### 1. Install Axios
```
npm install axios
or
npm i axios
```
https://jsonplaceholder.typicode.com/

### 2. Create Class Component JustList
 ```
import axios from 'axios'
import React, { Component } from 'react'
class JustList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          posts: [],
          errMsg:''
      }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(Response => {
                console.log(Response)
                this.setState({posts:Response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errMsg:'Data Not Found'})
            })
    }
    render() {
        const { posts , errMsg }= this.state

        return (
            <div className='container'>
                <h1>Article List Sample With id , title , message</h1>
                {
                    posts.length ?
                        posts.map(post =>
                            <div className='post' key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>) :
                        null
                }
                {
                    errMsg ? <div>{ errMsg }</div> : null
                }
            </div>
        )
    }
}
export default JustList
```
