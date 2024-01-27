import { } from "./Product.css";


const Product = (props) => {
    console.log(props)
    const {name, img, seller, ratings, price} = props.product
    return (
        <div className="product">
            <img src={img}></img>
            <div className="product-info">
            <h6 className="product-name">{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Stars</p>
            </div>
            <button className="cart-btn">Add to Cart</button>
        </div>
    );
};

export default Product;