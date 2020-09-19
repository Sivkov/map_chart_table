import React from 'react';
import TableBasic from "./resources/components/table";
import Example from './resources/components/example';
import LineChar from './resources/components/chart';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
        
          <TableBasic />
          <Example />
          <LineChar />
      
    </div>
  );
}

export default App;
