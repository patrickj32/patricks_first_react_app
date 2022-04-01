import './App.css';
import Welcome from "./pj_components/Welcome";
import CustomGreeting from "./pj_components/CustomGreeting"
import PjClock from './pj_components/PjClock';
import PjClockwithState from './pj_components/PjClockwithState';


function App() {
  return (
    <div className="App">
      <h1>This is a react app</h1>

      <Welcome/>
      <CustomGreeting userName="Patrick" age='31'/>
      <CustomGreeting userName="Eric" />
      <PjClock time="10:30"/>
      <PjClockwithState />

      
    </div>
  );
}

export default App;
