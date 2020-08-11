import React from 'react';

import { Card } from './Card';
import { getRandomNumber, namePrettier } from '../hw3/functions';
import { getMyTaxes, getMiddleTaxes, getTotalTaxes, getMySalary } from './functions';

import store from '../../Store/store';

export const HomeWork7 = () => {
  const state = store.hw7;
  const countries = Object.keys(state);
  const mySalary = getRandomNumber(1500, 2000);

  setInterval(() => {
    console.log('4th function is here', getMySalary.call(state[countries[0]], mySalary));
  }, 10000);

  const myTaxesAcrosCountries = countries.map((country) => (
    <Card
      title={`My taxes in ${namePrettier(country)}`}
      text={`$ ${getMyTaxes.call(
        state[country],
        mySalary,
      )} you would pay for taxes in ${namePrettier(country)} if you had ${mySalary}-dollar salary.`}
    />
  ));

  const middleTaxesByCountries = countries.map((country) => (
    <Card
      title={`Average taxes in ${namePrettier(country)}`}
      text={`$ ${getMiddleTaxes.call(
        state[country],
      )} taxes are paid by IT specialist in each ${namePrettier(country)} on average.`}
    />
  ));

  const totalTaxesInCountries = countries.map((country) => (
    <Card
      title={`Total taxes in ${namePrettier(country)}`}
      text={`$ ${getTotalTaxes.call(
        state[country],
      )} taxes are paid by IT specialists in ${namePrettier(country)}.`}
    />
  ));

  return (
    <div className="row">
      <div>{myTaxesAcrosCountries}</div>
      <div>{middleTaxesByCountries}</div>
      <div>{totalTaxesInCountries}</div>
    </div>
  );
};
