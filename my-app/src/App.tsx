import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './component/Counter/Counter';
import { Todo } from './component/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Counter/>
      <h1>------------------------------------------------------------------------------------</h1>
      <div>
        <Todo/>
      </div>
    </div>
  );
}

export default App;
