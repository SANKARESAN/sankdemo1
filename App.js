//  import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import ConditionalRenComp from './components/ConditionalRenComp';
import CssComp from './components/CssComp';
import EventComp from './components/EventComp';
import FuncComp from './components/FuncComp';
import MyStateComp from './components/MyStateComp';
import SankareshFunc from './Task/SankareshComp';

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
     {/*
      <h1>Welcome you all in react sessions</h1>
     
      <SankareshFunc/>
      <ClassComp/>

      <FuncComp fname ="sankaresh S" post = "Python developer"></FuncComp>     
      <ClassComp fname = "raju"  post = "Java developer"/>
      
      <SankareshFunc fname = "sushma" lname = "prince" salary = '20000' gender = "Female" address = "chennai"/>

      <EventComp/>
      <MyStateComp/>
      <ConditionalRenComp/>
    */}
      <CssComp/>
    </div>
  );
}

export default App;
