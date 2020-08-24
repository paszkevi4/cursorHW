import React from 'react';
import { Card } from '../../components/common/Card1';

const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];

const themedPairs = [];
const markedStudents = [];
let markedPairs = [];

const getPairs = () => {
  const pairs = [];
  let j = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i] == 'Олександр' || students[i] == 'Ігор' || students[i] == 'Олексій') {
      pairs.push([students[i]]);
    } else {
      pairs[j].push(students[i]);
      j++;
    }
  }
  return pairs;
};

const combiner = (pairs, themes) => {
  for (let i = 0; i < pairs.length; i++) {
    const pairString = pairs[i].join(' та ');
    themedPairs.push([pairString, themes[i]]);
  }
  return themedPairs;
};

const markStudents = (marked) => {
  students.map((el) => {
    marked.push([el, marks[students.indexOf(el)]]);
  });
  return marked;
};

const markPairs = (pairs) => {
  markedPairs = JSON.parse(JSON.stringify(pairs));
  markedPairs.map((el) => {
    el.push(Math.ceil(Math.random() * 5));
  });
  return markedPairs;
};

console.log(
  'newMade',
  getPairs(),
  combiner(getPairs(), themes),
  markStudents(markedStudents),
  markPairs(themedPairs),
);

export const HomeWork4 = () => {
  return (
    <div className="row">
      <Card title="Students with marks" text={markedStudents} hide={true} />
      <Card title="Pairs" text={markedPairs} hide={true} />
    </div>
  );
};
