import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from './components/Products';
import Payment from './components/Payments';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/products" exact Component={Products} />
          <Route path="/payments" exact Component={Payment} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
