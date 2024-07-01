import { useState } from "react";

export function Flag() {
  const [currentState, changeState] = useState("online");

  const on = () => {
    changeState("online");
  };

  const off = () => {
    changeState("Offline");
  };

  return (
    <div>
        <h2 className="text-primary">I am {currentState} </h2>
        <br></br>
      <button className="btn btn-success" onClick={on}> On </button>
      <button className="btn btn-danger decrementBtn" onClick={off}> Off</button>
    </div>
  );
}
