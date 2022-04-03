import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(40);

  const increaseCount = () => setCount(count + 1);

  // // increasecount another option:
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  const reduceCount = () => setCount(count - 1);

  return (
    <div className="design">
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={reduceCount}>Reduce</button>
    </div>
  )
}

export default App;
