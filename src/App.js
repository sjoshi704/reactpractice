import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
// import StockAvailability from "./StockAvailability";
// import { Counter } from "./counter/counter";
// import { Greetings } from "./Greeting";
// import { Flag } from "./flag/flag";
// import { ConditinalFlag } from "./flag/conditionalFlagTrueFalse";
// import { UserProfile } from "./UserProfile/userProfile";
// import { ToDoLists } from "./ToDoLists/ToDoLists";
// import { UserList } from "./UserProfile/UserList";
// import {FormHandling} from "./FormHandling/FormHandling";
// import {FormikLibraryFormHandling} from "./FormHandling/FormikLibraryFormHandling";
// import { ImageCourosel } from "./ImageCourosel/ImageCourosel";
// import { EmployeeListForm } from "./FormHandling/EmployeeListForm";
import { CrudOperations } from "./CRUD/CrudOperations";




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
      {/* <p> This is App component.</p>
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
      {/* <hr></hr>
      <p> This is Flag Component</p>
      <Flag> </Flag>

      <hr></hr>
      <ConditinalFlag> </ConditinalFlag> */}
      {/* <hr></hr> */}

      {/* <UserProfile> </UserProfile> */}
      {/* <hr></hr>*/}

      {/* <ToDoLists> </ToDoLists> */}
      {/* <hr></hr>  */}
      {/* <UserList> </UserList> */}
      {/* <hr></hr> */}
      {/* <FormHandling> </FormHandling> */}
      {/* <hr></hr> */}
      {/* <FormikLibraryFormHandling> </FormikLibraryFormHandling> */}
      <hr></hr>
      {/* <ImageCourosel> </ImageCourosel> */}
      <hr></hr>
      {/* <StockAvailability> </StockAvailability> */}
      {/* <hr></hr> */}
      {/* <EmployeeListForm> </EmployeeListForm>
      <hr></hr> */}
      <CrudOperations> </CrudOperations>
       {/* <hr></hr> */}


    </div>
  );
}

export default App;
