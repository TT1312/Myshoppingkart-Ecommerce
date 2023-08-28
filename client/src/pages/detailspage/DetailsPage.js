import "./DetailsPage.css";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { addToWishlist } from "../../redux/wishlistReducer";

const DetailsPage = () => {

  const dispatch = useDispatch();

  const id = parseInt(useParams().id);
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data);

  return (
    <div className="detailsPage">
      {error ? "Something Wrong"
        : loading ? (
          "loading"
        ) : (
          <>
            <div className="leftDetailPage">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
              />
            </div>

            <div className="rightDetailPage">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">Rs.{data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>

              <div className="quantity">
                <button
                  onClick={() => {
                    setQuantity(quantity === 1 ? 1 : quantity - 1);
                  }}
                >
                  -
                </button>
                {quantity}
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>

              <div className="list">
                <button className="addtocart" onClick={() => dispatch(addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  desc: data.attributes.desc,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  quantity,
                }))}>
                  <AddShoppingCartIcon /> ADD TO CART
                </button>

                <div className="wishList" onClick={() => dispatch(addToWishlist({
                  id: data.id,
                  title: data.attributes.title,
                  desc: data.attributes.desc,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  
                }))}>
                  <FavoriteBorderIcon /> ADD TO WISH LIST
                </div>
              </div>

              <div className="info">
                <span>Vender: BoAt</span>
                <span>Product Type: Headphone</span>
                <span>Tag: Headphone, Earbuds, Wireless Headphone</span>
                <hr />
              </div>

              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default DetailsPage;
