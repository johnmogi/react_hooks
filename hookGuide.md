using several guides, webdev and udemy to practice hooks
hooks cheatsheet.

npx create-react-app client
delete .git folder
reflush gitignore

basic usage - basic counter
https://www.youtube.com/watch?v=O6P86uwfdR0&t=315s&ab_channel=WebDevSimplified

0. import React , { useState } from 'react';

0.   const [counter, setCount] = useState(4) - 
destructure an array to use useState, first param is what gets returned, 
the second is the function with iteration


0. set App inner function:
import React , { useState } from 'react';
function App() {
  const [counter, setCount] = useState(4)
  function decreaseCount() {
   //  setCount( counter  - 1) // this works but the following is much better and can be reused:
    setCount(previousCount => previousCount - 1)
  }
  function increaseCount() {
    setCount(previousCount => previousCount + 1)
  }
  return (
    <div className="App"> 
    <button onClick={decreaseCount}>-</button>
    <span>
      {counter}
      </span> 
      <button onClick={increaseCount}>+</button>
    </div>
  )
}
export default App;

0. useState can use a prebuilt function instead of a value so that it will run only once:
  const [counter, setCount] = useState(fibonacci) // will slow down our code since it will run on every "event"
    const [counter, setCount] = useState(() =>{
        // will run only once
    console.log('return 4')
    return 4
    })
    function runFunction(){
        // will run on each click
  console.log('running');
  return 4;
}
 const [counter, setCount] = useState(runFunction())

 0. objects needs to be spreaded or they will be overrun:
 const [state, setState] = useState({ count: 4 , theme: 'blue'})
 const count = state.count
 const theme = state.theme
 function sample() {
     setState(prevState =>{
         return (...prevState, count: prevState.count - 1)
     })
 }

0. we can now chain endless useState hooks (but keep them in order)

on to the next exercise - revise and make a color changing button.
make a fetch api crud 
plan out python stuff separately




