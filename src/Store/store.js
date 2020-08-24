let store = {
  hw1: {},
  hw2: {
    LOWER: 2,
    HIGHER: 6,
    SKIP_EVEN: false,
  },
  hw6: {
    students: [
      {
        name: 'Tanya',
        course: 3,
        subjects: {
          math: [4, 4, 3, 4],
          algorithms: [3, 3, 3, 4, 4, 4],
          data_science: [5, 5, 3, 4],
        },
      },
      {
        name: 'Victor',
        course: 4,
        subjects: {
          physics: [5, 5, 5, 3],
          economics: [2, 3, 3, 3, 3, 5],
          geometry: [5, 5, 2, 3, 5],
        },
      },
      {
        name: 'Anton',
        course: 2,
        subjects: {
          statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
          english: [5, 3],
          cosmology: [5, 5, 5, 5],
        },
      },
    ],
  },
  hw7: {
    ukraine: { tax: 0.195, middleSalary: 1789, vacancies: 11476 },
    latvia: { tax: 0.25, middleSalary: 1586, vacancies: 3921 },
    litva: { tax: 0.15, middleSalary: 1509, vacancies: 1114 },
  },
  hw9: {
    grandSquare: new Array(5).fill(null).map(() => new Array(5).fill(null)),
    colors: [
      'white',
      'red',
      'orange',
      'yellow',
      'lime',
      'green',
      'blue',
      'navy',
      'purple',
      'fuchsia',
      'black',
    ],
  },
};

export default store;
