import "./Landing.css";

const Landing = () => {
  return (
    <>
      <section className="container-hero">
        <div className="section-hero-parent">
          <div className="section-hero-text">
            <h2></h2>
            <h1 className="title-hero">Contabilidad realmente sencilla</h1>
            <p>
            Automatice la confección de libros de IVA mediante el escaneo inteligente de facturas. 
            <br />Simplifique la gestión contable con informes detallados de clientes, optimice su tiempo con procesos automatizados, y asegure la precisión en cada registro. 
            </p>

            <div className="container-buttons-hero">
              <button className="button-sign-up-hero">Registrate</button>
              <a href="" className="link-document-api">
                Documentación API
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="#4e56a8" 
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                  style={{marginLeft:'5px'}}
                  
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
            <div className="section-rondead"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Landing;
