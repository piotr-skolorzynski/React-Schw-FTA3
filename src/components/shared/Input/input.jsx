import { forwardRef } from 'react';
import './input.css';

const Input = forwardRef(function Input(props, ref) {
  return (
    <div className='input'>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
