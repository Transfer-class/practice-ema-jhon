import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='nav'>
            <img src={logo} alt="" />
            <div className='menu'>
               <a href="/order">Order</a>
               <a href="/order">Order Review</a>
               <a href="/order">Manage Inventory</a>
               <a href="/order">Login</a>
            
            </div>
        </div>
    );
};

export default Header;