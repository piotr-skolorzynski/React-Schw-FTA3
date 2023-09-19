import './header.css';
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicoius food' />
      </div>
    </>
  );
};

export default Header;
