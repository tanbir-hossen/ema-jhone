import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
                <a href='shop'>Shop</a>
                <a href='/order-review'>Order</a>
                <a href='/inventory'>Manage Inventory</a>
                <a href='/login'>Login</a>
            </div>
        </nav>
    );
};

export default Header;