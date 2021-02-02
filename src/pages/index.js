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
              <input
                name="name"
                ref={register({ required: true })}
                placeholder="Name"
              />
              <div className="error">{errors.name && 'Name is required!'}</div>

              <input
                name="email"
                ref={register({ required: true })}
                placeholder="Your Email"
              />
              <div className="error">
                {errors.email && 'Email is required!'}
              </div>

              <button type="submit">Join Us</button>
            </form>

            <small>
              Sign up for exclusive news, merchandise, records, content and
              more. We do not share your information and your can unsubscribe at
              any time.
            </small>
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
  }

  h1 {
    margin-bottom: 2.4rem;
    color: var(--white);
    font-family: var(--font-sans);
    font-size: 3.8rem;
    font-weight: bold;
    line-height: 4rem;
    text-align: center;
    text-transform: uppercase;
  }

  small {
    max-width: 32rem;
    margin-top: 2.4rem;
    color: #444;
    font-size: 1.2rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 32rem;

    .error {
      margin: 0 0 1.6rem;
      color: var(--yellow);
      font-size: 1.4rem;
      text-align: center;
    }

    input {
      width: calc(100% - 2.4rem);
      margin: 0 0 1.6rem 0;
      padding: 1.2rem;
      border: 1px solid #888;
      background-color: var(--black);
      color: var(--white);
      text-align: center;

      &::placeholder {
        color: #444;
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: uppercase;
      }
    }

    button {
      width: 100%;
      margin: 0;
      padding: 1.2rem;
      border: 0;
      border: 1px solid var(--yellow);
      background-color: var(--yellow);
      color: var(--black);
      font-weight: 500;
      letter-spacing: 0.4rem;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        background-color: var(--black);
        color: var(--yellow);
      }
    }
  }

  .layout__content--left,
  .layout__content--right {
    display: grid;
    width: 50%;
    place-items: center;
  }
`;

// export const query = graphql``;
