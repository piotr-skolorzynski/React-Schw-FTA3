import { formatPriceInDollars } from '../../../utils/formatter.util';
import MealItemForm from '../MealItemForm/MealItemForm';

import './meal-item.css';

const MealItem = ({ id, name, description, price }) => {
  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>{formatPriceInDollars.format(price)}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
