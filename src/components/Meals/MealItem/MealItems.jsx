import { useContext } from 'react';
import { formatPriceInDollars } from '../../../utils/formatter.util';
import MealItemForm from '../MealItemForm/MealItemForm';
import CartContext from '../../../store/cart-context';
import './meal-item.css';

const MealItem = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);

  const onAddToCart = (amount) => {
    cartContext.addItem({ id, name, description, price, amount });
  };

  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>{formatPriceInDollars.format(price)}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
