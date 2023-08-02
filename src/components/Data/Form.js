import React, {useState} from 'react';

import Card from '../UI/Card';
import './Form.css';

const Form = React.memo(props => {
  const [nameIn,setNameIn] = useState('')
  const [weightIn,setWeightIn] = useState('')
  const [heightIn,setHeightIn] = useState('')

  const getName = (event) => {
    event.preventDefault()
    setNameIn(event.target.value)
  }

  const getWeight = (event) => {
    event.preventDefault()
    setWeightIn(event.target.value)
  }

  const getHeight = (event) => {
    event.preventDefault()
    setHeightIn(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault();
    props.onAddItem({
      id: Math.random(),
      name: nameIn,
      weight: weightIn,
      height: heightIn
    })
    setNameIn('')
    setHeightIn('')
    setWeightIn('')
  };

  return (
    <section className="ingredient-form">
      <Card>
        <h5>Calculate BMI and Add to Table</h5>
        <form onSubmit={submitHandler}>
          <div className="form-control mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" data-testid="name" value={nameIn} onChange={getName} required/>
          </div>
          <div className="form-control mb-2">
            <label htmlFor="weight">Weight (kg)</label>
            <input type="number" step="0.1" min='0' id="weight" data-testid="weight" value={weightIn} onChange={getWeight} required/>
          </div>
          <div className="form-control mb-2">
            <label htmlFor="height">Height (m)</label>
            <input type="number" step="0.01" min='0' id="height" data-testid="height" value={heightIn} onChange={getHeight} required/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit" data-testid="submitData">Add to table</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default Form;
