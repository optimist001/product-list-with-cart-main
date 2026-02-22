import React from 'react'
import './confirmModal.css'

const ConfirmModal = ({cart,closeModal}) => {
   const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className='modal-overlay'>
        <div className="modal">
            <img src="/assets/images/icon-order-confirmed.svg" alt="icon-order-confirm" />
            <h3 className='modal-title'>Order Confirmed</h3>
            <p className='text'>We hope you enjoy your food!</p>
            {/* <div className="modal-item"> */}
                {cart.map(item =>(
                    <div key={item.id} className="modal-item">
                        <img src={item.image.thumbnail} alt={item.name} />
                        <div className="detail">
                            <h5>{item.name}</h5>
                            <div className='calc'>
                                <p>{item.qty}x</p>
                                <p>@${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <p>${(item.qty * item.price).toFixed(2)}</p>
                    </div>
                ))}

            {/* </div> */}

            <p className='total'>Order Total <span>${total.toFixed(2)}</span></p>
            <button className="checkout" onClick={()=>closeModal()}>
                Start New Order
            </button>
        </div>
    </div>
  )
}

export default ConfirmModal