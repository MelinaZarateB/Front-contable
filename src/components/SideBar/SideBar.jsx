import "./SideBar.css";
import Spinner from "../../utils/Spinner/spinner";
/* Icons */
import scanner from "./../../assets/scanner.svg";
import close from "./../../assets/close.svg";
import client from "./../../assets/client.svg";
import logout from "./../../assets/logout.svg";
import arrow from "./../../assets/arrow.svg";
import factura from "./../../assets/factura.svg";
import arrowShort from './../../assets/arrow3.svg';
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

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
            <img src={arrow} className="arrow-icon" alt="" />
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
                <div>
                <a href="" className="container-a-sidebar">
                <img src={factura} alt="" style={{marginLeft:'4px'}} />
                <span style={{marginLeft:'6px'}} className="link-name-sidebar">Facturas</span>
                <img src={arrowShort} alt="" />
                </a>
                </div>
            </li>
            <li onClick={handleLogout}>
                <a href="" className="container-logout">
                <img src={logout} alt=""/>
                <span className="link-name-sidebar">Cerrar sesion</span>
                </a>
            </li>
        </ul>

      </aside>
    </section>
  );
};
export default SideBar;
