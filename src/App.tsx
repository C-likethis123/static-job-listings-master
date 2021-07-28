import React from 'react';

import './index.css';
// TODO: make app responsive
// TODO: make app background

/** Contexts */
import FilterProvider from './FilterContext';

/** Components */
import SearchBar from "./SearchBar";
import JobList from "./JobList";
const App: React.FC = () => {
  return (
    <FilterProvider>
      <div>
        <SearchBar />
        <JobList />
      </div>
    </FilterProvider>
  )
}

export default App;

