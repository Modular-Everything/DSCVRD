import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Logo from '../images/logo__white.png';
import Layout from '../components/Layout';

//

const HomePage = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <Content>
        <div className="layout__content">
          <div className="layout__content--left">
            <img src={Logo} alt="" />
          </div>

          <div className="layout__content--right">
            <h1>Welcome to the Counter Community</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="firstname" ref={register} />{' '}
              {/* register an input */}
              <input name="lastname" ref={register({ required: true })} />
              {errors.lastname && 'Last name is required.'}
              <input name="age" ref={register({ pattern: /\d+/ })} />
              {errors.age && 'Please enter number for age.'}
              <input type="submit" />
            </form>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

HomePage.propTypes = {};

export default HomePage;

const Content = styled.section`
  display: grid;
  width: 100vw;
  height: 100vh;
  place-content: center;

  .layout__content {
    display: flex;
    padding: 3.2rem;
    background-color: var(--black);
    color: var(--white);
  }
`;

// export const query = graphql``;
