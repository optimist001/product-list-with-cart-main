import React from 'react'
import "./cart.css"

export const Cart = ({
  size, 
  cart,
  increase,
  decrease,
  removeItem,
  openModal}) => {
     const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className='cart'>
        <h1 className="cart-title">Your Cart ({size})</h1>
        {size === 0 &&(

          <div className="cart-content">
              <img src="/assets/images/illustration-empty-cart.svg" alt="" />
              <p>Your added items will appear here</p>
          </div>
        )}

        {size > 0 && (
          <>
            {cart.map(item => (
              <div key={item.id} className='cart-item'>
                  <div className='detail'>
                    <strong>{item.name}</strong>
                    <div className='calculation'>
                      <p>{item.qty}x</p>
                      <p>@${item.price}</p>
                      <p>${item.qty * item.price}</p>
                    </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}> x
                </button>
              </div>
            ))}

            <p className='total'>Order Total <span>${total.toFixed(2)}</span></p>
            <button className='carbon'>
              <img src="/assets/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
              <p>This is a<strong> Carbon-neutral </strong>Delivery</p>
            </button>
            <button className="checkout" onClick={() =>openModal()}>
                Confirm Order
            </button>

          </>
        )}

    </div>
  )
}


 