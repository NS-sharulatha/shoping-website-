import React, { useContext, useState } from 'react';
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div>
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" height="40px"/>
                <p>ZARA</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>{menu === "shop" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("men") }}><Link style={{textDecoration:'none'}} to='/mens'>MEN</Link>{menu === "men" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("women") }}><Link style={{textDecoration:'none'}} to='/womens'>WOMEN</Link>{menu === "women" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{textDecoration:'none'}} to='/kids'>KIDS</Link>{menu === "kids" ? <hr /> : null}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>LOGIN</button></Link>
                <Link to='/Cart'> <img src={cart_icon} alt="" height="30px" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>

    </div>
  )
}


export default Navbar




