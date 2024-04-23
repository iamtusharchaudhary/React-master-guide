# Redux Toolkit
Redux is a JS library for predictable and maintainable global state management. Redux provides a predictable state container that helps developers manage the state of their applications in a more organized and centralized manner.

<ul>
  <li>Predictable</li>
  <li>Centralized</li>
  <li>Debuggable</li>
  <li>Flexible</li>
</ul>

```
// import redux from 'redux';
const redux = require('redux')
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE';
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "This is action"
    }
}
// (prevState,action)=> newState
const initialState = {
    numOfCake: 10
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCake: state.numOfCake - 1
        }
        default: return state
    }
}
// step 4
const store = createStore(reducer);
console.log("Stock Of cake", store.getState());
store.subscribe(() => console.log("Updated cake Count", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

```



