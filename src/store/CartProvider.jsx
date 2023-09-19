import CartContext from './cart-context';

const CartProvider = ({ children }) => {
  const addItemToCart = (item) => {};

  const removeItemFromCart = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
