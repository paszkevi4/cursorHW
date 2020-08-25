import React from 'react';
import { BrowserRouter, HashRouter, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TBA } from './homeworks/TBA';
import { HomeWork1 } from './homeworks/hw1/HomeWork1';
import { HomeWork2 } from './homeworks/hw2/HomeWork2';
import { HomeWork3 } from './homeworks/hw3/HomeWork3';
import { HomeWork4 } from './homeworks/hw4/HomeWork4';
import { HomeWork6 } from './homeworks/hw6/HomeWork6';
import { HomeWork7 } from './homeworks/hw7/HomeWork7';
import { HomeWork8 } from './homeworks/hw8/HomeWork8';
import { HomeWork9 } from './homeworks/hw9/HomeWork9';
import { HomeWrork11 } from './homeworks/hw11/HomeWork11';
import { HomeWork13 } from './homeworks/hw13/HomeWork13';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <div className="main">
        <Route path="/hw1" render={() => <HomeWork1 />} />
        <Route path="/hw2" render={() => <HomeWork2 />} />
        <Route path="/hw3" render={() => <HomeWork3 />} />
        <Route path="/hw4" render={() => <HomeWork4 />} />
        <Route path="/hw5" render={() => <HomeWork1 />} />
        <Route path="/hw6" render={() => <HomeWork6 />} />
        <Route path="/hw7" render={() => <HomeWork7 />} />
        <Route path="/hw8" render={() => <HomeWork8 />} />
        <Route path="/hw9" render={() => <HomeWork9 />} />
        <Route path="/hw11" render={() => <HomeWrork11 />} />
        <Route path="/hw13" render={() => <HomeWork13 />} />
        <Route exact path="/">
          <Redirect to="/me" render={() => <TBA />} />
        </Route>
      </div>
    </HashRouter>
  );
}

export default App;
