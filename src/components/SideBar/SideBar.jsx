import "./SideBar.css";
import Spinner from "../../utils/Spinner/Spinner";
/* Icons */
import scanner from "./../../assets/scanner.svg";
import close from "./../../assets/close.svg";
import client from "./../../assets/client.svg";
import logout from "./../../assets/logout.svg";
import arrow from "./../../assets/arrow.svg";
import factura from "./../../assets/factura.svg";
import arrowShort from "./../../assets/arrow3.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const [rotated, setRotated] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <section className="container-side-bar">
      <aside className="aside">
        <div className="top">
          <div className="logo-side-bar">
            <img src="" alt="" />
            <h2 className="h2-sidebar">Titulo</h2>
          </div>
          <div className="close" id="close-btn">
            <img src={arrow}  className={`arrow-icon ${rotated ? 'rotated' : ''}`}
      onClick={() => setRotated(!rotated)} alt="" />
          </div>
        </div>
        <ul className="nav-links">
          <li className="li-sidebar">
            <a href="" className="container-a-sidebar">
              <img src={client} alt="" />
              <span className="link-name-sidebar">Clientes</span>
            </a>
          </li>
          <li className="li-sidebar">
            <div className="iocn-link">
              <a href="" className="container-a-sidebar">
                <img src={factura} alt="" style={{ marginLeft: "4px" }} />
                <span
                  style={{ marginLeft: "6px" }}
                  className="link-name-sidebar"
                >
                  Facturas
                </span>
              </a>
              <img src={arrowShort} alt="" />
            </div>
            <ul className="sub-menu">
              <li>
                <a href="" className="sub-menu-a">Escanear</a>
              </li>
              <li>
                <a href="" className="sub-menu-a">Visualizar</a>
              </li>
            </ul>
          </li>
          <li className="li-sidebar">
            <div className="iocn-link">
              <a href="" className="container-a-sidebar">
                <img src={factura} alt="" style={{ marginLeft: "4px" }} />
                <span
                  style={{ marginLeft: "6px" }}
                  className="link-name-sidebar"
                >
                  Facturas
                </span>
              </a>
              <img src={arrowShort} alt="" />
            </div>
          </li>
          <li onClick={handleLogout}>
            <a href="" className="container-logout">
              <img src={logout} alt="" />
              <span className="link-name-sidebar">Cerrar sesion</span>
            </a>
          </li>
        </ul>
      </aside>
    </section>
  );
};
export default SideBar;
