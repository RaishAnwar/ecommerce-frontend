import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";
//import CartItem from "./cart-item";

type ProductsProps ={
  productId:string;
  photo:string;
  name:string;
  price:number;
  stock:number; 
  handler: (cartItem: CartItem) => string | undefined;
};

//const server =  "jsksjejdl";

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}:ProductsProps) => {
  return (
    <div className="product-card">
       <img src={`${server}/${photo}`} alt={name} />
       <p>{name}</p>
       <span>Rs.{price}</span>

       <div>
        <button onClick={() => handler({productId,price,name,photo,stock,quantity: 1})}>
          <FaPlus/>
          </button>
        </div>
    </div>
  )
}

export default ProductCard