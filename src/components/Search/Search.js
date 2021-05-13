import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import SearchIcon from '../../images/search.inline.svg';

//

const Search = ({ visible, toggle }) => {
  console.log(visible);
  console.log(toggle);

  return (
    <>
      {visible && (
        <Helmet>
          <style type="text/css">
            {`
              body {
                overflow: hidden;
              }
            `}
          </style>
        </Helmet>
      )}

      <SearchWrap visible={visible}>
        <div className="search">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>

        <Skrim onClick={() => toggle(false)} />
      </SearchWrap>
    </>
  );
};

export default Search;

const SearchWrap = styled.section`
  position: absolute;
  z-index: 1100;
  width: 100%;
  height: 100%;
  transition: 250ms ease opacity;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'unset' : 'none')};

  .search {
    position: absolute;
    z-index: 1500;
    top: calc(50% - 4.8rem);
    left: 50%;
    width: 100%;
    max-width: 56rem;
    transform: translate(-50%);

    form {
      display: flex;
      margin: 2.4rem;

      input {
        width: 100%;
        max-width: 50rem;
        padding: 1.2rem;
        border: 0;
        border-radius: 0.4rem;
        color: var(--black);
        font-size: 1.8rem;
        font-style: normal;
        font-weight: bold;
        line-height: 2.4rem;
        text-transform: uppercase;

        @media (min-width: 640px) {
          padding: 1.6rem;
          font-size: 2.4rem;
          line-height: 3.2rem;
        }

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: var(--foil);
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8.4rem;
        margin: 0 0 0 0.8rem;
        padding: 1.2rem;
        border: 0;
        border-radius: 0.4rem;
        background: var(--yellow);
        cursor: pointer;

        svg {
          width: 2.4rem;
          height: 2.4rem;
        }

        @media (min-width: 640px) {
          width: calc(4.8rem + (1.6rem * 2));
          height: calc(4.8rem + (1.6rem * 2));
          margin: 0 0 0 2.4rem;
          padding: 1.6rem;

          svg {
            width: 3.2rem;
            height: 3.2rem;
          }
        }
      }
    }
  }
`;

const Skrim = styled.button`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: 0;
  opacity: 0.75;
  background-color: var(--black);
  cursor: pointer;
`;

Search.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
