import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CreateAccount from "./auth/CreateAccount";
import NavBar from "./components/NavBar";
import ShowAll from "./pages/ShowAll";
import LogIn from "./auth/LogIn";
import { createContext} from "react";
import CreateCalculate from "./pages/CreateCalculate";


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  

  return (

        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/createaccount" element={<CreateAccount />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/showall" element={<ShowAll />} />
            <Route exact path="/createcalculate" element={<CreateCalculate />} />
          </Routes>
        </div>

  );
}

export default App;
