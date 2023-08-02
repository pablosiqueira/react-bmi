import React from 'react';
import Data from './components/Data/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/UI/Footer';
import Navigation from './components/UI/Navigation';
import Introduction from './components/Data/Introduction';

/*const InitialList1 = [
  {id: 1, name: 'Jack', weight: 83, height: 1.85, bmi: 24.25, classification: 'Normal'},
  {id:2, name: 'Natalie', weight: 42, height: 1.56, bmi: 17.26, classification: 'Under-weight'}
]*/
const InitialList = [
  {name: 'Jack', weight: 83, height: 1.85},
  {name: 'Natalie', weight: 42, height: 1.56}
]

const App = props => {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Data InitialList={InitialList}/>
      <Footer />
    </div>
  )
};

export default App;
