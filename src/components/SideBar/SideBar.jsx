import "./SideBar.css";
import Spinner from "../../utils/Spinner/Spinner";
/* Icons */
import scanner from "./../../assets/scanner.svg";
import close from "./../../assets/close.svg";
import client from "./../../assets/client.svg";
import logout from "./../../assets/logout.svg";
import arrowClose from "./../../assets/arrow.svg";
import factura from "./../../assets/factura.svg";
import arrowShort from "./../../assets/arrow3.svg";
import data from "./../../assets/data.svg";
import users from "./../../assets/users.svg";
import book from './../../assets/book.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const [rotated, setRotated] = useState(false);
  const [paintLink, setPaintLink] = useState(false);

  /*const paint = () => {
    if(!paintLink) setPaintLink(true)
      else {
    setPaintLink(false)}
  }*/
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleClick = (menuName) => {
      if (openSubMenu === menuName) {
        setOpenSubMenu(null); // Cierra el submenú si ya está abierto
      } else {
        setOpenSubMenu(menuName); // Abre el submenú correspondiente
      }
    };

  const handleLogout = () => {
    navigate("/login");
  };
  /*let arrow = document.querySelectorAll(".arrow-short");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    });
  }*/

  return (
    <section className="container-side-bar">
      <aside className="aside">
        <div className="top">
          <div className="logo-side-bar">
            <img src="" alt="" />
            <h2 className="h2-sidebar" style={{ paddingLeft: "20px" }}>
              LOGO
            </h2>
          </div>
          <div className="close" id="close-btn">
            <img
              src={arrowClose}
              className={`arrowClose ${rotated ? "rotated" : ""}`}
              onClick={() => setRotated(!rotated)}
              alt=""
            />
          </div>
        </div>
        <ul className="nav-links">
          <li className="li-sidebar">
            <a href="" className="container-a-sidebar">
              <img src={client} alt="" />
              <span className="link-name-sidebar" style={{marginLeft: '-5px'}}>Clientes</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a href="" className="link_name">
                  Clientes
                </a>
              </li>
            </ul>
          </li>
          <li className={`li-sidebar ${openSubMenu === 'facturas' ? 'showMenu': ''}`} onClick={() => handleClick('facturas')}>
            <div className="iocn-link">
              <a href="" className="container-a-sidebar">
                <img src={factura} alt="" style={{ marginLeft: "4px" }} />
                <span
                  className="link-name-sidebar"
                >
                  Cargar facturas
                </span>
              </a>
              <img
                src={arrowShort}
                className="arrow-short"
                alt=""
        
              />
            </div>
            <ul className="sub-menu">
              <li>
                <a href="" className="sub-menu-a link_name">
                  Cargar facturas
                </a>
              </li>
              <li>
                <a href="" className="sub-menu-a">
                  Compras
                </a>
              </li>
              <li>
                <a href="" className="sub-menu-a">
                  Ventas
                </a>
              </li>
            </ul>
          </li>
          <li className={`li-sidebar ${openSubMenu === 'libros' ? 'showMenu': ''}`} onClick={() => handleClick('libros')}>
            <div className="iocn-link">
              <a href="" className="container-a-sidebar">
                <img src={book} alt="" style={{ marginLeft: "7px" }} />
                <span
                  className="link-name-sidebar"
                >
                  Libro IVA
                </span>
              </a>
              <img
                src={arrowShort}
                className="arrow-short"
                alt=""
              />
            </div>
            <ul className="sub-menu">
              <li>
                <a href="" className="sub-menu-a link_name">
                  Libro IVA
                </a>
              </li>
              <li>
                <a href="" className="sub-menu-a">
                  Compras
                </a>
              </li>
              <li>
                <a href="" className="sub-menu-a">
                  Ventas
                </a>
              </li>
            </ul>
          </li>
          <li className="li-sidebar">
            <div className="iocn-link">
              <a href="" className="container-a-sidebar">
                <img src={data} alt="" style={{ marginLeft: "8px" }} />
                <span
                  style={{ marginLeft: "3px" }}
                  className="link-name-sidebar"
                >
                  Balances
                </span>
              </a>
              <img src={arrowShort} alt="" />
            </div>
          </li>
          <li className="li-sidebar">
            <a
              href=""
              className="container-a-sidebar"
              style={{ height: "40px" }}
            >
              <img src={users} alt="" style={{ marginLeft: "5px" }} />
              <span className="link-name-sidebar" style={{ marginLeft: "2px" }}>
                Usuarios
              </span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a href="" className="link_name">
                  Usuarios
                </a>
              </li>
            </ul>
          </li>
          <ul>
          <li onClick={handleLogout} className="li-logout">
            <a href="" className="container-logout">
              <img src={logout} alt="" />
              <span className="link-name-sidebar">Cerrar sesión</span>
            </a>
          </li>
          </ul>
        </ul>
      </aside>
    </section>
  );
};
export default SideBar;
