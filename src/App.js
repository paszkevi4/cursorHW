import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TBA } from './homeworks/TBA';
import { HomeWork1 } from './homeworks/hw1/HomeWork1';
import { HomeWork2 } from './homeworks/hw2/HomeWork2';
import { HomeWork3 } from './homeworks/hw3/HomeWork3';
import { HomeWork4 } from './homeworks/hw4/HomeWork4';
import { HomeWork6 } from './homeworks/hw6/HomeWork6';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Route path="/hw1" render={() => <HomeWork1 />} />
        <Route path="/hw2" render={() => <HomeWork1 />} />
        <Route path="/hw3" render={() => <HomeWork3 />} />
        <Route path="/hw4" render={() => <HomeWork4 />} />
        <Route path="/hw6" render={() => <HomeWork6 />} />
        <Redirect to="/me" render={() => <TBA />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
