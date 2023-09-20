import { useContext, useEffect, useState } from 'react';
import { ReactComponent as CartIcon } from '../../../assets/icons/cart-icon.svg';
import CartContext from '../../../store/cart-context';
import './header-cart-button.css';

const HeaderCartButton = ({ showCart, children }) => {
  const { items } = useContext(CartContext);

  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

  const numberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `button ${isBtnHighlighted ? 'bump' : ''}`;

  useEffect(() => {
    if (!items.length) {
      return;
    }
    setIsBtnHighlighted(true);

    const timeout = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [items]);

  return (
    <button className={btnClasses} onClick={showCart}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className='badge'>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
