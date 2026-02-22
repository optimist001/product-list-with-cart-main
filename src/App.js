import "./App.css";
import { useState, useEffect } from "react";
import Products from "./pages/Products";
import { Cart } from "./Components/Cart";
import ConfirmModal from "./Components/confirmModal";

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [showModal, setShowModal] = useState(false);

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

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setCart([]);
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
        <Cart
          size={cart.length}
          cart={cart}
          removeItem={removeItem}
          openModal={openModal}
        />
        {showModal && <ConfirmModal cart={cart} closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default App;
