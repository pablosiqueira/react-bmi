import React, {useState, useEffect} from 'react';
import Form from './Form';
import Search from './Search';
import PeopleTable from './PeopleTable';
import Navigation from '../UI/Navigation';
import Footer from '../UI/Footer';
import Introduction from './Introduction';
import ClassificationTable from './Classification-Table';

const InitialList = [
  {id: 1, name: 'Jack', weight: 83, height: 1.85, bmi: 24.25, classification: 'Normal'},
  {id:2, name: 'Natalie', weight: 42, height: 1.56, bmi: 17.26, classification: 'Under-weight'}
]

function Data() {
  const [people, setPeople] = useState(InitialList)
  const [filtered, setFiltered] = useState(InitialList)
  let searchWord = ''

  const calculateBmiAndClass = (weight, height) => {
    const bmi = (weight/(height * height)).toFixed(2)
    let classification = ''
    switch (true) {
      case (bmi < '18.5'):
        classification = 'Underweight'
        break
      case (bmi >= '18.5' && bmi <= '24.9'):
        classification = 'Normal'
        break
      case (bmi > '24.9' && bmi <= '29.9'):
        classification = 'Overweight'
        break
      case (bmi > '29.9'):
        classification = 'Obesity'
        break  
      default:
        classification = ''  
    }
    return {bmi,classification}
  }

  const addItemHandler = (newItem) => {
    const bmiClass = calculateBmiAndClass(newItem.weight, newItem.height)
    const itemToAdd = {
      ...newItem,
      bmi: bmiClass.bmi,
      classification: bmiClass.classification
    }
    setPeople((prevList) => {
      return [...prevList, itemToAdd]
    })
  }

  const removeItemHandler = (id) => {
    setPeople((prevList) => {
      return prevList.filter(item => item.id !== id)
    })
  }

  const setSearchWord = (word) => {
    searchWord = word
    console.log(searchWord)
    setFiltered(
      people.filter(item => item.name.toLowerCase().includes(searchWord.toLowerCase()))
    )
  }

  useEffect(()=>{
    const toSearch = document.getElementById('search-name').value
    setFiltered(
      people.filter(item => item.name.toLowerCase().includes(toSearch.toLowerCase()))
    )
  },[people, searchWord])

  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <section>
        <Search onSetSearchWord={setSearchWord} searchValue={searchWord}/>
        <PeopleTable data={filtered} onRemoveItem={removeItemHandler}/>
      </section>
      <ClassificationTable />
      <Form onAddItem={addItemHandler}/>
      <Footer />
    </div>
  );
}

export default Data;
