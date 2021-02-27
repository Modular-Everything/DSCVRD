import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { useForm } from 'react-hook-form';

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
    <NewsletterWrap>
      <div className="image">
        <div className="gatsby-image-wrapper">
          <img
            sizes="(max-width: 1920px) 100vw, 1920px"
            srcSet="https://cdn.sanity.io/images/lylk5ufs/production/1162b93a3b80c9171fea5e3d8c388d5e1a75954d-6000x4000.jpg?w=480&amp;h=320&amp;fit=crop 480w,
https://cdn.sanity.io/images/lylk5ufs/production/1162b93a3b80c9171fea5e3d8c388d5e1a75954d-6000x4000.jpg?w=960&amp;h=640&amp;fit=crop 960w,
https://cdn.sanity.io/images/lylk5ufs/production/1162b93a3b80c9171fea5e3d8c388d5e1a75954d-6000x4000.jpg?w=1920&amp;h=1280&amp;fit=crop 1920w,
https://cdn.sanity.io/images/lylk5ufs/production/1162b93a3b80c9171fea5e3d8c388d5e1a75954d-6000x4000.jpg?w=2880&amp;h=1920&amp;fit=crop 2880w,
https://cdn.sanity.io/images/lylk5ufs/production/1162b93a3b80c9171fea5e3d8c388d5e1a75954d-6000x4000.jpg?w=3840&amp;h=2560&amp;fit=crop 3840w,
https://cdn.sanity.io/images/lylk5ufs/production/1162b93a3b80c9171fea5e3d8c388d5e1a75954d-6000x4000.jpg?w=5760&amp;h=3840&amp;fit=crop 5760w,
https://cdn.sanity.io/images/lylk5ufs/production/1162b93a3b80c9171fea5e3d8c388d5e1a75954d-6000x4000.jpg 6000w"
            src="https://cdn.sanity.io/images/lylk5ufs/production/1162b93a3b80c9171fea5e3d8c388d5e1a75954d-6000x4000.jpg?w=1920&amp;h=1280&amp;fit=crop"
            alt=""
            loading="lazy"
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
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  background-color: var(--black);

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
      max-height: 15rem;

      @media (min-width: 1024px) {
        max-height: 40rem;
      }
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 6.4rem);
    padding: 3.2rem;

    h3 {
      margin-bottom: 3.2rem;
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
      width: calc(100% - 1.6rem);

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
