import './Navbar.css'
import {Link} from 'react-router-dom'; 
import {useSelector} from 'react-redux';

const Navbar = ({click}) => {

     const cart = useSelector(state => state.cart)
     const { cartItems } = cart;
     
    const getCartCount = () => {
       return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }  

    return (
       <nav className="navbar">
        
             <div className="navbar__logo">
<<<<<<< HEAD
                <Link to="/"> <h2>Mern shopping cart</h2></Link> 
=======
                 <h2>Mern shopping cart</h2> 
>>>>>>> fe8246515c88dd4a864bf92ad6e7d22d51f85dac
             </div>
 
            <ul className="navbar__links"> 
               <li>
                   <Link to="/cart" className="cart__link" >
                      <i className="fas fa-shopping-cart"></i>
                      <span>Cart<span className="cartlogo__bedge"> {getCartCount()}</span></span> 
                   </Link>
               </li>

               <li>
                  <Link to="/">
                     Shop
                  </Link>
               </li>
            </ul>
 
          <div className="hamburger__menu" onClick={click}>
             <div></div>
             <div></div>
             <div></div>
          </div>
       </nav>
    );
}

export default Navbar;
