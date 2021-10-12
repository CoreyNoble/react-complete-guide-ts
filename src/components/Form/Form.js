import { useState } from 'react';
import './Form.css';

import Modal from '../UI/Modal/Modal';

const Form = (props) => {
  const [errorModalData, setErrorModalData] = useState();
  const submitForm = (e) => {
    e.preventDefault();

    const name = e.target.elements.username.value
    const age = e.target.elements.age.value

    if (name.length === 0) {
      setErrorModalData({
        title: 'Invalid Input',
        message: 'You must enter a name'
      })
    } else if (age <= 0) {
      setErrorModalData({
        title: 'Invalid Input',
        message: 'Age must contain a positive value'
      })
    } else {
      props.addUser({
        name: name,
        age: age,
      });
  
      e.target.elements.username.value = '';
      e.target.elements.age.value = '';
    }
  };

  const closeModal = () => {
    setErrorModalData(null);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input name="age" type="number" />
        <button type="submit">Add User</button>
      </form>
      {errorModalData && (
        <Modal
          close={closeModal}
          title={errorModalData.title}
          message={errorModalData.message}
        />
      )}
    </>
  );
};

export default Form;
