import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import SearchIcon from '../../images/search.inline.svg';

//

const Search = ({ visible }) => {
  console.log('search');

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

      <SearchWrap>
        <div className="search">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
        <Skrim />
      </SearchWrap>
    </>
  );
};

export default Search;

const SearchWrap = styled.section`
  position: absolute;

  .search {
    position: relative;
    z-index: 1100;

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;

      input {
        width: 100%;
        max-width: 50rem;
        height: 4.8rem;
        padding: 1.6rem;
        border: 0;
        border-radius: 0.4rem;
        color: var(--black);
        font-size: 2.4rem;
        font-style: normal;
        font-weight: bold;
        line-height: 3.2rem;
        text-transform: uppercase;

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
        width: calc(4.8rem + (1.6rem * 2));
        height: calc(4.8rem + (1.6rem * 2));
        margin: 0 0 0 2.4rem;
        padding: 1.6rem;
        border: 0;
        border-radius: 0.4rem;
        background: var(--yellow);
        cursor: pointer;
      }
    }
  }
`;

const Skrim = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.75;
  background-color: var(--black);
`;
