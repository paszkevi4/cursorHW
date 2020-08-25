const newFontGenerator = (size = 16) => {
  return {
    next(direction) {
      if (direction === 'up') {
        if (size >= 72) {
          return { value: size, done: false };
        }
        return { value: (size += 2), done: false };
      } else if (direction === 'down') {
        if (size <= 6) {
          return { value: size, done: false };
        }
        return { value: (size -= 2), done: false };
      } else {
        return { value: size, done: false };
      }
    },
  };
};

export const fontGenerator = newFontGenerator(14);
