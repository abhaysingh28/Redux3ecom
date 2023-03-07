import React from 'react';
import "./cart.css"
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../store/slices/cartSlice';

const Cart = () => {
  const data = useSelector((state) => {
    return state.cart
  })
  console.log(data);
  const dispatch = useDispatch();
  const removeHandler = (i) => {
    dispatch(remove(i))
  }
  return (
    <>
    <div className="cart">
    {
        data?.map((e, i) => (
          <div className='item' key={i}>
            <h1>{e.title}</h1>
            <img src={e.image} alt="" />
            <h3>$ {e.price}</h3>
            <button onClick={()=>removeHandler(i)}>remove</button>
          </div>
        ))

      }
    </div>
     
    </>
  );
}

export default Cart;
