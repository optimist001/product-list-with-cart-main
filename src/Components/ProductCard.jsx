import React from 'react'
import './ProductsCard.css'
const ProductCard = ({ product, handleClick, cart, increase, decrease }) => {
  const { name, price, image, category } = product;

  const inCart = cart.find((item) => item.id === product.id);
  console.log(inCart)
  return (
    <div className='products-card'>
      <div className='image-wrapper'>
        <img className='product' src={image.desktop} alt={image} />

        {inCart ? (
          <div className="counter">
            <button onClick={() => decrease(product.id)}>-</button>
            <span>{inCart.qty}</span>
            <button onClick={() => increase(product.id)}>+</button>
          </div>

        ) : (
            <button
            className='add-to-cart-btn' 
            onClick={() => handleClick(product)}>
              <img src="/assets/images/icon-add-to-cart.svg" alt="icon-cart" />
              Add to Cart
            </button>

        )}

      </div>

      <p className='category'>{category}</p>
      <h3>{name}</h3>
      <p className='price'>${price}</p>
    </div>
  )
}

export default ProductCard