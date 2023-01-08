import React from 'react';
import "./CartPage.scss";
import { useSelector, useDispatch } from 'react-redux';
import { shopping_cart } from '../../utils/images';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import { getAllCarts, removeFromCart, toggleCartQty, clearCart, getCartTotal } from '../../store/cartSlice';


const CartPage = () => {
const dispatch = useDispatch()
const carts = useSelector(getAllCarts)
const {itemsCount, totalAmount} = useSelector((state) => state.cart)

  
  return (
    <div className='container my-5'>
    <div className='empty-cart flex justify-center align-center flex-column font-manrope'>
      <img src={shopping_cart} alt="" />
      <span className="fw-6 fs-15 text-gray">Your shopping cart is empty.</span>
      <Link to="/" className='shopping-btn bg-orange text-white fw-5'>Go shopping Now</Link>
    </div>
    </div>
  )
}

export default CartPage