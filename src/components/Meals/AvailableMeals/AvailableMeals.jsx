import { useEffect, useState } from 'react';
import { Card, LoadingSpinner } from '../../shared';
import MealItem from '../MealItem/MealItems';

import './available-meals.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://order-food-app-schwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
    );
    const loadedMeals = [];

    const data = await response.json();

    for (const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        price: data[key].price,
        description: data[key].description,
      });
    }
    setIsLoading(false);

    setMeals(loadedMeals);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <section className='meals'>
      {meals.length && (
        <Card>
          <ul>
            {isLoading && <LoadingSpinner />}
            {!isLoading &&
              meals.length &&
              meals.map((meal) => {
                return (
                  <MealItem
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                  />
                );
              })}
          </ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
