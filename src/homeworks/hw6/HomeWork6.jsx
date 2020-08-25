import React from 'react';
import { useState } from 'react';
import { StudentsCard } from './Card';
import { Card } from '../../components/common/Card1';
import store from '../../Store/store';
import {
  getSubjects,
  getAverageMark,
  getStudentInfo,
  getStudentsNames,
  getBestStudent,
  calculateWordLetters,
} from './functions';

export const HomeWork6 = () => {
  let state = store.hw6;
  let [sorted, setSorted] = useState(false);
  const clickHandler = () => {
    setSorted(!sorted);
  };
  const wordForCalcs = 'aaabcccc';

  return (
    <div className="row">
      <StudentsCard
        title="Students"
        text={getStudentsNames(state.students, sorted)}
        clickHandler={clickHandler}
        bestStudent={getBestStudent(state.students)}
      />
      {state.students.map((el) => {
        return (
          <Card
            title={el.name}
            text={[
              `subjects:  ${getSubjects(el)}`,
              ...Object.entries(getStudentInfo(el)),
              `average:  ${getAverageMark(el)}`,
            ]}
            hide={true}
          />
        );
      })}
      <Card
        title="Counter"
        text={[wordForCalcs, ...Object.entries(calculateWordLetters(wordForCalcs))]}
        hide={true}
      />
    </div>
  );
};
