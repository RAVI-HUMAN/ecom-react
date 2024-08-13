import logo from './logo.svg';
import './App.css';
import './header.css';

import ImageSlider from './components/slider';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/card';

import Header from './components/header-1';

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setApiData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
  return (
    <div className="App">
    <Header></Header>
    <ImageSlider></ImageSlider>
      {/* <h1>Our Products</h1> */}
      <div className="card-container">
        <div className="row">
          {apiData.map((item, index) => (
            <React.Fragment key={index}>
              <Card data={item} />
              {(index + 1) % 4 === 0 && <div className="w-100"></div>}
            </React.Fragment>
          ))}
        </div>
        </div>
    </div>
  );
};

export default App;
