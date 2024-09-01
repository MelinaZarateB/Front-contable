/* Components */
import Login from "./components/Login/Login"
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import HeroSection from "./components/Landing/HeroSection/HeroSection";
import NextSection from "./components/Landing/NextSection/NextSection";
import Features from "./components/Landing/FeaturesSection/Features";
import SignUpVerification from "./components/SignUpVerification/SignUpVerification";
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
              <NavBar />
              <HeroSection />
              <NextSection />
              <Features />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/check-email" element={<SignUpVerification />}></Route>
      </Routes>
    </>
  );
}

export default App;
