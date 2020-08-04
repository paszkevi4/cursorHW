export const functions = {
  totalFlooredCount(firstPrise, secondPrice, thirdPrice) {
    return Math.floor(firstPrise) + Math.floor(secondPrice) + Math.floor(thirdPrice);
  },
  ceiledTotal(price, neededRound) {
    return Math.ceil(price / neededRound) * neededRound;
  },
  averageCount(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return +(sum / arr.length).toFixed(2);
  },
  newPriceCount(totalPrice, discount) {
    return +(totalPrice * (1 - discount)).toFixed(2);
  },
  profitCount(newPrice, totalPrice) {
    return newPrice - totalPrice / 2;
  },
};
