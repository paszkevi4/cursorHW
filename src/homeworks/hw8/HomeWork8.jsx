import React from 'react';

/*

У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.



У стдентів повинні бути наступні властивості: university, course, 
fullName, вони передаються при створенні студента(в конструктор).

Створіть метод this.getInfo() -> "Студент 1го курсу 
Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", 
метод повертає сукупну інформацію про курс, 
учбовий заклад та імені студента.

Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]


*/

class Student {
  constructor(props) {
    (this.university = props.university),
      (this.course = props.course),
      (this.fullName = props.fullName),
      (this._marks = []),
      (this.expelled = false);
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
    }, 2000);
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

export const HomeWork8 = () => {
  return <div>c/o console</div>;
};
