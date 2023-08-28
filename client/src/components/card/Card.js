import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ element }) => {
  return (
    <Link
      to={`/product/${element.id}`}
      className="link"
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <div className="image">
          {element?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              element.attributes?.img?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <h2>{element?.attributes.title}</h2>
        <div className="price">
          <h3 className="oldprice">Rs.{element?.attributes.price + 200}</h3>
          <h3>Rs.{element?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
