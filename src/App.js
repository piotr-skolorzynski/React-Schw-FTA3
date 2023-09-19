import { useState } from "react";

import { Cart } from "./components/Cart";
import { Header } from "./components/Layout";
import { Meals } from './components/Meals'
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const showCart = () => {
    setIsCartOpen(true)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  return (
    <CartProvider>
      { isCartOpen && <Cart closeCart={ closeCart } /> }
      <Header showCart={ showCart } />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
