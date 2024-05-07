import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./VendingMachine";
import Water from "./Water";
import Juice from "./Juice";
import Soda from "./Soda";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/water" element={<Water />} />
          <Route path="/juice" element={<Juice />} />
          <Route path="/soda" element={<Soda />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
