import "./App.css";
import { useState } from "react";
import Products from "./pages/Products";
import { Cart } from "./Components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function handleClick(product) {
    console.log(product);
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function increase(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }

  function decrease(id) {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <div className="grid-container">
        <Products
          handleClick={handleClick}
          cart={cart}
          increase={increase}
          decrease={decrease}
        />
        <Cart size={cart.length} cart={cart} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
