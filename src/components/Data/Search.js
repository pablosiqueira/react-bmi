import React, {useRef} from 'react';
import './Search.css';
import Card from '../UI/Card';

const Search = React.memo(props => {
  const searchRef = useRef()
  const searchWordHandler = () => {
    props.onSetSearchWord(searchRef.current.value)
  }
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Name</label>
          <input type="text" ref={searchRef} onInput={searchWordHandler} id="search-name"/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
