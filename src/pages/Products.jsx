import React from 'react'
import { useEffect, useState} from 'react'
import ProductCard from '../Components/ProductCard'
import "./Products.css"

const Products = ({cart,increase,decrease,handleClick}) => {
    const [products, setProducts] = useState([])


    useEffect(()=>{
        fetch("/data/data.json")
        .then(res => res.json())
        .then(data => {
            const productWithId = data.map((product,index) => ({
                ...product,
                id: index + 1
            }));
            setProducts(productWithId);
        })
        .catch(error => console.error(error));
    }, []);
    
  return (
    <div className='products-container'>
        <h1 className='title'>desserts</h1>
        <div className='products-grid'>
            {products.map((product,index) => (
                <ProductCard
                // id = {id} 
                key={index} 
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