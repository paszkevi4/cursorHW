export const functions = {
  numberSetter(strToShow) {
    let i = null;
    while (!i) {
      i = +prompt(strToShow);
      let r = Number.isInteger(i / 1) ? '' : (i = null);
    }
    return i;
  },
  counter(LOWER = 2, HIGHER = 5, SKIP_EVEN = false) {
    let res = 0;
    for (let i = LOWER; i <= HIGHER; i++) {
      if (SKIP_EVEN && i % 2 == 0) continue;
      res += i;
    }
    return res;
  },
};
