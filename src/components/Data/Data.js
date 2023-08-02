import React, {useState, useEffect} from 'react';
import Form from './Form';
import Search from './Search';
import PeopleTable from './PeopleTable';
import ClassificationTable from './Classification-Table';

function Data(props) {
  //const initial = props.InitialList ? props.InitialList.map(item => addItemHandler(item)) : []
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
  let initial = []

  const initialClassification = () => {
    if(props.InitialList){
      props.InitialList.map(item => {
        const bmiClass = calculateBmiAndClass(item.weight, item.height)
        const itemToAdd = {
          id: Math.random(),
          ...item,
          bmi: bmiClass.bmi,
          classification: bmiClass.classification
        }
        return initial.push(itemToAdd)
      })
    }
  }

  initialClassification()
  

  const [people, setPeople] = useState(initial)
  const [filtered, setFiltered] = useState(initial)
  let searchWord = ''

  

  const addItemHandler = (newItem,initial) => {
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
    <>
      <section>
        <Search onSetSearchWord={setSearchWord} searchValue={searchWord}/>
        <PeopleTable data={filtered} onRemoveItem={removeItemHandler}/>
      </section>
      <ClassificationTable />
      <Form onAddItem={addItemHandler}/>
    </>
  );
}

export default Data;
