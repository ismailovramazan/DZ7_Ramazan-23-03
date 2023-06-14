import './App.css'
import {useDispatch, useSelector} from "react-redux";
import { increase,decrease } from "./CounterSlice.js";
import {useState} from "react";

function Counter() {

const [val, setValue] = useState(1)

const dispatch = useDispatch()

const number = useSelector(
   state => state.counter.value)
const handleIncrease = () => {
  dispatch(increase(val))
}
const handleDecrease = () => {
    if (number > 0) dispatch(decrease(val))
}
  return (
  <div className="container">
    <div className="input-container">
      <input
        type="number"
        onChange={(e) => {
          const value = e.target.value;
          setValue(value !== '' ? Number(value) : '');
        }}
        value={val}
      />
    </div>
    <button className="button" onClick={handleIncrease}>
      +
    </button>
    <span className="number">{number}</span>
    <button className="button" onClick={handleDecrease}>
      -
    </button>
  </div>
);

}

export default Counter
