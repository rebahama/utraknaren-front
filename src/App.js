import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CreateAccount from "./auth/CreateAccount";
import NavBar from "./components/NavBar";
import ShowAll from "./pages/ShowAll";
import LogIn from "./auth/LogIn";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleData = async () => {
    try {
      const { data } = await axios.get("https://utraknaren-drf.herokuapp.com/dj-rest-auth/user");
      setCurrentUser(data);
     
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/createaccount" element={<CreateAccount />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/showall" element={<ShowAll />} />
          </Routes>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
