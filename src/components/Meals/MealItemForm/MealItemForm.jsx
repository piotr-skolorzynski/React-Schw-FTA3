import { Input } from '../../shared';
import './meal-item-form.css';

const MealItemForm = ({ id }) => {
  return (
    <form className='form'>
      <Input
        label='Amount'
        input={{
          id: `amount-${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
