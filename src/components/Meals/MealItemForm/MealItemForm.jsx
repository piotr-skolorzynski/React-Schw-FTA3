import { useRef, useState } from 'react';
import { Input } from '../../shared';
import './meal-item-form.css';

const MealItemForm = ({ id, onAddToCart }) => {
  const amountInputRef = useRef(null);
  const [amountIsValid, setAmontIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    console.log(enteredAmount);
    const enteredAmountNumber = Number(enteredAmount);

    if (!enteredAmount || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmontIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
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

      <button type='submit'>+ Add</button>
      {!amountIsValid && <p>Please enetr a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
