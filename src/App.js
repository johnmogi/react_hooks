import React , { useState } from 'react';


function runFunction(){
  console.log('running');
  return 4;
}
function App() {
  // const [counter, setCount] = useState(() =>{
  //   console.log('return 4')
  //   return 4
  // })
  const [counter, setCount] = useState(() => runFunction())
  function decreaseCount() {
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
