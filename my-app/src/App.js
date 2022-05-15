import React, {useState} from 'react';
import './App.css';
import Container from './TodoContainer';
function App() {
  const [currentCount, setCurrentCount] = useState(0)
  return (
    <div className="App">
      <Container/>
      <h1>Count: {currentCount}</h1>
    </div>
  );
}

export default App;
