import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleButtonSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <section className="container-login-box">
      <form className="login-box">
        <div className="login-header">
          <header>¡Bienvenido!</header>
        </div>
        <div className="input-box">
          <input
            type="text"
            className="input-field"
            placeholder=""
            autocomplete="off"
            required
          />
          <label className="label-input">Email</label>
        </div>
        <div className="input-box">
          <input
            type="password"
            className="input-field"
            placeholder=""
            autocomplete="off"
            required
          />
          <label className="label-input">Contraseña</label>
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
        <div className="input-submit">
          <button className="submit-btn" id="submit"></button>
          <label htmlFor="submit">Ingresar</label>
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
