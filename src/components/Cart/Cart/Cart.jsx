import { useContext } from 'react';
import { Modal } from '../../shared';
import CartContext from '../../../store/cart-context';
import { formatPriceInDollars } from '../../../utils/formatter.util';
import './cart.css';
import CartItem from '../CartItem/CartItem';

const Cart = ({ closeCart }) => {
  const { items, totalAmount } = useContext(CartContext);

  const formattedTotalAmount = formatPriceInDollars.format(totalAmount);
  const hasItems = items.length > 0;

  const onRemoveItemHandler = (id) => {};

  const onAddItemHandler = (item) => {};

  return (
    <Modal closeModal={closeCart}>
      <ul className='cart-items'>
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={onAddItemHandler}
              onRemove={onRemoveItemHandler}
            />
          );
        })}
      </ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>{formattedTotalAmount}</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={closeCart}>
          Close
        </button>
        {hasItems && <button className='button'>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
