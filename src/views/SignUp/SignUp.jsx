import "./SignUp.css";
import { validations } from "./../../utils/validations";
import { provinces } from "../../utils/provinces";
/* Hooks */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* Icons */
import visibilityOn from "./../../assets/visibility-on.svg";
import visibilityOff from "./../../assets/visibility-off.svg";
import warning from "./../../assets/warning.svg";
import queryString from 'query-string';
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions";

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleButtonLogin = () => {
    navigate("/login");
  };
  const handleCheckEmail = () => {
    const query = queryString.stringify({ email: newUser.email });
    navigate(`/check-email?${query}`);
  };
  /* Estados */
  const [newUser, setNewUser] = useState({
    name: "",
    cuil: "",
    phone: "",
    address: "",
    province: "",
    city: "",
    email: "",
    password: "",
  });
  const [viewRequestPass, setViewRequestPass] = useState(false);
  const viewRequest = () => {
    if (viewRequestPass === false) setViewRequestPass(true);
    else {
      setViewRequestPass(false);
    }
  };

  const [touchedInput, setTouchedInput] = useState({});

  const [errors, setErrors] = useState({});

  const [isVisibilyPassword, setIsVisibilityPassword] = useState(false);

  /* Handlers */
  const handleInputs = (e) => {
    e.preventDefault()
    dispatch(signUp(newUser))
  }
  const handleTouched = (inputName) => {
    setTouchedInput({
      ...touchedInput,
      [inputName]: true,
    });
  };
  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validations({
        ...newUser,
        [event.target.name]: event.target.value,
      })
    );
  };
  const visibilityPassword = () => {
    if (isVisibilyPassword === false) setIsVisibilityPassword(true);
    else {
      setIsVisibilityPassword(false);
    }
  };

  return (
    <section className="parent-sign-up">
      <div className="child-sign-up">
        <div className="sign-up-header">
          <header>¡Regístrate y optimiza tu gestión hoy!</header>
        </div>
        <form className="container-sign-up-box">
          <div className="sign-up-box">
            <div>
              <div className="input-box-sign-up">
                <input
                  type="text"
                  name="name"
                  placeholder=""
                  className="input-field-sign-up"
                  autoComplete="off"
                  value={newUser.name}
                  onChange={handleChange}
                  onBlur={() => handleTouched("name")}
                  style={{
                    border:
                      errors.name && touchedInput.name ? "1px solid red" : "",
                  }}
                />
                <label className="label-input">Nombre</label>
                {errors.name && touchedInput.name && (
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
                )}
              </div>
              {errors.name && touchedInput.name && (
                <p
                  style={{ color: "red", marginTop: "4px", marginLeft: "10px" }}
                >
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <div className="input-box-sign-up">
                <input
                  type="number"
                  name="cuil"
                  pattern="\d{11}"
                  maxlength="11"
                  className="input-field-sign-up"
                  autoComplete="off"
                  value={newUser.cuil}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (
                      e.key !== "Backspace" &&
                      e.key !== "Tab" &&
                      (e.key < "0" || e.key > "9")
                    ) {
                      e.preventDefault();
                    }
                  }}
                  placeholder=""
                />
                <label className="label-input">Cuil/Cuit</label>
              </div>
            </div>
            <div>
              <div className="input-box-sign-up">
                <input
                  type="text"
                  name="phone"
                  placeholder=""
                  className="input-field-sign-up"
                  autoComplete="off"
                  value={newUser.phone}
                  onChange={handleChange}
                  onBlur={() => handleTouched("phone")}
                  onKeyDown={(e) => {
                    if (
                      e.key !== "Backspace" &&
                      e.key !== "Tab" &&
                      (e.key < "0" || e.key > "9")
                    ) {
                      e.preventDefault();
                    }
                  }}
                  style={{
                    border:
                      errors.phone && touchedInput.phone ? "1px solid red" : "",
                  }}
                />
                <label className="label-input">Teléfono</label>
                {errors.phone && touchedInput.phone && (
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
                )}
              </div>
              <div className="section-phone-request">

              </div>

              {errors.phone && touchedInput.phone && (
                <p
                  style={{ color: "red", marginTop: "4px", marginLeft: "10px" }}
                >
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <div className="input-box-sign-up">
                <input
                  type="text"
                  name="address"
                  placeholder=""
                  className="input-field-sign-up"
                  autoComplete="off"
                  value={newUser.address}
                  onChange={handleChange}
                  onBlur={() => handleTouched("address")}
                  style={{
                    border:
                      errors.address && touchedInput.address
                        ? "1px solid red"
                        : "",
                  }}
                />
                <label className="label-input">Dirección</label>
                {errors.address && touchedInput.address && (
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
                )}
              </div>
              {errors.address && touchedInput.address && (
                <p
                  style={{ color: "red", marginTop: "4px", marginLeft: "10px" }}
                >
                  {errors.address}
                </p>
              )}
            </div>
          </div>
          <div className="sign-up-box">
            <div className="input-box-sign-up">
              <div
                className={`select-container ${
                  newUser.province ? "has-value" : ""
                }`}
              >
                <select
                  name="province"
                  className="input-field-sign-up select"
                  value={newUser.province}
                  onChange={handleChange}
                  style={{
                    color: newUser.province ? "#000" : "#555",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled hidden>
                    Seleccione una provincia
                  </option>
                  {provinces?.map((province, i) => (
                    <option key={i} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
                <div className="floating-label">Seleccione una provincia</div>
              </div>
            </div>
            <div>
              <div className="input-box-sign-up">
                <input
                  type="text"
                  name="city"
                  placeholder=""
                  className="input-field-sign-up"
                  autoComplete="off"
                  value={newUser.city}
                  onChange={handleChange}
                  onBlur={() => handleTouched("city")}
                  style={{
                    border:
                      errors.city && touchedInput.city ? "1px solid red" : "",
                  }}
                />
                <label className="label-input">Ciudad</label>
                {errors.city && touchedInput.city && (
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
                )}
              </div>
              {errors.city && touchedInput.city && (
                <p
                  style={{ color: "red", marginTop: "4px", marginLeft: "10px" }}
                >
                  {errors.city}
                </p>
              )}
            </div>
            <div>
              <div className="input-box-sign-up">
                <input
                  type="text"
                  name="email"
                  placeholder=""
                  className="input-field-sign-up"
                  autoComplete="off"
                  value={newUser.email}
                  onChange={handleChange}
                  onBlur={() => handleTouched("email")}
                  style={{
                    border:
                      errors.email && touchedInput.email ? "1px solid red" : "",
                  }}
                />
                <label className="label-input">Email</label>
                {errors.email && touchedInput.email && (
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
                )}
              </div>
              {errors.email && touchedInput.email && (
                <p
                  style={{ color: "red", marginTop: "4px", marginLeft: "10px" }}
                >
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <div className="input-box-sign-up password">
                <input
                  type={isVisibilyPassword ? "text" : "password"}
                  name="password"
                  placeholder=""
                  className="input-field-sign-up password"
                  autoComplete="off"
                  value={newUser.password}
                  onChange={handleChange}
                  onBlur={() => handleTouched("password")}
                  onClick={viewRequest}
                  style={{
                    border:
                      errors.password && touchedInput.password
                        ? "1px solid red"
                        : "",
                  }}
                />
                <label className="label-input">Contraseña</label>
                {isVisibilyPassword === false ? (
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
                {errors.password && touchedInput.password && (
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
                  <li className="li-password"> <img src={warning} /> Mínimo 8 caracteres</li>
                  <li className="li-password"><img src={warning} /> Un caracter especial</li>
                  </div>
                  <div>
                  <li className="li-password"><img src={warning} /> Una letra mayúscula</li>
                  <li className="li-password"><img src={warning} /> Al menos un número</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </form>
        <div>
          <div className="input-submit-sign-up">
            <button
              className="submit-btn-sign-up"
              id="submit"
              type="submit"
              onClick={handleInputs}
              disabled={
                errors.name ||
                !newUser.name ||
                errors.phone ||
                !newUser.phone ||
                errors.address ||
                !newUser.address ||
                errors.city ||
                !newUser.city ||
                errors.email ||
                !newUser.email ||
                errors.password ||
                !newUser.password
              }
            ></button>
            <label htmlFor="submit">Regístrarse</label>
          </div>
          <div className="sign-up-link">
            <p>
              ¿Ya tienes una cuenta?{" "}
              <a onClick={handleButtonLogin} className="a-link-login">
                Ingresa acá
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
