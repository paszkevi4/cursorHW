import React, { useState } from 'react';
import Search from './components/Search';
import Planets from './components/Planets';
import Preloader from './components/Preloader';
import { Card } from '../../components/common/Card1';
import { delay } from '../hw11/functions';

import { getPlanets } from './requests.js';

export const HomeWork12 = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [planetsActive, setPlanetsActive] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState(false);
  const [currentPage, setCurrentPae] = useState(1);
  const [planets, setPlanets] = useState([]);

  const requestPlanets = async (page) => {
    setCurrentPae(page);
    if (page > 6) {
      setCurrentPae(6);
      return;
    } else if (page < 1) {
      setCurrentPae(1);
      return;
    }
    setIsFetching(true);
    setMoviesToShow(false);
    await delay(1000);
    await getPlanets(page)
      .then((data) => {
        setPlanets(data.results);
        return data;
      })
      .then((data) => console.log(data));
    setIsFetching(false);
    setPlanetsActive(true);
  };

  let planetsToShow = planets.map((el) => <p>{el.name}</p>);

  window.planets = planets;
  window.isFetching = isFetching;

  return (
    <div className="row">
      <Search func={requestPlanets} />
      {isFetching ? <Preloader /> : ''}
      {planetsActive ? (
        <Planets text={planetsToShow} currentPage={currentPage} clickHandler={requestPlanets} />
      ) : (
        ''
      )}
    </div>
  );
};
