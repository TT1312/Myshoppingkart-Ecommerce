import "./Wishlist.css";
import {useSelector} from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { removeWishlistItem } from "../../redux/wishlistReducer";

const Wishlist = () => {
    const products = useSelector(state=>state.wishlist.products);
    const dispatch = useDispatch();
    return (
        <div className="wishlist">
            <h1>Products In WishList :</h1>
            {products?.map((element) => (
                <div className="items" key={element.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + element.img} alt="" />
                    <div className="details">
                        <h1>{element.title}</h1>
                        <p>{element.desc?.substring(0, 30)}</p>
                        <DeleteIcon className='delete' onClick={()=>dispatch(removeWishlistItem(element.id))}/>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Wishlist;
