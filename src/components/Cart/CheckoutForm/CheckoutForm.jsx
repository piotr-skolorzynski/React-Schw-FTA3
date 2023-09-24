import { useRef, useState } from 'react';
import './checkout-form.css';

const isEmpty = (value) => value.trim() === '';
const isNotFiveChars = (value) => value.trim().length !== 5;

const CheckoutForm = ({ onCancel, onConfirm }) => {
  const [formInputsValidity, setFormsInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const usernameRef = useRef('');
  const streetRef = useRef('');
  const postalCodeRef = useRef('');
  const cityRef = useRef('');

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const eneteredStreet = streetRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredUsernameIsValid = !isEmpty(enteredUsername);
    const eneteredStreetIsValid = !isEmpty(eneteredStreet);
    const isEnteredPostalCodeValid = !isNotFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormsInputsValidity({
      name: enteredUsernameIsValid,
      street: eneteredStreetIsValid,
      postalCode: isEnteredPostalCodeValid,
      city: enteredCityIsValid,
    });

    const isFormValid =
      enteredUsernameIsValid &&
      eneteredStreetIsValid &&
      isEnteredPostalCodeValid &&
      enteredCityIsValid;

    if (!isFormValid) {
      return;
    }

    onConfirm({
      name: enteredUsername,
      street: enteredCity,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };
  return (
    <form className='checkout-form' onSubmit={confirmHandler}>
      <div
        className={`checkout-control ${
          formInputsValidity.name ? '' : 'checkout-invalid'
        }`}
      >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={usernameRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`checkout-control ${
          formInputsValidity.street ? '' : 'checkout-invalid'
        }`}
      >
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef} />
        {!formInputsValidity.name && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`checkout-control ${
          formInputsValidity.postalCode ? '' : 'checkout-invalid'
        }`}
      >
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeRef} />
        {!formInputsValidity.name && (
          <p>Please enter a valid postal code (5 character long)</p>
        )}
      </div>
      <div
        className={`checkout-control ${
          formInputsValidity.city ? '' : 'checkout-invalid'
        }`}
      >
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef} />
        {!formInputsValidity.name && <p>Please enter a valid city!</p>}
      </div>
      <div className='checkout-actions'>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button className='checkout-submit'>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
