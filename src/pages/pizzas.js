import React from 'react';
import { graphql } from 'gatsby';

import PizzaList from '../components/PizzaList';

//

const PizzasPage = ({ data }) => {
  const pizzas = data.pizzas.nodes;

  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  );
};

export default PizzasPage;

//

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        price
        id
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        toppings {
          name
          id
        }
      }
    }
  }
`;
