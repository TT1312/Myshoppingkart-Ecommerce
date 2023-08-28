import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToCartPage from "../../pages/addtocart/AddToCartPage";
import Wishlist from "../../pages/wishlist/Wishlist";
import {useSelector} from "react-redux";
import useFetch from '../../hooks/useFetch'

const Navbar = () => {
  const cartproducts = useSelector(state=>state.cart.products);
  const wishlistproducts = useSelector(state=>state.wishlist.products);
  
  const [query, setQuery] = useState("");
  const [openwishlist, setWishList] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const navigate = useNavigate();

  const searchQueryHandler=(event)=>{
    if (event.key === "Enter" && query.length > 0 ) {
      navigate(`/search/${query}`);
    }
  }

  const ButtonQuerySearch = () => {
    if (query.length === 0) {
      alert("Please Enter some value!!")
    } else {
      navigate(`/search/${query}`);
    }
  }

  

  return (
    <div className="navbar">
      <div className="wrapper">
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <p className="title">Myshoppingkart</p>
        </NavLink>
        <ul>
          <div className="center">
            <div className="searchinput">
              <input
                className="input"
                type="text"
                placeholder="Search Only BoAt And JBL Products ...."
                onKeyUp={searchQueryHandler}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button className="button" onClick={ButtonQuerySearch}>Search</button>
            </div>
          </div>

          <div className="right">
            
            <div className="icon">
              <div className="wishlistIcon" onClick={()=>{setWishList(!openwishlist)}}>
                <FavoriteBorderIcon className="FavoriteBorderIcon" />
                {!!wishlistproducts.length && <span>{wishlistproducts.length}</span>}
              </div>
              
              <div className="cartIcon" onClick={()=>{setOpenCart(!openCart)}}>
                <ShoppingCartIcon className="ShoppingCartIcon"/>
                {!!cartproducts.length && <span>{cartproducts.length}</span>}
              </div>
            </div>
          </div>
        </ul>
      </div>
      {openCart && <AddToCartPage />}
      {openwishlist && <Wishlist />}
    </div>
  );
};

export default Navbar;
