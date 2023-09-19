import { Modal } from '../../shared';
import './cart.css';

const Cart = () => {
  const cartItems = [{ id: '1', name: 'Sushi', amount: 2, price: 12.99 }];

  return (
    <Modal>
      <ul className='cart-items'>
        {cartItems.map((cartItem) => {
          <li>{cartItem.name}</li>;
        })}
      </ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className='actions'>
        <button className='button--alt'>Close</button>
        <button className='button'>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
