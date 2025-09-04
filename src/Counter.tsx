import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { decrement, increment, incrementByAmount } from "./store/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={()=>{
            dispatch(incrementByAmount(2))
        }}>+2</button>
        <button onClick={()=>{
            dispatch(increment())
        }}>+</button>
        <button onClick={()=>{
            dispatch(decrement())
        }}>-</button>
        </div>
    );
};

export default Counter;
