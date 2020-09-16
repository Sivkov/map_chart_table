import React from 'react';
import Header from "./resources/components/header";
import Sidebar from "./resources/components/sidebar";
import Menu from "./resources/components/menu";
import TableBasic from "./resources/components/table";
import Example from './resources/components/example';
import LineChar from './resources/components/chart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <TableBasic />
          <Example />
          <LineChar />
      
      </header>
    </div>
  );
}

export default App;
