import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiplyByTwo,
  incrementByAmount,
} from "./redux/counter/counterSlice";

import Navbar from "./comonents/navbar";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <button onClick={() => dispatch(decrement())}>-</button>
      The count is {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiplyByTwo())}>X2</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  );
}

export default App;
