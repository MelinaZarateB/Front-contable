import NavBar from "./NavBar/NavBar";
import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
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
