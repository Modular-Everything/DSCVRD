import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { useForm } from 'react-hook-form';

import Container from '../Container';

//

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = (data) => {
    addToMailchimp(data.email, {
      NAME: data.name,
    })
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        setSubmitted(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <NewsletterWrap>
        <div className="image">image</div>

        <div className="form">
          <h3>Subscribe to our Newsletter</h3>

          <form
            name="NewsletterSignup"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
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

            <button type="submit" disabled={submitted}>
              Subscribe
            </button>

            {submitted && (
              <div className="alert success">
                Thanks, you've joined the counter culture!
              </div>
            )}

            {Object.entries(errors).length > 0 && (
              <div className="alert errors">
                <ul>
                  <li>{errors.name && 'Name is required.'}</li>
                  <li>{errors.email && 'Email is required.'}</li>
                </ul>
              </div>
            )}
          </form>
        </div>
      </NewsletterWrap>
    </Container>
  );
};

export default Newsletter;

const NewsletterWrap = styled.section``;
