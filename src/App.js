import './App.css';
import Welcome from "./pj_components/Welcome";
import CustomGreeting from "./pj_components/CustomGreeting"
import PjClock from './pj_components/PjClock';
import PjClockwithState from './pj_components/PjClockwithState';
import Counter from './pj_components/Counter';
import { Routes, Route, Link } from "react-router-dom";
import Nav from './pj_components/Nav';
import CheeseBurger from './pj_components/CheeseBurger';
import NotFound from './pj_components/NotFound';


function App() {
  return (
    <div className="App">
      <h1>This is a react app</h1>
      <Nav />
      <Routes>
        <Route path="/"  element={<CustomGreeting />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="customgreeting" element={<CustomGreeting userName="Patrick" age='31' />} />
        <Route path="pjclock" element={<PjClock time="10:30" />} />
        <Route path="pjclockwithstate" element={<PjClockwithState />} />
        <Route path="counter" element={<Counter />} />
        <Route path="cheeseburger" element={<CheeseBurger />} />
        <Route path="cheeseburger/:type" element={<CheeseBurger />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>


      {/* <Welcome />
      <CustomGreeting userName="Patrick" age='31' />
      <CustomGreeting userName="Eric" />
      <PjClock time="10:30" />
      <PjClockwithState />
      <Counter /> */}

    </div>

  );
  

}

export default App;
