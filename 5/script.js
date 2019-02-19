'use strict';

let num = 50;
if(num < 49) {
    console.log("neVerno!");
} else if (num > 100)  {
    console.log("Mnogo");
} else {
    console.log("Verno!");
}

(num == 50) ? console.log('Verno!') : console.log('Neverno!');

switch (num) {
    case num < 49 :
        console.log("neVerno!");
        break;
    case  num > 100 :
        console.log("Mnogo");
        break;
    case num > 80:
        console.log("Mnogo1");
        break;
    case 50:
        console.log("verno");
        break;
    default:
        console.log("Chto to ne tak");
        break;

}