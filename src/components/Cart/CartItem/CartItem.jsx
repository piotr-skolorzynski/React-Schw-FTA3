import { formatPriceInDollars } from '../../../utils/formatter.util';
import './cart-item.css';

const CartItem = ({ name, price, amount, onRemove, onAdd }) => {
  const formattedPrice = formatPriceInDollars.format(price);

  return (
    <li className='cart-item'>
      <div>
        <h2>{name}</h2>
        <div className='cart-item-summary'>
          <span className='cart-item-price'>{formattedPrice}</span>
          <span className='cart-item-amount'>x {amount}</span>
        </div>
      </div>
      <div className='cart-item-actions'>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
