import logo from './logo.svg';
import './App.css';
import { useIncrement } from "./useIncreament";

function App() {
  const [counter, increment] = useIncrement();
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
