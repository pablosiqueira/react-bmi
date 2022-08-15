import React, {useRef} from 'react';

import Card from '../UI/Card';
import './Form.css';

const Form = React.memo(props => {
  const nameRef = useRef()
  const weightRef = useRef()
  const heightRef = useRef()

  const submitHandler = event => {
    event.preventDefault();
    props.onAddItem({
      id: Math.random(),
      name: nameRef.current.value,
      weight: weightRef.current.value,
      height: heightRef.current.value
    })
    nameRef.current.value = ''
    weightRef.current.value = ''
    heightRef.current.value = ''
  };

  return (
    <section className="ingredient-form">
      <Card>
        <h5>Calculate BMI and Add to Table</h5>
        <form onSubmit={submitHandler}>
          <div className="form-control mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameRef} required/>
          </div>
          <div className="form-control mb-2">
            <label htmlFor="weight">Weight (kg)</label>
            <input type="number" step="0.1" min='0' id="weight" ref={weightRef} required/>
          </div>
          <div className="form-control mb-2">
            <label htmlFor="height">Height (m)</label>
            <input type="number" step="0.01" min='0' id="height" ref={heightRef} required/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add to table</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default Form;
