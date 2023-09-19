import './input.css';

const Input = ({ input, label }) => {
  return (
    <div className='input'>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
