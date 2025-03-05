import React from 'react';
import './App.css';
import Card from '../src/components/Card';
import lightgrey from '../src/assets/lightgrey.png';
import black from '../src/assets/black.png';
import Accordion from '../src/components/Accordion';
import ContactForm from '../src/components/ContactForm';
import Navbar from '../src/components/Navbar';
import Carousel from '../src/components/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Navbar/>
      <div className='carouselContainer'>
      <Carousel/>
      </div>
      
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
        <div className='Bottom'>
        <div id='accordionContainer'>
          <Accordion
          
          />
        </div>
        <div id='contactFormContainer' >
        <ContactForm 
        />
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
