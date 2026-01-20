let a1=[1,2,3];
let a2=[6,8,9];
console.log([...a1,...a2]) //spread operator

let age=2;
let canvote=age>=18?"yes":"no rajasthani can not vote, only bihari can";
//console.log(canvote);

//even or not

let no=7;
let e=no%2==0?"even":"odd";
//console.log(e)

//check a year is leap year or not
let year=2026;
let y= (year%4==0 && year%100!=0) || (year%400==0) ?"yes":"no";
console.log(y);

