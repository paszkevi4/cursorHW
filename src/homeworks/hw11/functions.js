const delay = () => {
  return new Promise((res) =>
    setTimeout(() => {
      res();
    }, 50),
  );
};

export const getRandomChinese = async (length) => {
  let result = [];
  try {
    for (let i = 0; i < length; i++) {
      const uniqueKey = Date.now().toString().substr(-5);
      result.push(String.fromCharCode(uniqueKey));
      await delay();
    }
  } catch {
    throw new Error('impossible error');
  } finally {
    console.log(result.join(''));
    // return result.join('');
  }
};

getRandomChinese(4);
