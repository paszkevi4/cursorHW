import React from 'react';
import { getAverage } from '../hw6/functions';
import { Card } from '../../components/common/Card1';

class Student {
  constructor(props) {
    this.university = props.university;
    this.course = props.course;
    this.fullName = props.fullName;
    this._marks = [];
    this.expelled = false;
  }

  getInfo() {
    return `Студент ${this.course} курсу, ${this.university}, ${this.fullName}`;
  }
  set studentsMarks(marks) {
    if (!this.expelled) {
      this._marks = [...this._marks, ...marks];
      return this._marks;
    } else {
      return null;
    }
  }
  get marks() {
    if (!this.expelled) {
      return this._marks;
    } else {
      return null;
    }
  }
  set marks(mark) {
    if (!this.expelled) {
      this._marks = [...this._marks, mark];
      console.log('new marks array', this._marks);
      return this._marks;
    } else {
      return null;
    }
  }
  getAverageMark() {
    return getAverage(...this._marks);
  }
  dismiss() {
    this.expelled = true;
  }
  recover() {
    this.expelled = false;
  }
}

class BudgetStudent extends Student {
  constructor(props) {
    super(props);
    this.scholarship = 1400;
    setInterval(() => {
      this.getScholarship();
    }, 30000);
  }
  getScholarship() {
    if (!this.expelled && this.getAverageMark() >= 4) {
      console.log(`Ви отримали ${this.scholarship} грн. стипендії`);
    }
  }
}

const ostap = new BudgetStudent({
  university: 'Вищої Школи Психотерапії м.Одеса',
  course: 3,
  fullName: 'Остап Бендер',
});
ostap.studentsMarks = [5, 4, 4, 5];

window.ostap = ostap;

export const HomeWork8 = () => {
  return (
    <div>
      c/o for ostap in console
      <div>{ostap.getInfo()}</div>
      <div>{ostap.getAverageMark()}</div>
      <Card title="title" text={['text', 'text1']} />
    </div>
  );
};
