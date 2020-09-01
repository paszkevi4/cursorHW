export const delay = (ms) => {
  return new Promise((res) =>
    setTimeout(() => {
      res();
    }, ms),
  );
};

let time = null;

export const getRandomChinese = async (length) => {
  time = Date.now();
  let result = [];
  try {
    for (let i = 0; i < length; i++) {
      const uniqueKey = Date.now().toString().substr(-5);
      result.push(String.fromCharCode(uniqueKey));
      await delay(50);
    }
  } catch {
    throw new Error('impossible error');
  } finally {
    console.log(`${result.join('')} за ${Date.now() - time} ms`);
    // return result.join('');
  }
};

getRandomChinese(4);

// in case you want to run it in console
window.getRandomChinese = getRandomChinese;
