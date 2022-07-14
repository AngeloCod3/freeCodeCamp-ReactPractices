
import "../styles/testimonies.css"

function Testimonios(props) {
  return (
   
    <div className="main-container">
      <img
       src= {require(`../images/${props.imagen}.png`)} alt={props.alternative}
       className="testimonies-images" />

      <div className="testimonies-text">
        <p className="TitleName"><strong> {props.name} </strong> in {props.country}</p>
        <p className="Carrer">{props.carreer} at <strong>{props.company}</strong></p>
        <p className="description-text">
        "{props.testimony}"
        </p>
      </div>
    </div>
  );
}


export default Testimonios;