import { useState } from "react";

export function Counter(props) {
    let [count, setCount] = useState(0);
    const increment = () => {
        let updatedCount = count + 1;
        setCount(updatedCount);
    }

    const decrement = () => {
        if (count > 0) {
            let updatedCount = count - 1;
            setCount(updatedCount);
        }
    }
    return <div>

        <h4 className="text-danger"> This is Counter Component</h4>
        <p> Count :{count}</p>
        <br></br>
        <button className="btn btn-success" onClick={increment}> Increment</button>
        <button className="btn btn-danger decrementBtn" onClick={decrement}> Decrement</button>
        <hr></hr>

        <h4 className="text-primary" > Counter component decrement</h4> 
        <p> Count: <span className="font-weight-bold h3">{count}</span></p>  
        <button className="btn btn-danger" id="decrementBtn" onClick={decrement}> Decrement</button>
        <button className="btn btn-success decrementBtn" onClick={increment}> Increment</button>

    </div>

}