import "./Features.css";
/* Icons */
import reloj from './../../../assets/reloj.svg';
import statistics from './../../../assets/estadistica.svg';
import doubleCheck from './../../../assets/double-check.svg';

const Features = () => {
  return (
    <section className="container-features-section">
      <div className="section-features-parent">
        <div>
          <h2>¿Por qué elegirnos?</h2>
        </div>
        <div className="container-features-cards">
            <div className="card-feature">
                <img src={statistics} alt="Icono de estadistica" className="img-statistics" />
                <h3></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, mollitia consequatur sed sit aliquid sint fugiat nobis repellat accusamus inventore laudantium similique veniam. Amet necessitatibus ullam repellendus aperiam quaerat est.</p>
            </div>
            <div className="card-feature">
                <img src={reloj} alt="Icono de reloj" className="img-reloj" />
                <h3>Ejecución eficiente</h3>
                <p>Optimice su tiempo y elimine retrasos en la carga manual de libros de IVA y la realización de pre-balances. 
                    <br />Automatice completamente estas tareas para mejorar la eficiencia y mejorar la calidad de su trabajo.</p>
            </div>
            <div className="card-feature">
                <img src={doubleCheck} alt="Icono de doble check" className="img-double-check"/>
                <h3></h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque animi, tempore ab molestias, blanditiis deleniti in consectetur magnam ad repellat voluptas iusto earum neque fuga vitae! Vitae libero reprehenderit autem.</p>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
