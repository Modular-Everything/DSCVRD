import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Countdown from 'react-countdown';
import Logo from '../images/logo__white.png';
import BG from '../images/bg.jpg';
import Layout from '../components/Layout';

//

const Completionist = () => (
  <span>We're live! Please refresh your browser...</span>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  }
  // Render a countdown
  return (
    <ul>
      <li>
        <span>{days}</span> Day{days !== 1 && 's'}
      </li>
      <li>
        <span>:</span>
      </li>
      <li>
        <span>{hours}</span> Hr{hours !== 1 && 's'}
      </li>
      <li>
        <span>:</span>
      </li>
      <li>
        <span>{minutes}</span> Min{minutes !== 1 && 's'}
      </li>
      <li>
        <span>:</span>
      </li>
      <li>
        <span>{seconds}</span> Sec{seconds !== 1 && 's'}
      </li>
    </ul>
  );
};

//

const HomePage = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  const launch = new Date('June 25, 2021');

  return (
    <Layout>
      <Content>
        <div className="layout__content">
          <div className="layout__content--left">
            <img src={Logo} alt="" />
            <div className="countdown">
              <Countdown date={launch} renderer={renderer} />
            </div>
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

export default HomePage;

const Content = styled.section`
  display: grid;
  width: calc(100vw - 6.4rem);
  height: calc(100vh - 6.4rem);
  padding: 3.2rem;
  background: url(${BG}) no-repeat;
  background-size: cover;
  place-content: center;

  .layout__content {
    display: grid;
    grid-gap: 4.8rem;
    grid-template-columns: 1fr;
    padding: 3.2rem;
    background-color: var(--black);

    @media (min-width: 900px) {
      grid-gap: 2.4rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .countdown {
    max-width: 32rem;
    color: var(--white);
    font-family: var(--font-sans);
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;

    ul {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        font-size: 1.6rem;
      }

      span {
        color: var(--yellow);
        font-size: 3.8rem;
        line-height: 5rem;
      }
    }
  }

  h1 {
    max-width: 62rem;
    margin-bottom: 3.2rem;
    color: var(--white);
    font-family: var(--font-sans);
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 4rem;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: 666px) {
      font-size: 3.8rem;
      line-height: 4rem;
    }
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
      margin: 1.6rem 0;
      color: var(--yellow);
      font-size: 1.4rem;
      text-align: center;
    }

    input {
      width: calc(100% - 2.4rem);
      margin: 0;
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
    place-items: center;
  }
`;
