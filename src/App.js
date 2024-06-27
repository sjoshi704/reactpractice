import logo from './logo.svg';
import './App.css';
import { Counter } from './counter/counter';

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
      <h1 className='heading'><i> Welcome To React</i> </h1>
      <p> This is App component.</p>
      <hr></hr>

     <h5><Counter name="Sam" greetings="Hello"></Counter> </h5>
     
     <h5><Counter name="100Rabh" surname="Joshi"></Counter> </h5>
  
    </div>
  );
}

export default App;
