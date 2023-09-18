import "./App.css";
import LineChart from "./components/LineChart/LineChart";

import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Users></Users>
    </>
  );
}

export default App;
