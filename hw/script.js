var money,time;

function start () {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) ||  money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");

        }
}

start();



var appData = {
    budget:money,
    timeData:time,
    expenses: {
    },
    optionalExpenses:"",
    income: [],
    savings:true
}


function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        var a = prompt("Введите обязателбную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?","");

        if ( (typeof(a) === 'string') && (typeof(a) != null) &&  (typeof(b) === 'string') && (typeof(b) != null && a != '' && b != '' && a.length < 50)) {
            console.log("done");
            appData.expenses[a] = b;
        } else {

        }
    };
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка")
}  else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}


function checkSavings(){
    if(appData.savings == true){
        let  save = +prompt("Какова сумма накопления"),
            persent = +prompt("Под какой процент");

        appData.monthIncome = save/100/12*persent;
        alert("Доход в месяц с вашего депозита:  " + appData.monthIncome)
    }

}

checkSavings();