import React from 'react'
import { useEffect, useState} from 'react'
import ProductCard from '../Components/ProductCard'
import "./Products.css"

const Products = ({cart,increase,decrease,handleClick}) => {
    const [products, setProducts] = useState([])


    useEffect(()=>{
        fetch("/data/data.json")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error));
    }, [])
    
  return (
    <div className='products-container'>
        <h1 className='title'>desserts</h1>
        <div className='products-grid'>
            {products.map(product => (
                <ProductCard 
                key={product.id} 
                product={product} 
                handleClick={handleClick} 
                cart={cart}
                increase={increase}
                decrease={decrease}
                />
            ))}
        </div>
    </div>
  )
}

export default Products