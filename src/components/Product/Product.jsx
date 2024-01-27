import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from "./Product.css";

const Product = (props) => {
    const {name, img, seller, ratings, price} = props.product
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className="product">
            <img src={img}></img>
            <div className="product-info">
            <h6 className="product-name">{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className="cart-btn">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;