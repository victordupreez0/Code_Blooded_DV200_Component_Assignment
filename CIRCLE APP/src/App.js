import React from 'react';
import './App.css';
import Card from './Card';
import lightgrey from './lightgrey.png';
import black from './black.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="card-container">
        <Card 
          image={lightgrey} 
          title="GREY SPORT T-SHIRT" 
          description="A comfortable and stylish grey sports t-shirt, perfect for workouts and casual wear." 
        />
        <Card 
          image={black} 
          title="BLACK SPORT T-SHIRT" 
          description="A comfortable and stylish black sports t-shirt, perfect for workouts and casual wear." 
        />
        <Card 
          image={lightgrey} 
          title="RED SPORT T-SHIRT" 
          description="A comfortable and stylish red sports t-shirt, perfect for workouts and casual wear." 
        />
        </div>
      </header>
    </div>
  );
}

export default App;
