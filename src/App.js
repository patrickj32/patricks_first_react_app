import './App.css';
import Welcome from "./pj_components/Welcome";
import CustomGreeting from "./pj_components/CustomGreeting"

function App() {
  return (
    <div className="App">
      <h1>This is a react app</h1>

      <Welcome/>
      <CustomGreeting userName="Patrick"/>
      <CustomGreeting userName="Eric" />

      
    </div>
  );
}

export default App;
