import { useContext } from 'react';
import { ReactComponent as CartIcon } from '../../../assets/icons/cart-icon.svg';
import CartContext from '../../../store/cart-context';
import './header-cart-button.css';

const HeaderCartButton = ({ showCart, children }) => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className='button' onClick={showCart}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className='badge'>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
