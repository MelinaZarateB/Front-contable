/* Components */
import Login from "./components/Login/Login"
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
/* Hooks */
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <NavBar></NavBar>
              <Landing></Landing>
            </>
          }
        ></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  );
}

export default App;
