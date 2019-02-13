'use strict';
var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    question = prompt("Ваш бюджет на месяц?", ""),
    question1 = prompt("Во сколько обойдется?",""),
    question2 = prompt("Ваш бюджет на месяц?", ""),
    question3 = prompt("Во сколько обойдется?","");

var appData = {
    money:money,
    timeData:time,
    expenses: {
    },
    optionalExpenses:"",
    income: [],
    savings:false
}
appData.expenses.question = question1;
appData.expenses.question2 = question3;

alert(appData.money);