import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

//

const Contact = ({ types }) => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(types);

  return (
    <ContactWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          ref={register}
          placeholder="Name"
          ref={register({ required: true })}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          ref={register({ required: true })}
        />
        <select name="enquiry" ref={register({ required: true })}>
          {types.map((type, index) => (
            <option value={index} key={index}>
              {type}
            </option>
          ))}
        </select>
        <button type="submit">Get in touch</button>
      </form>

      <div className="errors">
        <ul>
          <li>{errors.lastname && 'Last name is required.'}</li>
          <li>{errors.age && 'Please enter number for age.'}</li>
        </ul>
      </div>
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
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
