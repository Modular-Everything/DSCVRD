import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

//

const Contact = ({ types }) => {
  const [submitted, setSubmitted] = useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': data['form-name'],
      }),
    })
      .then(() => setSubmitted(true))
      .catch((err) => console.error(err));
  };

  return (
    <ContactWrap>
      <form
        data-netlify="true"
        name="ContactForm"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="hidden"
          name="form-name"
          ref={register}
          value="ContactForm"
        />

        <input
          name="name"
          placeholder="Name"
          ref={register({ required: true })}
          disabled={submitted}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          ref={register({ required: true })}
          disabled={submitted}
        />

        <select
          name="enquiry"
          ref={register({ required: true })}
          disabled={submitted}
        >
          {types.map((type, index) => (
            <option value={type} key={index}>
              {type}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          placeholder="What's up?"
          ref={register({ required: true })}
          disabled={submitted}
        />

        <button type="submit" disabled={submitted}>
          Get in touch
        </button>

        {submitted && (
          <div className="alert success">
            Your message has been sent and we'll be in touch soon
          </div>
        )}

        {Object.entries(errors).length > 0 && (
          <div className="alert errors">
            <ul>
              <li>{errors.name && 'Name is required.'}</li>
              <li>{errors.email && 'Email is required.'}</li>
              <li>{errors.message && 'Message is required.'}</li>
            </ul>
          </div>
        )}
      </form>
    </ContactWrap>
  );
};

export default Contact;

const ContactWrap = styled.section`
  display: grid;
  width: calc(100vw - 19.2rem);
  height: calc(100vh - 19.2rem);
  padding: 9.6rem;
  background-color: var(--white);
  color: var(--black);
  place-items: center;

  form {
    display: grid;
    grid-gap: 1.6rem;
    grid-template-columns: repeat(2, 1fr);

    input,
    select,
    textarea {
      padding: 0.8rem;
      border: 1px solid var(--black);
      font-family: var(--font-sans);
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.25em;
      line-height: 2.4rem;

      &:disabled {
        cursor: not-allowed;
      }

      &::placeholder {
        text-transform: uppercase;
      }
    }

    input[name='name'],
    input[name='email'] {
      grid-column: span 1;
    }

    select,
    textarea {
      grid-column: span 2;
    }

    textarea {
      height: 12rem;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      text-transform: uppercase;
      cursor: pointer;

      &::-ms-expand {
        display: none;
      }
    }

    button {
      grid-column: span 2;
      padding: 0.8rem;
      transition: 150ms ease opacity;
      border: 0;
      opacity: 1;
      background-color: var(--black);
      color: var(--yellow);
      font-family: var(--font-sans);
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.25em;
      line-height: 2.4rem;
      text-transform: uppercase;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;

        &:hover {
          opacity: 0.5;
        }
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .alert {
    display: grid;
    grid-column: span 2;
    font-family: var(--font-sans);
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;

    &.success {
      padding: 0.4rem;
      background-color: var(--highlight);
      color: var(--black);
    }

    &.errors ul {
      grid-gap: 1.6rem;
      color: var(--red);
    }
  }
`;
