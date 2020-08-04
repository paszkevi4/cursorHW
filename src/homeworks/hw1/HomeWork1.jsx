import React from 'react';
import { functions } from './functionsHW1.js';

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

export const HomeWork1 = () => {
  return (
    <div>
      Максимальна ціна: {prices.theBiggestOne} <br />
      Мінімальна ціна: {prices.theLowestOne} <br />
      Вартість всіх товарів: {prices.totalPrice} <br />
      Округлена ціла частина: {prices.totalPriceFloor} <br />
      Сума товарів округлена до сотень: {prices.totalPriceRounded} <br />
      Чи є сума всіх товарів парним числом: {prices.isEven ? 'так' : 'ні'} <br />
      Решта: {prices.customerChange} <br />
      Середнє значення цін: {prices.average} <br />
      Нова ціна: {prices.newPrice} <br />
      Чистий прибуток: {prices.profit}
    </div>
  );
};
