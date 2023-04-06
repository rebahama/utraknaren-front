import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import CreateAccount from "./auth/CreateAccount"
import NavBar from "./components/NavBar";
import ShowAll from "./pages/ShowAll";
import LogIn from "./auth/LogIn";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/createaccount" element={<CreateAccount />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/showall" element={<ShowAll />} />
      </Routes>
      
    </div>
  );
}

export default App;
