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

//first class function
//inn this we can pass a function to variable and we are treating the variable as a function..
//we can pass a function as an argument inside other func
//it can reurn a function from a function(all 3 required)
function f(){
    console.log("ddddddddddddddddddddddddddddbilllllllll")
    return function p(){
        console.log("demo")
        return function y(){
            console.log("cruuuuuuuuuuuhiiiiiiiiiiiiiiiiiii")
        }
    }
}
let bj=f();
bj() //or f()()

f()()();

setInterval(function(){
    console.log("Hello,world!");

},5000);

//self invoking function
(function(){
    console.log("IIFE");
})();

//advantage of iife
//to obtain data privacy..it can be accessed only where it is defined..don't give access to call anywhere..







