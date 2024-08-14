import  "./Card.css";

const Card =({carModel, carImage, carDescription, oldPrice, newPrice})=>{
  return(
    <div className="card">
        <img src={carImage} alt="Toyota Camry" />
        <h3><strong>{carModel}</strong></h3>
        <p>{carDescription}</p>
        <div className="card__details">
            <p><del>${oldPrice}</del> ${newPrice}</p>
            <button>Buy Now</button>
        </div>
    </div>
  );
};
export default Card;