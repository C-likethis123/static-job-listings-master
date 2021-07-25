import React from 'react';
import './index.css';

/** Components */
import SearchBar from "./SearchBar";
import JobList from "./JobList";

const App: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <JobList />
    </div>
  )
}

export default App;

