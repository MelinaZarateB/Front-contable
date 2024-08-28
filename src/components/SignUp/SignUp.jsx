import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validations from "./../../utils/validations";
import { provinces } from "../../utils/provinces";

const SignUp = () => {
  const navigate = useNavigate();
  const handleButtonLogin = () => {
    navigate("/login");
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

  const [touchedInput, setTouchedInput] = useState({});

  const [errors, setErrors] = useState({});

  /* Handlers */
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

  return (
    <section className="parent-sign-up">
      <div className="child-sign-up">
        <div className="sign-up-header">
          <header>¡Regístrate y optimiza tu gestión hoy!</header>
        </div>
        <form className="container-sign-up-box">
          <div className="sign-up-box">
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
              />
              <label className="label-input">Nombre</label>
              {errors.name && (
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
            <div className="input-box-sign-up">
              <input
                type="text"
                name="cuil"
                className="input-field-sign-up"
                autoComplete="off"
                value={newUser.cuil}
                onChange={handleChange}
                placeholder=""
              />
              <label className="label-input">Cuil</label>
            </div>

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
              />
              <label className="label-input">Teléfono</label>
            </div>
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
              />
              <label className="label-input">Dirección</label>
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
                  className="input-field-sign-up"
                  value={newUser.province}
                  onChange={handleChange}
                  style={{ color: newUser.province ? '#000' : '#555', cursor: 'pointer' }}
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
              />
              <label className="label-input">Ciudad</label>
            </div>
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
              />
              <label className="label-input">Email</label>
            </div>
            <div className="input-box-sign-up">
              <input
                type="text"
                name="password"
                placeholder=""
                className="input-field-sign-up"
                autoComplete="off"
                value={newUser.password}
                onChange={handleChange}
                onBlur={() => handleTouched("password")}
              />
              <label className="label-input">Contraseña</label>
            </div>
          </div>
        </form>
        <div>
          <div className="input-submit-sign-up">
            <button
              className="submit-btn-sign-up"
              id="submit"
              type="submit"
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
