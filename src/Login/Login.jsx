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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#555555cd"
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
            className="input-icon"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <input
            type="text"
            className="input-field"
            placeholder="Email"
            autocomplete="off"
            required
          />
        </div>
        <div className="input-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="#555555cd"
            class="bi bi-lock-fill"
            viewBox="0 0 16 16"
            className="input-icon"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
          </svg>
          <input
            type="password"
            className="input-field"
            placeholder="Contraseña"
            autocomplete="off"
            required
          />
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
