import React from 'react';

/** Contexts */
import FilterProvider from './FilterContext';

/** Components */
import SearchBar from "./SearchBar";
import JobList from "./JobList";

/** Styles */
import './index.css';

const App: React.FC = () => {
  return (
    <FilterProvider>
      <div className="app-container">
        <SearchBar />
        <JobList />
      </div>
    </FilterProvider>
  )
}

export default App;

