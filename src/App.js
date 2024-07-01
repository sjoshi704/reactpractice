import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Counter } from "./counter/counter";
import { Greetings } from "./Greeting";
import { Flag } from "./flag/flag";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <p> This is App component.</p>
      <h1 className="heading">
        <i> Welcome To React</i>{" "}
      </h1>
      <hr></hr>
      <p> This is Greeting component.</p>
      <h5>
        <Greetings name="Saurabh" greetings="Hello Good Morning"></Greetings>{" "}
      </h5>
      <hr></hr>
      <p> This is Counter component</p>
      <h5>
        <Counter counterName="Counter1"> </Counter>{" "}
      </h5>
      <hr></hr>
      {/* <h5><Counter counterName="Counter2"> </Counter> </h5> */}
      <hr></hr>
      <p> This is Flag Component</p>
      <Flag> </Flag>
    </div>
  );
}

export default App;
