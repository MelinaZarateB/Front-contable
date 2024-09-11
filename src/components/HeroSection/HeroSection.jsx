import './HeroSection.css';
import svg from './../../assets/Untitled2.svg';

const HeroSection = () => {
  return (
    <>
      <section className="container-hero">
        <div className="section-hero-parent">
          <div className="section-hero-text">
            <h1 className="title-hero">Contabilidad realmente sencilla</h1>
            <p className="description-hero">
              Automatice la confección de libros de IVA mediante el escaneo
              inteligente de facturas.
              <br />
              Simplifique la gestión contable con informes detallados de
              clientes, optimice su tiempo con procesos automatizados, y asegure
              la precisión en cada registro.
            </p>
            <div className="container-buttons-hero-checks">
              <div className="button-child-hero-checks">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#4DB05F"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <p className="p-button-check">Eficiencia asegurada</p>
              </div>
              <div className="button-child-hero-checks">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#4DB05F"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <p className="p-button-check">Seguro y protegido</p>
              </div>
            </div>
            <div className="container-buttons-hero">
              <button className="button-sign-up-hero">Regístrate</button>
              <a href="" className="link-document-api">
                Documentación API
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="#4e56a8"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "5px" }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="section-hero-image">
            <img src={svg} alt="Imagen de laptop" />
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
