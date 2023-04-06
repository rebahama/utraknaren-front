import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import CreateAccount from "./auth/CreateAccount";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/createaccount" element={<CreateAccount />} />
      </Routes>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
