/*---1---*/
export function getMyTaxes(salary) {
  return (salary * this.tax).toFixed(2);
}

/*---2---*/
export function getMiddleTaxes() {
  return (this.middleSalary * this.tax).toFixed(2);
}

/*---3---*/
export function getTotalTaxes() {
  return this.middleSalary * this.tax * this.vacancies;
}

/*---4---*/
export function getMySalary(salary) {
  let answ = { salary };
  answ.taxes = getMyTaxes.call(this, salary);
  answ.profit = salary - answ.taxes;
  return answ;
}
