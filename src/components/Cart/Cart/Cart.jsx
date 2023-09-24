import { useContext, useState } from 'react';
import { LoadingSpinner, Modal } from '../../shared';
import CartContext from '../../../store/cart-context';
import { formatPriceInDollars } from '../../../utils/formatter.util';
import './cart.css';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CartItem from '../CartItem/CartItem';

const Cart = ({ closeCart }) => {
  const { items, totalAmount, addItem, removeItem, clearCart } =
    useContext(CartContext);
  const [isCheckoutFormOpen, setIsCheckoutFormOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const onOrderHandler = () => {
    setIsCheckoutFormOpen(true);
  };

  const formattedTotalAmount = formatPriceInDollars.format(totalAmount);
  const hasItems = items.length > 0;

  const onRemoveItemHandler = (id) => {
    removeItem(id);
  };

  const onAddItemHandler = (item) => {
    addItem(item);
  };

  const onSubmitHandler = async (userData) => {
    setIsPending(true);
    try {
      await fetch(
        'https://order-food-app-schwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        {
          method: 'POST',
          body: JSON.stringify({ user: userData, orderedItems: items }),
        }
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsPending(false);
      setDidSubmit(true);
      clearCart();
    }
  };

  const cartModalContent = (
    <>
      <ul className='cart-items'>
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={onAddItemHandler.bind(null, item)}
              onRemove={onRemoveItemHandler.bind(null, item.id)}
            />
          );
        })}
      </ul>

      <div className='total'>
        <span>Total Amount</span>
        <span>{formattedTotalAmount}</span>
      </div>

      {isCheckoutFormOpen && (
        <CheckoutForm onConfirm={onSubmitHandler} onCancel={closeCart} />
      )}

      {!isCheckoutFormOpen && (
        <div className='actions'>
          <button className='button--alt' onClick={closeCart}>
            Close
          </button>
          {hasItems && (
            <button className='button' onClick={onOrderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>{' '}
      <div className='actions'>
        <button className='button--alt' onClick={closeCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal closeModal={closeCart}>
      {isPending && <LoadingSpinner />}
      {!isPending && !didSubmit && cartModalContent}
      {!isPending && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
