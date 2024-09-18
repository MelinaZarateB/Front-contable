import "./ChangePassword.css";
import { useState, useEffect } from "react";
import visibilityOff from "./../../assets/visibility-off.svg";
import visibilityOn from "./../../assets/visibility-on.svg";
import warning from "./../../assets/warning.svg";
import { changePassword } from "../../utils/validations";
import { changePasswordAction } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const ChangePassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  /*const getQueryParams = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  const token = getQueryParams("token");*/
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lbGluYXphcmF0ZTc3QGdtYWlsLmNvbSIsInN1YiI6IjY2ZTllOGE1ZTljODFkYmFmOTlkZGFkZCIsImFjdGlvbiI6ImZvcmdvdC1wYXNzd29yZCIsImlhdCI6MTcyNjYxNjY1MiwiZXhwIjoxNzI2NjE2OTUyfQ.bDrf2p_zWo35HZ1PYayJ7mbTS-t_KAJVg_favzei9Y8";

  /* States */
  const [password, setPassword] = useState({
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isVisibilityPassword, setIsVisibilityPassword] = useState(false);

  /* Handlers */
  const visibilityPassword = () => {
    if (isVisibilityPassword === false) setIsVisibilityPassword(true);
    else {
      setIsVisibilityPassword(false);
    }
  };
  const handleChangePassword = () => {
    if (token && password) {
      dispatch(changePasswordAction(token, password.password));
    }
  };
  const handleChange = (event) => {
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });
    setErrors(
      changePassword({
        ...password,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <section className="container-change-password">
      <div className="change-password-box">
        <div className="title-change-password">
          <header>Recuperar contraseña</header>
        </div>
        <div className="container-description-change-password">
          <p>
            Ingrese la nueva contraseña con la que se registrara posteriormente
          </p>
        </div>
        <div>
          <div className="input-box-sign-up password">
            <input
              type={isVisibilityPassword ? "text" : "password"}
              name="password"
              placeholder=""
              className="input-field-sign-up password"
              autoComplete="off"
              value={password.password}
              onChange={handleChange}
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
            {errors.password && (
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
            )}
          </div>
          <div className="section-password-request">
            <ul className="grid-section-request">
              <div>
                <li className="li-password">
                  {" "}
                  <img src={warning} /> Mínimo 8 caracteres
                </li>
                <li className="li-password">
                  <img src={warning} /> Un caracter especial
                </li>
              </div>
              <div>
                <li className="li-password">
                  <img src={warning} /> Una letra mayúscula
                </li>
                <li className="li-password">
                  <img src={warning} /> Al menos un número
                </li>
              </div>
            </ul>
          </div>
        </div>
        <button
          className="button-change-password"
          onClick={handleChangePassword}
          disabled={!password.password || errors.password}
        >
          Cambiar contraseña
        </button>
      </div>
    </section>
  );
};
export default ChangePassword;
