import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../../engine/slice";

function Counter() {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter);

    return (
        <div style={{padding: "40px", width: "200px", textAlign: "center", background: "lightblue"}}>
            <h1>Value: { count }</h1>
            <button
                onClick={() => {dispatch(increment())}}
                style={{width: "26px", margin: "0 2px"}}
            >
                +
            </button>
            <button
                onClick={() => {dispatch(decrement())}}
                style={{width: "26px", margin: "0 2px"}}
            >
                -
            </button>
        </div>
    )
}

export default Counter;