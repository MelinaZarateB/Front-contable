import "./Login.css";
import validations from "../../utils/validationsLogin";
/* Hooks */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* Icons */
import visibilityOn from "./../../assets/visibility-on.svg";
import visibilityOff from "./../../assets/visibility-off.svg";
import validationsLogin from "../../utils/validationsLogin";

const Login = () => {
  const navigate = useNavigate();

  /* States*/
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isVisibilityPassword, setIsVisibilityPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const [touchedInput, setTouchedInput] = useState({});

  /* Handlers */
  const handleButtonSignUp = () => {
    navigate("/sign-up");
  };
  const handleTouched = (inputName) => {
    setTouchedInput({
      ...touchedInput,
      [inputName]: true,
    });
  };
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validationsLogin({
        ...user,
        [event.target.name]: event.target.value,
      })
    );
  };
  const visibilityPassword = () => {
    if (isVisibilityPassword === false) setIsVisibilityPassword(true);
    else {
      setIsVisibilityPassword(false);
    }
  };

  return (
    <section className="container-login-box">
      <form className="login-box">
        <div className="login-header">
          <header>¡Bienvenido!</header>
        </div>
        <div className="container-input-login">
          <div>
            <div className="input-box">
              <input
                type="text"
                name="email"
                className="input-field"
                placeholder=""
                autocomplete="off"
                value={user.email}
                onChange={handleChange}
                onBlur={() => handleTouched("email")}
              />
              <label className="label-input">Email</label>
            {/* {errors.email && touchedInput.email &&(
                <span className="span">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-exclamation-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                  </svg>
                </span>
              )}*/}  
            </div>
           {/* {errors.email && touchedInput.email && (
              <p style={{ color: "red", marginTop: '5px', marginLeft: '10px' }}>{errors.email}</p>
            )}*/} 
          </div>
          <div>
          <div className="input-box password">
            <div className="input-child-password">
              <input
                type={isVisibilityPassword ? "text" : "password"}
                name="password"
                className="input-field password"
                placeholder=""
                autocomplete="off"
                value={user.password}
                onChange={handleChange}
                onBlur={() => handleTouched("password")}
              />
              <label className="label-input">Contraseña</label>
              {isVisibilityPassword === false ? (
                <img
                  src={visibilityOff}
                  style={{ cursor: "pointer" }}
                  onClick={visibilityPassword}
                />
              ) : (
                <img
                  src={visibilityOn}
                  style={{ cursor: "pointer" }}
                  onClick={visibilityPassword}
                ></img>
              )}
            {/*  {errors.password && touchedInput.password && (
                <span className="span password">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-exclamation-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                  </svg>
                </span>
              )}  */} 
            </div>
          </div>
          {/* {errors.password && touchedInput.password &&(
              <p style={{ color: "red", marginTop: '5px', marginLeft: '10px' }}>{errors.password}</p>
            )}*/}
          </div>
          <div className="forgot">
            <section className="section-login">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Recordarme</label>
            </section>
            <section className="section-login">
              <a href="#" className="a-link-forgot-password">
                Olvidé mi contraseña
              </a>
            </section>
          </div>
        </div>
        <div className="input-submit">
          <button 
          className="submit-btn" 
          type="submit"
          id="submit"
          disabled={
            !user.email || errors.email || !user.password ||
            errors.password
          }></button>
          <label htmlFor="submit"
         >Ingresar</label>
        </div>
        <div className="sign-up-link">
          <p>
            ¿No tienes una cuenta?{" "}
            <a onClick={handleButtonSignUp} className="a-link-login">
              Regístrate acá
            </a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
