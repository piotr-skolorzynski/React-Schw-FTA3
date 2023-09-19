import { ReactComponent as CartIcon } from '../../../assets/icons/cart-icon.svg';
import './header-cart-button.css';

const HeaderCartButton = ({ showCart, children }) => {
  return (
    <button className='button' onClick={showCart}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className='badge'>3</span>
    </button>
  );
};

export default HeaderCartButton;
