/* Components */
import Login from "./views/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./views/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Dashboard from "./views/Dashboard/Dashboard";
import ChangePassword from "./views/ChangePassword/ChangePassword";
import RestorePassword from "./views/RestorePassword/RestorePassword";
import SignUpVerification from "./views/SignUpVerification/SignUpVerification";
import UploadInvoices from "./views/UploadInvoices/UploadInvoices";
import AccountActivated from "./views/AccountActivated/AccountActivated";
import Landing from "./views/Landing/Landing";
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
              <Landing></Landing>
              <Footer />
            </>
          }
        ></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/check-email" element={<SignUpVerification />}></Route>
        <Route path="/restore-password" element={<RestorePassword />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/upload-invoices" element={<UploadInvoices />}></Route>
        <Route path="/account-activated" element={<AccountActivated />}></Route>
      </Routes>
    </>
  );
}
export default App;
