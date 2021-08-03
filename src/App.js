import "./App.css";
import { Clicker } from "./Components/Clicker";

export const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Clicker num={0} />
        <Clicker num={0} />
        <Clicker num={0} />
        <Clicker num={0} />
        <Clicker num={0} />
      </div>
    </div>
  );
};
