import React from 'react';
import Table from 'react-bootstrap/Table';
import {FaTrashAlt} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';

const PeopleTable = props => {
  const tbodyAlign = {verticalAlign: 'middle'}
  return (
    <section className='mx-4'>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight (kg)</th>
            <th>Height (m)</th>
            <th>BMI</th>
            <th>Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={tbodyAlign}>
        {props.data.length === 0 && (
            <tr><td className='text-center' colSpan='6' >No results found</td></tr>
        )}
          {props.data.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.weight}</td>
              <td>{person.height}</td>
              <td>{person.bmi}</td>
              <td>{person.classification}</td>
              <td className='text-center'><Button variant="danger" onClick={() => props.onRemoveItem(person.id)}><FaTrashAlt /></Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default PeopleTable;
