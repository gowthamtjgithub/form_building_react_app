import logo from './logo.svg';
import './App.css';
import NewEmployeeComponent from './Employee';
import EmployeeComponent from './ValidateByYupLibrary';
import NewFormComponent from './NewForm';


function App() {
  return (
    <div className="App">
     <NewEmployeeComponent></NewEmployeeComponent>
     <EmployeeComponent></EmployeeComponent>
     <br></br>
     <NewFormComponent></NewFormComponent>
    </div>
  );
}

export default App;
