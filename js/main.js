'use strict';

let money = prompt('Ваш месячный доход ?'),
income = 'фриланс',
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит'),
deposit = confirm('Есть ли у вас депозит в банке ?'),
mission = 1000000,
period = 6;

let expenses1 = prompt('Введите обязательную статью расходов ?');
let amount1 = prompt('Во сколько это обойдется ?');
let expenses2 = prompt('Введите обязательную статью расходов ?');
let amount2 = prompt('Во сколько это обойдется ?');

console.log(typeof Number(money));
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpenses);
console.log(addExpenses.toLowerCase().split(', '));



let budgetMonth = Number(amount1) + Number(amount2);
console.log('Бюджет на месяц:', budgetMonth);

console.log('Цель будет достигнута за ' + Math.ceil(mission/budgetMonth) + ' месяцев(-а)');


let budgetDay = (money - budgetMonth) / 30;
console.log('Бюджет на день:', Math.floor(budgetDay));

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (1200 >= budgetDay && budgetDay >= 600 ) {
  console.log('У вас средний уровень дохода');
} else if (600 >= budgetDay && budgetDay >= 0 ) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}



