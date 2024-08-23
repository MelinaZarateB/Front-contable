import "./NextSection.css";
import svg from "./../../../assets/Component2.svg";

const NextSection = () => {
  return (
    <section className="container-next-section">
      <div className="section-next-parent">
        <div className="section-next-image">
          <img src={svg} alt="Imagen de telefono" />
        </div>
        <div className="section-next-text">
          <div className="section-description-next">
            <h3 className="title-next-section">Consulte balances e informes </h3>
            <p>
            Automatice la creacion de balances e informes detallados de clientes en cualquier momento, en cualquier lugar y desde cualquier dispositivo. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NextSection;
