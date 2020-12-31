import React from 'react';
import { Link } from 'gatsby';

//

const SinglePizza = ({ pizza }) => (
  <div>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2 className="mark">{pizza.name}</h2>
    </Link>

    <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
  </div>
);

//

const PizzaList = ({ pizzas }) => (
  <div>
    {pizzas.map((pizza) => (
      <SinglePizza key={pizza.id} pizza={pizza} />
    ))}
  </div>
);

export default PizzaList;
