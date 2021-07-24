import React from 'react';
import './index.css';

/** Components */
import NavBar from "./NavBar";
import JobList from "./JobList";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <JobList />
    </div>
  )
}

export default App;

