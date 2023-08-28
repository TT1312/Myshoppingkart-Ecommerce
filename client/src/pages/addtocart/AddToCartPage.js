import './AddToCart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem,deleteAll } from "../../redux/cartReducer";

const AddToCartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.cart.products);

  const totalPrice =()=>{
    let total = 0;
    products.forEach(element => ( total += element.quantity * element.price));
    return total.toFixed(2);
    
  }
  return (
    <div className='addTocart'>
      <h1>Products In Cart :</h1>
      {products?.map((element) => (
        <div className="items" key={element.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + element.img} alt="" />
          <div className="details">
            <h1>{element.title}</h1>
            <p>{element.desc?.substring(0, 30)}</p>
            <div className="price">{element.quantity} X {element.price}</div>
          </div>
          <DeleteIcon className='delete' onClick={()=>dispatch(removeItem(element.id))}/>
        </div>
      ))}

      <div className="total">
        <span>SubTotal</span>
        <span>Rs. {totalPrice()}</span>
      </div>

      <button className='checkout'>PROCEED TO CHECKOUT</button>

      <span className='deleteAll' onClick={()=> dispatch(deleteAll())}>Delete All</span>
 
    </div>
  )
}

export default AddToCartPage