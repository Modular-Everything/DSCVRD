import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { useForm } from 'react-hook-form';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

//

const Newsletter = () => {
  const query = graphql`
    {
      sanityMiscSettings(_id: { eq: "miscSettings" }) {
        newsletterImage {
          asset {
            fluid(maxWidth: 1080) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `;

  const { sanityMiscSettings: newsletter } = useStaticQuery(query);

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
    <NewsletterWrap data-sal="fade">
      <div className="image">
        <div className="gatsby-image-wrapper">
          <Img
            fluid={newsletter.newsletterImage.asset.fluid}
            alt="Newsletter Subscription"
          />
        </div>
      </div>

      <div className="form">
        <h3>Subscribe to our Newsletter</h3>

        <form
          name="NewsletterSignup"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          {!submitted ? (
            <>
              <input
                name="name"
                placeholder="Name"
                ref={register({ required: true })}
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                ref={register({ required: true })}
              />

              <button type="submit">Subscribe</button>

              <div className="small">
                <p>
                  We{' '}
                  <span
                    className={
                      errors.name || errors.email ? 'underline' : undefined
                    }
                  >
                    do not
                  </span>{' '}
                  share your data and you can unsubscribe any time you like
                </p>
              </div>
            </>
          ) : (
            <div className="alert success">
              Thanks, you've joined the counter culture.
              <span>Check your inbox to confirm your subscription.</span>
            </div>
          )}

          {Object.entries(errors).length > 0 && (
            <div className="alert errors">
              <ul>
                {errors.name && !errors.email && <li>We need your name</li>}
                {errors.email && !errors.name && <li>We need your email</li>}
                {errors.name && errors.email && (
                  <>
                    <li>We need your name, your email,</li>
                    <li>and your motorcycle...</li>
                  </>
                )}
              </ul>
            </div>
          )}
        </form>
      </div>
    </NewsletterWrap>
  );
};

export default Newsletter;

const NewsletterWrap = styled.section`
  overflow: hidden;
  background-color: var(--black);

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1.5fr 1fr;
  }

  .image {
    overflow: hidden;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 3.2rem;

    h3 {
      margin-bottom: 3.2rem;
      padding: 3.2rem 3.2rem 0;
      color: var(--white);
      font-size: 3.2rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      line-height: 4rem;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 4.4rem;
        line-height: 5rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: calc(100% - 6.4rem);

      @media (min-width: 768px) {
        width: 75%;
      }

      button,
      input {
        margin-bottom: 3.2rem;
        padding: 0.8rem;
        border: 0;
        border: 1px solid var(--white);
        background-color: var(--black);
        color: var(--white);
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: 0.25em;
        line-height: 3.2rem;
        text-align: center;

        &::placeholder {
          color: var(--coal);
          text-transform: uppercase;
        }
      }

      button {
        transition: 150ms ease opacity;
        border: 0;
        background-color: var(--yellow);
        color: var(--black);
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
          opacity: 0.9;
        }
      }

      .small {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        color: var(--foil);
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.27em;
        line-height: 1.6rem;
        text-align: center;
        text-transform: uppercase;

        .underline {
          text-decoration: underline;
        }

        p {
          width: 75%;
        }
      }

      .alert {
        color: var(--white);
        font-size: 1.4rem;
        line-height: 2rem;
        text-align: center;

        &.errors ul {
          margin: 2.4rem 0 0 0;
          padding: 0;
          color: var(--red);
          list-style: none;
        }

        &.success span {
          display: block;
          color: var(--yellow);
        }
      }
    }
  }
`;
