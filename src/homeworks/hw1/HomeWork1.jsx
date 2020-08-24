import React from 'react';
import { Card } from '../../components/common/Card1';
import { functions } from './functions.js';

const APPLE_PRICE = 15.678;
const FUEL_PRICE = 123.965;
const ICECREAM_PRICE = 90.2345;

let basicPrices = [APPLE_PRICE, FUEL_PRICE, ICECREAM_PRICE];

let prices = {
  theBiggestOne: Math.max(...basicPrices),
  theLowestOne: Math.min(...basicPrices),
  totalPrice: APPLE_PRICE + FUEL_PRICE + ICECREAM_PRICE,
  totalPriceFloor: functions.totalFlooredCount(...basicPrices),
  totalPriceRounded: null,
  isEven: false,
  customerMoney: 500,
  customerChange: null,
  average: null,
  discount: Math.random(),
  newPrice: null,
  profit: null,
};

prices.totalPriceRounded = functions.ceiledTotal(prices.totalPriceFloor, 100);
prices.isEven = prices.totalPriceFloor % 2 === 0;
prices.customerChange =
  (prices.customerMoney || prompt('How much does customer have?')) - prices.totalPrice;
prices.average = functions.averageCount(basicPrices);
prices.newPrice = functions.newPriceCount(prices.totalPrice, prices.discount);
prices.profit = functions.profitCount(prices.newPrice, prices.totalPrice);

const arrToShow = [
  ['Максимальна ціна: ', prices.theBiggestOne],
  ['Мінімальна ціна: ', prices.theLowestOne],
  ['Вартість всіх товарів: ', prices.totalPrice],
  ['Округлена ціла частина: ', prices.totalPriceFloor],
  ['Сума товарів округлена до сотень:', prices.totalPriceRounded],
  ['Чи є сума всіх товарів парним числом:', prices.isEven ? 'так' : 'ні'],
  ['Решта:', prices.customerChange],
  ['Середнє значення цін:', prices.average],
  ['Нова ціна:', prices.newPrice],
  ['Чистий прибуток:', prices.profit],
];

export const HomeWork1 = () => {
  return (
    <div className="row">
      <Card key="id1" title="HW #1" text={arrToShow} hide={true} />
    </div>
  );
};
