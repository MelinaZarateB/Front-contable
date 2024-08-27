import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleButtonLogin = () => {
    navigate("/login");
  };
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

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="parent-sign-up">
      <div className="child-sign-up">
      <form className="container-sign-up-box">
        <div className="sign-up-box">
          <div className="input-box-sign-up">
            <div>
            <input
              type="text"
              name="name" 
              placeholder="Nombre"
              className="input-field-sign-up"
              autoComplete="off"
              value={newUser.name}
              onChange={handleChange}
            />
            </div>
          </div>
          <div className="input-box-sign-up">
            <div>
            <input
              type="text"
              name="cuil" 
              placeholder="Cuil"
              className="input-field-sign-up"
              autoComplete="off"
              value={newUser.cuil}
              onChange={handleChange}
            />
            </div>
          </div>
          <div className="input-box-sign-up">
            <input
              type="text"
              name="phone" 
              placeholder="Telefono"
              className="input-field-sign-up"
              autoComplete="off"
              value={newUser.phone}
              onChange={handleChange} 
            />
          </div>
          <div className="input-box-sign-up">
            <div>
            <input
              type="text"
              name="address" 
              placeholder="Dirección"
              className="input-field-sign-up"
              autoComplete="off"
              value={newUser.address}
              onChange={handleChange}
            />
            </div>
          </div>
        </div>

        <div className="sign-up-box">
          <div className="input-box-sign-up">
            <div>
            <input
              type="text"
              name="province" 
              placeholder="Provincia"
              className="input-field-sign-up"
              autoComplete="off"
              value={newUser.province}
              onChange={handleChange}
            />
            </div>
          </div>
          <div className="input-box-sign-up">
            <div>
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              className="input-field-sign-up"
              autoComplete="off"
              value={newUser.city}
              onChange={handleChange}
            />
            </div>
          </div>
          <div className="input-box-sign-up">
            <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input-field-sign-up"
              autoComplete="off"
              value={newUser.email}
              onChange={handleChange}
            />
          </div>
            </div>
          <div className="input-box-sign-up">
            <div>
            <input
              type="text"
              name="password"
              placeholder="Contraseña"
              className="input-field-sign-up"
              autoComplete="off"
              value={newUser.password}
              onChange={handleChange}
            />
            </div>
          </div>
        </div>
      </form>
      <div>
        <div className="input-submit-sign-up">
          <button className="submit-btn-sign-up" id="submit" type="submit"></button>
          <label htmlFor="submit">Registrarse</label>
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
