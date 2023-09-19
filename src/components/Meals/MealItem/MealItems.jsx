import { formatPriceInDollars } from '../../../utils/formatter.util';

import './meal-item.css';

const MealItem = ({ name, description, price }) => {
  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>{formatPriceInDollars.format(price)}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
